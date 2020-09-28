<template>
 <div>
<!--图片预览-->
<w-preview @picture="picture"></w-preview>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wPreview from "@/components/preview/w-preview.vue"

interface Data {
   name: string;
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
   
});

return {
...toRefs(data),
picture,
}
},
 })
</script>

<style scoped lang='scss'>

</style>