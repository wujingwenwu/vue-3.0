<template>
<div>
 

 <img :src="img" alt="" :widths="widths" :height="height">
</div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
//生成二维码

interface Data {
   name: string;
  
   img: string;
}
 export default defineComponent({
   name: '',
   props: {
       widths:{
         type: Number,
       },
       height:{
          type: Number,
       },
       value1:{
         type: String,
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
  
   img: "",
});

return {
...toRefs(data),

}
},
 })
</script>

<style scoped lang='scss'>

</style>