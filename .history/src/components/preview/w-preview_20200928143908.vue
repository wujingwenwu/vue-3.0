<template>
  <div>
    <h2 class="m-t-20 m-l-10">图片预览</h2>
    <div class="m-l-10 m-t-10">
      <div>单图片预览,点击遮罩层可关闭</div>
      <img src="../../img/6.png" alt="" @click="picture" />
      <div class="box" v-if="flag === false" @click="picture"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
  flag: boolean;
}
export default defineComponent({
  name: "",
  props: {
    
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      flag: true,
    });
    const picture=(): void=>{
    
        data.flag=false
     
    };
    return {
      ...toRefs(data),
      picture,
    };
  },
});
</script>

<style scoped lang='scss'>
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  opacity: 0.7;
}
</style>