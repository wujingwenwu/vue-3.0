<template>
 <div>
<div>{{name}}</div>
<div>{{num}}</div>
<div>{{occupation}}</div>
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
       name: {
           type: String,
       },
       num:{
           type: String,
       },
       occupation:{
         type: String,  
       }
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