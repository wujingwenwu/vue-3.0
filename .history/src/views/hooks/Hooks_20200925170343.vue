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
  <a-button @click="set(100)">设置</a-button>
  <a-button @click="reset">重置</a-button>
   <a-button @click="delayPlus(1000)">延迟加</a-button>
  <a-button @click="delayReduce(1000)">延迟减</a-button>
  <a-button @click="juantityPlus(5)">按数量加</a-button>
  <a-button @click="quantityReduction(5)">按数量减</a-button>
 <div class="m-l-10">{{count}}</div>
  </div>
  <div>
  <h2>本地存储</h2>
  <div class="d-f">
  <div v-for="item in title" :key="item.name">{{item.name}}</div>
  <a-button @click="deposits">存本地</a-button>
  <a-button @click="eliminates">清除本地</a-button>

  </div>
  </div>
  </div>
</div>
</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,ref,onMounted} from 'vue';
import{useHooks} from '@/hooks/useHooks';
import {useCoordinate} from "@/hooks/useCoordinate";
import {useCounter} from "@/hooks/useCounter";
import {useStorage} from "@/hooks/useStorage";
interface Item{
   name: string;
}
interface Data {
   name: string;
   arr: Item[];
   title: any;
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
   arr: [{name:"何废物"}],
   title: [],
})
const current =ref<number>(0)
const {date}=useHooks()
const {x,y}=useCoordinate()
const {add,count,reduce,set,reset,delayPlus,delayReduce,juantityPlus,quantityReduction}=useCounter(current.value,{min:0,max:100})
const {deposit,eliminate}=useStorage()

//存本地
const deposits=(): void=>{
  const name="arr" 
   deposit(name,data.arr)
   
};
//删除
const eliminates=(): void=>{
 const name="arr"
 eliminate(name)
};
onMounted(()=>{
   if(localStorage.getItem("arr")){
   data.title=JSON.parse(localStorage.getItem("arr")!)
   }
})
return {
...toRefs(data),
date,
x,
y,
add,
count,
reduce,
set,
reset,
delayPlus,
juantityPlus,
quantityReduction,
delayReduce,
eliminates,
deposits,
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