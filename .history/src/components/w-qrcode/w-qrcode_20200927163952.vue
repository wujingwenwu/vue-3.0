<template>
 <div class="d-f">
  <div :style="width">
    <a-input
      v-model:value="value1"
      placeholder="请输入文字或网址"
      allow-clear
    />
  </div>
    <div class="m-l-20"><a-button type="primary">生成二维码</a-button></div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   value1: string;
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
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>