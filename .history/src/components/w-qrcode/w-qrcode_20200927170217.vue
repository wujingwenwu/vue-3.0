<template>
 <div class="d-f">
  <div :style="width">
    <a-input
      v-model:value="value1"
      placeholder="请输入文字或网址"
      allow-clear
    />
  </div>
    <div class="m-l-20"><a-button type="primary" @click="generate">生成二维码</a-button></div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
//生成二维码
import qrcode from "qrcode";
interface Data {
   name: string;
   value1: string;
   img: string;
}
 export default defineComponent({
   name: '',
   props: {
       width:{
           type:String,
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   value1: "",
   img: "",
});
const generate=(): void=>{
   console.log(data.value1);
    qrcode.toDataURL(data.value1).then((res: string) => {
            console.log(res);
            data.img = res;
          });
};
return {
...toRefs(data),
generate,
}
},
 })
</script>

<style scoped lang='scss'>

</style>