<template>
 <div>
<!--可编辑文字-->
<edittextOne :title="title" :num="num" :occupation="occupation" @popup="popup"></edittextOne>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import edittextOne from '@/components/edittexts/EdittextOne.vue'
interface Data {
   title: string;
   num: string;
   occupation: string;
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
   title: 'vn',
   num: "22",
   occupation: "ADC"
});
 const popup=(flag: boolean): void=>{
    console.log(flag);
 }
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>