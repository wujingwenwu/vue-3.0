<template>
<div>
 
    <div class="m-l-20"><a-button type="primary" @click="generate">生成二维码</a-button></div>
 </div>
 <img :src="img" alt="" :widths="widths" :height="height">
</div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
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
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
  
   img: "",
});
const generate=(): void=>{
   console.log(data.value1);
    qrcode.toDataURL(data.value1).then((res: string) => {
            console.log(res);
            data.img = res;
          });
};
return {
...toRefs(data),
generate,
}
},
 })
</script>

<style scoped lang='scss'>

</style>