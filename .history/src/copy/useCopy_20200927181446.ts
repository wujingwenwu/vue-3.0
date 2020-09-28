// import Clipboard from 'clipboard';
export const useCopy=()=>{
  const copy=(value: string)=>{
    // const clipboard = new Clipboard('#copy_text');
    // clipboard.on('success', e => {
    // // 释放内存
    // clipboard.destroy()
    // })
    let text =value
    let oInput = document.createElement('input') //创建input节点
            oInput.value = value//给input的value赋值
            document.body.appendChild(oInput) //向页面插入input节点
            oInput.select() // 选中input
            
  }

    return{
        copy,
    }
}