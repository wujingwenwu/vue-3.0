<template>
 <div class="d-f">
    <a-input
      v-model:value="value1"
      placeholder="input with clear icon"
      allow-clear
    />
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   value1: string;
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
   value1: "",
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>