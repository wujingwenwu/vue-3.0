<template>
 <div>
<div class="padding" @click="popup" v-if="flag===false">{{title}}</div>
<div v-else>
 <a-input
      v-model:value="value1"
      placeholder="input with clear icon"
      allow-clear
      
    />
</div>
<div class="padding">{{num}}</div>
<div class="padding">{{occupation}}</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   
   value1: string;
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
       },
       flag:{
           type: Boolean,
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){


const data: Data = reactive<Data>({
   name: '',
   
   value1: 'vn',
})
const popup=(): void=>{
    // data.flag=true
    ctx.emit("popup")
}
return {
...toRefs(data),
popup,
}
},
 })
</script>

<style scoped lang='scss'>
.padding{
    padding: 10px 10px;
}
</style>