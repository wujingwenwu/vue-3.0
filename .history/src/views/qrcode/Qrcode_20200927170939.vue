<template>
 <div>
<!--生成二维码-->
<div class="d-f">
  <div :style="width">
    <a-input
      v-model:value="value1"
      placeholder="请输入文字或网址"
      allow-clear
    />
  </div>
<w-qrcode :width="width" :widths="widths" :height="height"></w-qrcode>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wQrcode from '@/components/w-qrcode/w-qrcode.vue'
interface Data {
   name: string;
   width: string;
   widths: number;
   height: number;
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
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>