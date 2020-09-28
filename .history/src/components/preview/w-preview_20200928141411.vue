<template>
 <div>
 <h2 class="m-t-20 m-l-10">图片预览</h2>
 <div class="m-l-10 m-t-10">
 <div>单图片预览,点击遮罩层可关闭</div>
 <img src="../../img/6.png" alt="" @click="picture">
 </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>