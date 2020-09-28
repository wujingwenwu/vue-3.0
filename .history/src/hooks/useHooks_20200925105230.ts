import { onUnmounted, ref ,onMounted} from "vue";
import dayjs from 'dayjs'
export const useHooks=()=>{
    let date=ref(dayjs().format('YYYY-MMM-DD HH:mm:ss'))
    let time: any=null
    onMounted(()=>{
    time=setInterval(()=>{
        date.value=dayjs().format('YYYY-MMM-DD HH:mm:ss')
    },)
    })
}