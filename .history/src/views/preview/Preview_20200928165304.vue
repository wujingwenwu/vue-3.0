<template>
 <div>
<!--图片预览-->
<w-preview :width="width" :transform="transform"></w-preview>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wPreview from "@/components/preview/w-preview.vue"

interface Data {
   name: string;
   width: number;
   transform: number;
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
   width: 200,
   transform: 0,
   
});

return {
...toRefs(data),

}
},
 })
</script>

<style scoped lang='scss'>

</style>