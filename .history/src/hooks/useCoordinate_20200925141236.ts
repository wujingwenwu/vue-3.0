import { ref ,onMounted} from 'vue';
export const useCoordinate=()=>{
    const x= ref<number>(0)
    const y= ref<number>(0)
    const move=()
    onMounted(()=>{
        window.addEventListener("mousemove")
    })
}