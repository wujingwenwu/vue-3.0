<template>
 <div>
 
<w-iframe :url="url" :flag="flag" @open="open" @close="close" :height="height" :width="width"></w-iframe>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
import wIframe from "@/components/w-iframe/w-iframe.vue"
interface Data {
   name: string;
   url: string;
   flag: boolean;
   width: number;
   height: number;
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
   flag: false,
   height: 500,
   width: 1250,
});
const open=(): void=>{
   data.flag=true
}
const close=(): void=>{
   data.flag=false
}
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