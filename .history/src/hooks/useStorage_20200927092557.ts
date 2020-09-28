import{ref} from 'vue'
export const useStorage=()=>{
    //存
    const title=ref<any>()
  const deposit=(name: string,arr: any)=>{
      if(Array.isArray(arr)|| typeof(arr)==="object"){
          localStorage.setItem(name,JSON.stringify(arr))
          title.value=JSON.parse(localStorage.getItem(name)!)
      }else{
          localStorage.setItem(name,arr)
          title.value=localStorage.getItem(name)
      }
  }
  //清
  const eliminate=(name: string)=>{
  localStorage.removeItem(name)
  title.value=JSON.parse(localStorage.getItem(name)!)
  }
 
    return{
        deposit,
        eliminate,
        title,
    }
}