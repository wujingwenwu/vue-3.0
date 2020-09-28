import {ref} from "vue";
import {message} from 'ant-design-vue';
export const useCounter = (current = 0,{min, max}: {min?: number;max?: number},dalay=1000)=>{
    if(current<min!){
       current=min!
       message.error("默认值小于最小值")
    }
    if()
return{

}
}