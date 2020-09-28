<template>
 <div>
<!--可编辑文字-->
<edittextOne :name="name" :num="num" :occupation="occupation"></edittextOne>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import edittextOne from '@/components/edittexts/EdittextOne.vue'
interface Data {
   name: string;
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
   name: 'vn',
   num: "22",
   occupation: "ADC"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>