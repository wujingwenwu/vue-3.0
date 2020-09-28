<template>
 <div>
<a-button @click="clickCode">{{times}}</a-button>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
   name: string;
   flag: boolean;
   times: string;
}
 export default defineComponent({
   name: '',
   props: {
       name:{
           type:String,
       },
       time:{
           type: Number,
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
    if (data.flag) {
        data.flag = false;
        let langtime = props.time;
        
        const a = setInterval(() => {
          if (langtime == 0) {
            data.flag = true;
            data.times = "发送验证码";
            clearInterval(a);
          } else {
            
            langtime--;
            data.times = `倒计时${langtime}秒`;
          }
        }, 1000);}
};
onMounted(()=>{
    data.times=props.name!
})
return {
...toRefs(data),
clickCode,
}
},
 })
</script>

<style scoped lang='scss'>

</style>