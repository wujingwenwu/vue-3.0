<template>
 <div class="with">
<div class="width">
<div class="m-t-20">
<h2>倒计时</h2>
{{date}}
</div>
</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import{useHooks} from '@/hooks/useHooks'
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
const {date}=useHooks()
return {
...toRefs(data),
date,
}
},
 })
</script>

<style scoped lang='scss'>
.with{
   width: 100%;
   background: rgb(240,242,245);
   height: 100%;
}
.width{
   width: 99%;
   height: 99%;
   background: white;
}
</style>