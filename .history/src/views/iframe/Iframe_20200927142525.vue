<template>
 <div>
<!--内嵌网页-->
 <iframe src="https://baidu " width="1200" height="300" frameborder="0" scrolling="auto" ></iframe>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
interface Data {
   name: string;
   url: string;
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
   url: "https://www.baidu.com"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>