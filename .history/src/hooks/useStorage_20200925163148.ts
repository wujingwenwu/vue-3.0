import{ref} from 'vue'
export const useStorage=()=>{
  const deposit=(name:string,arr:any)=>{
      if(Array.isArray(arr)|| typeof(arr)==="object"){
          localStorage.setItem(name,JSON.stringify(arr))
      }else{
          localStorage.setItem(name,arr)
      }
  }
  const 
    return{

    }
}