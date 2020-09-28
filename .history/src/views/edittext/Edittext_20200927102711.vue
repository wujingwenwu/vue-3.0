<template>
 <div>
<!--可编辑文字-->
<edittextOne :placeholder="placeholder" :flag="flag" :titles="titles" :num="num" :occupation="occupation" @popup="popup"></edittextOne>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import edittextOne from '@/components/edittexts/EdittextOne.vue'
interface Data {
   titles: string;
   num: string;
   occupation: string;
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
   num: "22",
   occupation: "ADC",
   flag: false,
   placeholder: "请输入内容"
});
 const popup=(): void=>{
     data.flag=true
    
 }
return {
...toRefs(data),
popup
}
},
 })
</script>

<style scoped lang='scss'>

</style>