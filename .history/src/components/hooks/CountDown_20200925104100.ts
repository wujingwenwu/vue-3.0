import {ref,onMounted} from 'vue'
import dayjs from 'dayjs'
export const hookCount=()=>{
    let data =ref(dayjs().format("YYYY-MM-DD HH:mm:ss"))
    onMounted(()=>{
        
    })
}