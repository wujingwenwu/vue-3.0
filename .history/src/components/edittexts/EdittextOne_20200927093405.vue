<template>
 <div>
<div class="padding" @click="">{{title}}</div>
<div class="padding">{{num}}</div>
<div class="padding">{{occupation}}</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
       title: {
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
.padding{
    padding: 10px 10px;
}
</style>