<template>
 <div>
<!--可编辑文字-->

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   num: string;
   
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: 'vn',
   num: "22"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>