<template>
  <div class="d-f m-t-20">
    <div class="m-l-10"><a-button type="primary" @click="add">添加水印</a-button></div>
    <div class="m-l-10"><a-button type="primary" @click="cancel">取消水印</a-button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import {usewatermark} from "@/watermark/usewatermark";
interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
    });
    const {watermark}=usewatermark()
    const add = () => {
      watermark.set("我是水印")
    }
    const cancel = () => {
      watermark.set("")
    }
    return {
      ...toRefs(data),
      watermark,
      add,
      cancel
    };
  },
});
</script>

<style scoped lang='scss'>
</style>