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
const clickCode=(): void=>{
     if (data.flags) {
        data.flags = false;
        let langtime = 60;
        
        const a = setInterval(() => {
          if (langtime == 0) {
            data.flags = true;
            data.times = "发送验证码";
            clearInterval(a);
          } else {
            
            langtime--;
            data.times = `倒计时${langtime}秒`;
          }
        }, 1000);
};
onMounted(()=>{
    data.times=props.time
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>