<template>
 <div>
 </div>
</template>
<script lang="ts">
import { Button } from 'ant-design-vue';
import {defineComponent, reactive, toRefs} from 'vue'
interface Item{
  icon: string;
  name: string;
  path: string;
}
interface Data {
   name: string;
   arr: Item[]
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
   arr:[
     {icon:"",name:"首页",path:''
   },
     {icon:"",name:"常用hooks",path:''
   },
     {icon:"",name:"图片预览",path:''
   },
     {icon:"",name:"趋势",path:''
   },
     {icon:"",name:"底部工具栏",path:''
   },
     {icon:"",name:"通知图标",path:''
   },
     {icon:"",name:"内嵌网页",path:''
   },
     {icon:"",name:"首页",path:''
   },
     {icon:"",name:"首页",path:''
   },
     {icon:"",name:"首页",path:''
   },
     {icon:"",name:"首页",path:''
   },
     {icon:"",name:"首页",path:''
   },
   {icon:"",name:"首页",path:''
   },

   ]
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
