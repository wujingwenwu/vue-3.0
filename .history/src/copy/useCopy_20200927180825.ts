// import Clipboard from 'clipboard';
export const useCopy=()=>{
  const copy=(value: string)=>{
    // const clipboard = new Clipboard('#copy_text');
    // clipboard.on('success', e => {
    // // 释放内存
    // clipboard.destroy()
    // })
    let oInput = document.createElement('input') //创建input节点
            oInput.value = JSON.stringify(value) //给input的value赋值
            document.body.appendChild(oInput) //向页面插入input节点
            oInput.select() // 选中input
            try {
                await document.execCommand('Copy') // 执行浏览器复制命令
              
            } 
  }
    return{
        copy,
    }
}