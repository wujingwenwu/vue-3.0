<template>
 <div>
<!--生成二维码-->
<w-qrcode :width="width" :widths="widths"></w-qrcode>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wQrcode from '@/components/w-qrcode/w-qrcode.vue'
interface Data {
   name: string;
   width: string;
   widths: number;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
   wQrcode
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   width: "width:300px;",
   widths: 100,
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>