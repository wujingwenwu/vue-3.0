<template>
 <div>
<!--可编辑文字-->
<edittextOne :placeholder="placeholder" :flag="flag" :titles="titles" @popup="popup" @cancel="cancel" @determine="determine"></edittextOne>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import edittextOne from '@/components/edittexts/EdittextOne.vue'
interface Data {
   titles: string;
   flag: boolean;
   placeholder: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
    edittextOne,
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   titles: '',
   flag: false,
   placeholder: "请输入内容"
});
onMounted(()=>{
   data.titles="vn"
})
 const popup=(): void=>{
     data.flag=true
    
 };
 //取消
 const cancel=(): void=>{
     data.flag=false
 };
 //确定
 const determine=(value: string): void=>{
   data.titles=value
   console.log(data.titles);
   data.flag=false
 };
return {
...toRefs(data),
popup,
cancel,
determine,
}
},
 })
</script>

<style scoped lang='scss'>

</style>