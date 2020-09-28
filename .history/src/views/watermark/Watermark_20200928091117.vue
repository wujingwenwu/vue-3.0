<template>
  <div class="d-f">
    <div><a-button type="primary" @click="add">添加水印</a-button></div>
    <div><a-button type="primary">取消水印</a-button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import {usewatermark} from "@/watermark/usewatermark"
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
    const {add}=usewatermark()
    return {
      ...toRefs(data),
      add,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>