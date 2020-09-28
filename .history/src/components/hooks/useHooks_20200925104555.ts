import {ref,onMounted,onUnmounted} from 'vue'
import dayjs from 'dayjs'
export const useHooks=()=>{
    let data =ref(dayjs().format("YYYY-MM-DD HH:mm:ss"))
    let time: any=null
    onMounted(()=>{
     time=setInterval(()=>{
   data.value=dayjs().format("YYYY-MM-DD HH:mm:ss")
     },1000)
    })
    onUnmounted(()=>{
      clearInterval(time)
    })
    return{
      data
    }
}