let img = document.querySelector(".img");
let like = document.querySelector(".like");

let toggle = 50;
img.addEventListener("dblclick", function () {
    let num = 10;
    toggle = toggle + num;
    
        like.style.height = `${toggle}px`;
        like.style.width = `${toggle}px`;
    });
