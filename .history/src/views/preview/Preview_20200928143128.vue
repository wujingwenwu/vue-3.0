<template>
 <div>
<!--图片预览-->
<w-preview @picture="picture" :flag="flag"></w-preview>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wPreview from "@/components/preview/w-preview.vue"

interface Data {
   name: string;
   flag: boolean;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
    wPreview
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   flag: true,
});
const picture=(flag: boolean): void=>{
   data.flag=false
}
return {
...toRefs(data),
picture,
}
},
 })
</script>

<style scoped lang='scss'>

</style>