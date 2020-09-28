<template>
 <div class="d-f">
  <div>
    <a-menu
      v-model:selectedKeys="$route.path"
      style="width: 256px"
      mode="vertical" v-for="(item,index) in arr" :key="index"
    >
      <a-menu-item :key="index" @Click="titleClick(item)">
        <component :is="item.icon"></component>
        {{item.name}}
      </a-menu-item>
    </a-menu>
  </div>
     <router-view/>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import {useRouter} from "vue-router"
interface Item{
  icon: string;
  name: string;
  path: string;
}
interface Data {
   name: string;
   arr: Item[];
   selectedKeys: any[];
   openKeys: any[];
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
   selectedKeys: [],
      openKeys: [],
   arr:[
     {icon:"HomeOutlined",name:"首页",path:'/'
   },
     {icon:"DeploymentUnitOutlined",name:"常用hooks",path:'/hooks'
   },
     {icon:"ZoomInOutlined",name:"图片预览",path:'/preview'
   },
     {icon:"BarChartOutlined",name:"趋势",path:'/trend'
   },
     {icon:"ToolOutlined",name:"底部工具栏",path:'/foottoolbar'
   },
     {icon:"BellOutlined",name:"通知图标",path:'/noticeicon'
   },
     {icon:"LineChartOutlined",name:"内嵌网页",path:'/iframe'
   },
     {icon:"MessageOutlined",name:" 验证码按钮",path:'/countdown'
   },
     {icon:"PaperClipOutlined",name:"进度条拓展",path:'/progress'
   },
     {icon:"QrcodeOutlined",name:"生成二维码",path:'/qrcode'
   },
     {icon:"CopyrightCircleOutlined",name:"复制文本",path:'/copy'
   },
     {icon:"BorderTopOutlined",name:"生成水印",path:'/watermark'
   },
   {icon:"EditOutlined",name:"可编辑文字",path:'/edittext'
   },
   ]
});
const router=useRouter()
const titleClick=(item: any)=>{
  console.log(item.path);
  console.log(typeof(item.path));
  router.push(item.path)
  // router.push({path:"/edittext"})
};
return {
...toRefs(data),
titleClick,
}
},
 })
</script>

<style scoped lang='scss'>
.d-f{
  display: flex;
}
</style>
