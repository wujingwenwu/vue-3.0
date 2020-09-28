<template>
 <div>
<a-button @click="clickCode">{{time}}</a-button>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
   name: string;
   flags: boolean;
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
    flags: true,
    times: "",
});

onMounted(()=>{
    data.times=props.time!
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>