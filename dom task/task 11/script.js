let menu = document.querySelector(".menu");
let list = document.querySelector(".list");

let toggle = 0;
menu.addEventListener("click", function () {
    if(toggle===0){
        list.style.opacity = "0";
        toggle = 1;
    }else{
        list.style.opacity = "1";
        toggle= 0;
    }
    
});
