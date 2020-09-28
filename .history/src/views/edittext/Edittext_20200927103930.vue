<template>
 <div>
<!--可编辑文字-->
<edittextOne :placeholder="placeholder" :flag="flag" :titles="titles" @popup="popup" @cancel="cancel"></edittextOne>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
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
   titles: 'vn',
   flag: false,
   placeholder: "请输入内容"
});
 const popup=(): void=>{
     data.flag=true
    
 };
 const cancel=(): void=>{
     data.flag=false
 }
return {
...toRefs(data),
popup,
cancel
}
},
 })
</script>

<style scoped lang='scss'>

</style>