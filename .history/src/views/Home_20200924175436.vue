<template>
 <div>
 <a-button type="primary" shape="circle">A</a-button>
 </div>
</template>

<script lang="ts">
import { Button } from 'ant-design-vue';
import {defineComponent, reactive, toRefs} from 'vue'
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(){

const data: Data = reactive<Data>({
   name: '',
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
