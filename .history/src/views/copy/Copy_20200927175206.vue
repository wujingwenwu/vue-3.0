<template>
 <div>
<!--复制文本-->
<div class="d-f">
  <div class="width">
    <a-input
      v-model:value="value1"
      placeholder="输入的内容会被复制"
      allow-clear
    />   
 </div>
  <div class="m-l-20"><a-button type="danger" @click="copy" :data-clipboard-text="item.NetbarNumber">复制</a-button></div>
  </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   value1: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   value1: "",
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.width{
   width: 400px;
}
</style>