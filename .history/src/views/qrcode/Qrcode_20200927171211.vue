<template>
 <div>
<!--生成二维码-->
<div class="d-f">
  <div :style="width">
    <a-input
      v-model:value="value1"
      placeholder="请输入文字或网址"
      allow-clear
    />    <div class="m-l-20"><a-button type="primary" @click="generate">生成二维码</a-button></div>
 </div>
  </div>
<w-qrcode  :widths="widths" :height="height" :value1="value1"></w-qrcode>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wQrcode from '@/components/w-qrcode/w-qrcode.vue';
import qrcode from "qrcode";
interface Data {
   name: string;
   width: string;
   widths: number;
   height: number;
    value1: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
   wQrcode
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   width: "width:300px;",
   widths: 100,
   height: 100,
    value1: "",
});
const generate=(): void=>{
    qrcode.toDataURL(props.value1).then((res: string) => {
            console.log(res);
            data.img = res;
          });
};
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>