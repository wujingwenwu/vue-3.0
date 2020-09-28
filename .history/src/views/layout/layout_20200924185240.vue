<template>
 <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="vertical"
      @click="handleClick"
    >
      <a-menu-item key="1">
        <MailOutlined />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <CalendarOutlined />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template v-slot:title>
          <span><AppstoreOutlined /><span>Navigation Three</span></span>
        </template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template v-slot:title>
          <span><SettingOutlined /><span>Navigation Four</span></span>
        </template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
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
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
