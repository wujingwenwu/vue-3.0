import {ref} from 'vue'
import dayjs from 'dayjs'
export const hookCount=()=>{
    let data =ref(dayjs().format("YYYY-"))
}