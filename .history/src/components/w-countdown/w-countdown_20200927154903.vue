<template>
 <div>
<a-button>{{time}}</a-button>
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
       time:{
           type:String,
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