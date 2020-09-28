// import Clipboard from 'clipboard';
export const useCopy=()=>{
  const copy=(value: string)=>{
    // const clipboard = new Clipboard('#copy_text');
    // clipboard.on('success', e => {
    // // 释放内存
    // clipboard.destroy()
    // })
    const text =value
    const oInput = document.createElement('input') //创建input节点
            oInput.value = text//给input的value赋值
            document.body.appendChild(oInput) //向页面插入input节点
            oInput.select() // 选中input
            document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      alert("复制成功");
      
  }

    return{
        copy,
        
    }
}