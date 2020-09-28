import { ref ,onMounted,onUnmounted} from 'vue';
export const useCoordinate=()=>{
    const x= ref<number>(0)
    const y= ref<number>(0)
    const move=(e: MouseEvent)=>{
        x.value=e.pageX
        y.value=e.pageY
    }
    onMounted(()=>{
        window.addEventListener("mousemove",move)
    });
    onUnmounted(()=>{
        
    })
}
