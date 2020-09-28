<template>
<div>
 

 <img :src="img" alt="" :widths="widths" :height="height">
</div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
//生成二维码
import qrcode from "qrcode";
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
       value:{
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
onMounted(()=>{
  qrcode.toDataURL(props.value!).then((res: string) => {
            console.log(res);
            data.img = res;
          });
})

return {
...toRefs(data),

}
},
 })
</script>

<style scoped lang='scss'>

</style>