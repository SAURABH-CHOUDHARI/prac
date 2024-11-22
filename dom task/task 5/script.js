let circle = document.querySelector(".circle");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");


btn.addEventListener("click", function(){
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);

    h1.innerHTML = `${color1} ${color2} ${color3}`
    circle.style.background = `rgb(${color1}, ${color2}, ${color3})`


})
