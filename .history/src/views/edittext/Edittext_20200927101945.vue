<template>
 <div>
<!--可编辑文字-->
<edittextOne :flag="flag" :titles="titles" :num="num" :occupation="occupation" @popup="popup"></edittextOne>
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