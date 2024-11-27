let body = document.querySelector("body");
let btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function () {
    if(flag === 0){
        btn.innerText = "Light mode"
        body.style.background = "black";
        flag = 1;
    }else{
        btn.innerText = "Dark mode"
        body.style.background = "white";
        flag = 0;
    }
});
