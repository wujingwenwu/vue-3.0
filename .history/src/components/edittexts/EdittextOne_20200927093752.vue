<template>
 <div>
<div class="padding" @click="popUp" v-if="flag===false">{{title}}</div>
<div v-else>

</div>
<div class="padding">{{num}}</div>
<div class="padding">{{occupation}}</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   flag: boolean;
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
   flag: false,
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