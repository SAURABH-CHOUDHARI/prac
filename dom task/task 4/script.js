let btn = document.querySelector("button");
let box = document.querySelector(".box");
 let flag = 0;
btn.addEventListener("click", function(){
    if(flag===0){
        box.style.display = "none";
        flag =1;
    }else{
        box.style.display = "block";
        flag= 0;
    }
})
