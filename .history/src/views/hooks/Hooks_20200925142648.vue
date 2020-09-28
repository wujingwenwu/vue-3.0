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
  <div class="d-f">
  <a-button>增加</a-button>
  <a-button>减少</a-button>
  <a-button>设置</a-button>
  <a-button>重置</a-button>
   <a-button>Default</a-button>
  <a-button>Default</a-button>
  <a-button>Default</a-button>
  <a-button>Default</a-button>
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
</style>