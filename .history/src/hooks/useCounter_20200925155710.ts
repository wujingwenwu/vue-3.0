import {ref} from "vue";
import {message} from 'ant-design-vue';
export const useCounter = (current = 0,{min, max}: {min?: number;max?: number})=>{
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
    const delayPlus=(dalay: number)=>{
    setTimeout(()=>{
        count.value++
    },dalay)
    }
    const delayReduce=(dalay: number)=>{
        setTimeout(()=>{
            count.value--
        },dalay)
    }
    const juantityPlus=()=>{

    }
    const quantityReduction=()=>{

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