<template>
 <div>
<!--内嵌网页-->
 <v-html-panel :url.asyc="url1"></v-html-panel>
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