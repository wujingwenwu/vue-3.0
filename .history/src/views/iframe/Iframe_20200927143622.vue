<template>
 <div>
<w-iframe :url="url"></w-iframe>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
import wIframe from "@/components/w-iframe/w-iframe.vue"
interface Data {
   name: string;
   url: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
   wIframe
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   url: "www.baidu.com"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>