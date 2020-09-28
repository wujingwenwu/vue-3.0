<template>
  <div>
    <h2 class="m-t-20 m-l-10">图片预览</h2>
    <div class="m-l-10 m-t-10">
      <div>单图片预览,点击遮罩层可关闭</div>
      <img src="../../img/6.png" alt="" @click="picture" />
      <div class="box d-f f-d-c a-i-c j-c-c" v-if="flag === false" @click="mask">
        <div >
          <img src="../../img/6.png" alt="" />
          <div class="mask d-f a-i-c j-c-s-a">
           <img src="../../img/a.png" alt="" width="40" height="40">
           <img src="../../img/b.png" alt="" width="36" height="36">
           <img src="../../img/c.png" alt="" width="34" height="34">
           <img src="../../img/d.png" alt="" width="37" height="37">
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

</style>