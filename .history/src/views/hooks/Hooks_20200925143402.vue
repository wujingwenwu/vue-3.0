<template>
 <div class="with">
<div class="width">
<div class="m-t-20 m-l-20">
<h2>倒计时</h2>
{{date}}
<h2 class="m-t-20">鼠标移动的坐标</h2>
  {{x}}-----{{y}}
  <div>
  <h2>计数器</h2>
  <div class="d-f ">
  <a-button @click="add">增加</a-button>
  <a-button @click="reduce">减少</a-button>
  <a-button @click="set">设置</a-button>
  <a-button @click="reset">重置</a-button>
   <a-button @click="delayPlus">延迟加</a-button>
  <a-button @click="delayReduce">延迟减</a-button>
  <a-button>按数量加</a-button>
  <a-button>按数量减</a-button>
  0
  </div>
  </div>
</div>
</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import{useHooks} from '@/hooks/useHooks';
import {useCoordinate} from "@/hooks/useCoordinate"
interface Data {
   name: string;
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
})
const {date}=useHooks()
const {x,y}=useCoordinate()
return {
...toRefs(data),
date,
x,
y,
}
},
 })
</script>

<style scoped lang='scss'>
.with{
   width: 100%;
   background: rgb(240,242,245);
   height: 100%;
}
.width{
   width: 99%;
   height: 99%;
   background: white;
}
.padding{
   padding: 0px 10px;
}
</style>