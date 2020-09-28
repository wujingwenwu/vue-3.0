<template>
  <div>
    <!--图片预览-->
    <w-preview
      :width="width"
      :transforms="transforms"
      @clockwise="clockwise"
      @anticlockwise="anticlockwise"
      @enlarge="enlarge"
      @narrow="narrow"
    ></w-preview>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import wPreview from "@/components/preview/w-preview.vue";
import {message} from 'ant-design-vue';
interface Data {
  name: string;
  width: number;
  transforms: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    wPreview,
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      width: 200,
      transforms: 0,
    });
    const clockwise = (): void => {
      data.transforms = data.transforms + 90;
    };
    const anticlockwise = (): void => {
      data.transforms = data.transforms - 90;
    };
    const enlarge=(): void=>{
      if(data.width<400){
        data.width += 20;  
      }else{
       message.error("图片已经最大了") 
      }
    };
    const narrow=(): void=>{
      if(data.width>50){
        data.width -= 20;
      }else{
       message.error("图片已经最小了")   
      }
    };
    return {
      ...toRefs(data),
      clockwise,
      anticlockwise,
      enlarge,
      narrow,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>