import { onUnmounted, ref ,onMounted} from "vue";
import dayjs from 'dayjs'
export const useHooks=()=>{
    const date=ref(dayjs().format('YYYY-MMM-DD HH:mm:ss'))
    const time: any=null
    onMounted(()=>{
    time=setInterval(()=>{
        date.value=dayjs().format('YYYY-MMM-DD HH:mm:ss')
    },1000)
    })
    onUnmounted(()=>{
        clearInterval(time)
    })
    return{
        date
    }
}