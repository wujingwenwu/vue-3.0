<template>
 <div>
<!--生成二维码-->
<w-qrcode :width="width"></w-qrcode>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wQrcode from '@/components/w-qrcode/w-qrcode.vue'
interface Data {
   name: string;
   width: string;
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
   width: "style='width:500px'"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>