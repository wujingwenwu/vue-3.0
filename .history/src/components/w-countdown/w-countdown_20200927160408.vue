<template>
 <div>
<a-button @click="clickCode">{{time}}</a-button>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   flag: boolean;
   times: string;
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
   flag: true,
   times: ""
});
const clickCode=(): void=>{

};
return {
...toRefs(data),
clickCode,
}
},
 })
</script>

<style scoped lang='scss'>

</style>