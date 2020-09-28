<template>
 <div>
 </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
interface Item{
  icon: string;
  name: string;
  path: string;
}
interface Data {
   name: string;
   arr: Item[];
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
     {icon:"HomeOutlined",name:"首页",path:''
   },
     {icon:"DeploymentUnitOutlined",name:"常用hooks",path:''
   },
     {icon:"ZoomInOutlined",name:"图片预览",path:''
   },
     {icon:"BarChartOutlined",name:"趋势",path:''
   },
     {icon:"ToolOutlined",name:"底部工具栏",path:''
   },
     {icon:"BellOutlined",name:"通知图标",path:''
   },
     {icon:"LineChartOutlined",name:"内嵌网页",path:''
   },
     {icon:"MessageOutlined",name:" 验证码按钮",path:''
   },
     {icon:"PaperClipOutlined",name:"进度条拓展",path:''
   },
     {icon:"QrcodeOutlined",name:"生成二维码",path:''
   },
     {icon:"",name:"复制文本",path:''
   },
     {icon:"",name:"生成水印",path:''
   },
   {icon:"",name:"可编辑文字",path:''
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
