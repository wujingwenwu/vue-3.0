<template>
  <div>
    <div class="padding" @click="popup" v-if="flag === false">{{ name }}</div>
    <div v-else class="d-f">
      <a-input v-model:value="value1" :placeholder="placeholder" allow-clear />
      <span class="d-f"><div class="m-l-10"><a-button type="primary" @click="determine">确定</a-button></div>
       <div class="m-l-10"><a-button @click="cancel">取消</a-button></div></span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  name: string;

  value1: string;
}
export default defineComponent({
  name: "",
  props: {
    titles: {
      type: String,
    },

    flag: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",

      value1: "",
    });
    const popup = (): void => {
      // data.flag=true
      ctx.emit("popup");
    };
    const cancel=(): void=>{
     ctx.emit("cancel");
    };
    const determine=(): void=>{
     ctx.emit("determine");
    };
    onMounted(() => {
      data.value1 = props.titles!;
      data.name = props.titles!;
    });
    return {
      ...toRefs(data),
      popup,
      cancel,
    };
  },
});
</script>

<style scoped lang='scss'>
.padding {
  padding: 10px 10px;
}
</style>