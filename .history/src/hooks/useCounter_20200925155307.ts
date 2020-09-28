import {ref} from "vue";
import {message} from 'ant-design-vue';
export const useCounter = (current = 0,{min, max}: {min?: number;max?: number},dalay=1000)=>{
    if(current<min!){
       current=min!
       message.error("默认值小于最小值")
    }
    if(current>max!){
        current=max!
        message.error("默认值大于最小值") 
    }
    const count=ref<number>(current)
    const add=()=>{
        if(count.value<max!)count.value++
    }
    const reduce=()=>{
        if(count.value>min!) count.value--
    }
    const set=(num: number)=>{
       count.value=num
    }
    const reset=()=>{
        count.value=current
    }
    const delayPlus=()=>{
    setTimeout(()=>{
        count.value++
    },dalay)
    }
    const delayReduce=()=>{
        setTimeout(()=>{
            count.value--
        },dalay)
    }
return{
    add,
    count,
    reduce,
    set,
    reset,
    delayPlus,
    delayReduce,
}
}