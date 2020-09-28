<template>
  <div>
    <h2 class="m-t-20 m-l-10">图片预览</h2>
    <div class="m-l-10 m-t-10">
      <div>单图片预览,点击遮罩层可关闭</div>
      <img src="../../img/6.png" alt="" @click="picture" />
      <div class="box d-f f-d-c a-i-c j-c-c" v-if="flag === false" @click="mask">
        <div >
          <img src="../../img/6.png" alt="" :width="width"/>
          <div class="mask d-f a-i-c j-c-s-a">
          <ZoomInOutlined class="lind"/>
          <ZoomOutOutlined class="lind" />
          <RedoOutlined class="lind" />
          <UndoOutlined class="lind" />
         
          </div>
        </div>
      </div>
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
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      flag: true,
    });
    const picture = (): void => {
      data.flag = false;
      document
        .querySelector("body")!
        .setAttribute("style", "overflow: hidden;");
    };
    const mask = (): void => {
      data.flag = true;
    };
    return {
      ...toRefs(data),
      picture,
      mask,
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
  background: rgba($color: #000, $alpha: 0.7); 
}
.mask{
  width: 300px;
  height: 40px;
   background: rgba($color: #000, $alpha: 0.1); 
   border-radius: 10px;
   margin-top: 20px;
   margin-left: 40px;
   z-index: 9999;
}
.lind{
   color: white;
   font-size: 24px;
}
</style>