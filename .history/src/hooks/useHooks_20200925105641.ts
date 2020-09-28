import { onUnmounted, ref ,onMounted} from "vue";
import dayjs from 'dayjs'
export const useHooks=()=>{
    const date=ref(dayjs().format('YYYY-MMM-DD HH:mm:ss'))
    let timer: any=null
    onMounted(()=>{
    timer=setInterval(()=>{
        date.value=dayjs().format('YYYY-MMM-DD HH:mm:ss')
    },1000)
    })
    onUnmounted(()=>{
        clearInterval(timer)
    })
    return{
        date
    }
}