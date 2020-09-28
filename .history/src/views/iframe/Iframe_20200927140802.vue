<template>
 <div>
<!--内嵌网页-->
 <v-html-panel :url="url1">1212</v-html-panel>
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
   url: "https://baidu.com"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>