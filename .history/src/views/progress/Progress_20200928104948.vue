<template>
 <div class="progress">
进度条拓展
 <div>
 <a-progress :percent="50" status="active"   />
 </div>
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
.progress{
   height: 100px;
   width: 200px;
}
</style>