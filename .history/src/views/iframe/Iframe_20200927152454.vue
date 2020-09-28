<template>
 <div>
 
<w-iframe :url="url" :flag="flag" @open="open"></w-iframe>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
import wIframe from "@/components/w-iframe/w-iframe.vue"
interface Data {
   name: string;
   url: string;
   flag: boolean;
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
   url: "https://www.baidu.com",
   flag: false
});
const open=(): void=>{
   data.flag=true
}
return {
...toRefs(data),
open,
}
},
 })
</script>

<style scoped lang='scss'>

</style>