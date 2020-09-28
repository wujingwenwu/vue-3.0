<template>
 <div>
<w-iframe></w-iframe>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
import wIframe from "@/components/w-iframe/w-iframe"
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