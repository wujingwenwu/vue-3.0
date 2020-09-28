<template>
 <div class="progress">
进度条拓展
 <div>
 <a-progress :percent="50" status="active" strokeWidth="300px"  />
 <div class="progressContainer">
     <div class="progress" :style="{width:progress+'%'}">
          <b>{{progress}}%</b>
     </div>
</div>


 </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
   name: string;
   progreess: number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   progreess: 30
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.progress{
   height: 100px;
   width: 200px;
}
div.progressContainer{
          height: 20px;
          width: 96%;
          border-radius: 10px;
          background-color: #ddd;
          margin-left: 2%;
}
div.progress{
            background-color: #1C8DE0;
            border-radius: 10px;
            height:20px;
            line-height: 20px;
}
b{
              color:#fff;
              font-weight: 100;
              font-size: 12px;
              position:absolute;
	      left:40%; 
 }


</style>