<template>
  <div>
    <!--图片预览-->
    <w-preview
      :width="width"
      :transforms="transforms"
      @clockwise="clockwise"
      @anticlockwise="anticlockwise"
      @enlarge="enlarge"
    ></w-preview>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import wPreview from "@/components/preview/w-preview.vue";

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
    data.width += 20;
    };
    const narrow=(): void=>{
      data.width -= 20;
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