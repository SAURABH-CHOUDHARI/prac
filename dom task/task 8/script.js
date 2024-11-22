let box = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let po1 = Math.floor(Math.random() * 300);
    let po2 = Math.floor(Math.random() * 300);
        box.style.margin = `${po1}px ${po2}px`; 
});
