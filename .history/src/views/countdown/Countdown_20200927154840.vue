<template>
 <div>
 <w-countdown :time="time"></w-countdown>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import wCountdown from '@/components/w-countdown/w-countdown.vue'
interface Data {
   name: string;
   time: string;
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
   time: "发送验证码"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>