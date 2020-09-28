<template>
 <div>
<!--内嵌网页-->
<div class="d-f m-t-20">
<div class="m-l-10"><a-button type="primary" @click="open">
   打开内嵌网页
  </a-button></div>
  <div class="m-l-10"><a-button type="primary">
   关闭内嵌网页
  </a-button></div>
</div>
 <iframe :src="url " width="1250" height="300" frameborder="0" scrolling="no" ></iframe>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
       url:{
           type: String,
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
});
const open=(): void=>{
  ctx.emit("open")
};
return {
...toRefs(data),
open,
}
},
 })
</script>

<style scoped lang='scss'>

</style>