<template>
 <div>
<!--内嵌网页-->
<div class="d-f m-t-20">
<div class="m-l-10"><a-button type="primary" @click="open">
   打开内嵌网页
  </a-button></div>
  <div class="m-l-10"><a-button type="primary" @click="close">
   关闭内嵌网页
  </a-button></div>
</div>
 <div v-if="flag===true"><iframe :src="url " :width="width" :height="width" frameborder="0" :scrolling="scrolling" ></iframe></div>
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
       },
       flag:{
         type: Boolean,   
       },
       width:{
           type: Number,
       },
       height:{
           type: Number,
       },
       scrolling:{
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
const close=(): void=>{
  ctx.emit("close")
};
return {
...toRefs(data),
open,
close
}
},
 })
</script>

<style scoped lang='scss'>

</style>