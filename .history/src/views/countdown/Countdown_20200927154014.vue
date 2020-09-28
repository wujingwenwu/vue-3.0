<template>
 <div>
 <w-countdown ></w-countdown>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wCountdown from '@/components/w-countdown/w-countdown.vue'
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
    wCountdown
   },
setup(props, ctx: SetupContext){

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