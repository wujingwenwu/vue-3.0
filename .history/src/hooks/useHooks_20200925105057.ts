import { onUnmounted, ref } from "vue";

import (ref,onMounted,onUnmounted) from 'vue'
import dayjs from 'dayjs'
export const useHooks=()=>{
    let date=ref(dayjs().format('YYYY-MMM-DD HH:mm:ss'))
    
}