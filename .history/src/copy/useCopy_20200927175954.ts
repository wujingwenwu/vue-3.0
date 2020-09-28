import Clipboard from 'clipboard';
export const useCopy=()=>{
  const copy=()=>{
    const clipboard = new Clipboard('#copy_text');
    clipboard.on('success', e => {
    // 释放内存
    clipboard.destroy()
    })
   
  }
    return{
        copy,
    }
}