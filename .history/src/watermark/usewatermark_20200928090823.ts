import {onMounted} from "vue"
export const usewatermark=()=>{
    onMounted(()=>{
        localStorage.setItem("loginUserName", "ruan");
        localStorage.setItem("logunUserPhone", "123456");
    })
    const add=()=>{
        const strArr = `${localStorage.getItem(
            "loginUserName"
        )}${localStorage
            .getItem("logunUserPhone")!
            .slice(7, 11)}[${new Date()}]`;
    const ctx = document.createElement("canvas");
    ctx.width = 250;
    ctx.height = 100;
    ctx.style.display = "none";
    const cans = ctx.getContext("2d")!;
    cans.rotate((-20 * Math.PI) / 180);
    cans.font = "12px Microsoft YaHei";
    cans.fillStyle = "rgba(17, 17, 17, 0.20)";
    cans.textAlign = "left";
    cans.fillText(strArr, 0, 100);
    cans.save();
    return ctx.toDataURL();
    
    }
    return{
        add
    }
}