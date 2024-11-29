let btn = document.querySelector("button");
let h5 = document.querySelector("h5");
let grow = document.querySelector(".grow");

let growth = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

btn.addEventListener("click", function () {


let kk=  setInterval(() => {
    growth++;
    grow.style.width = `${growth}%`;
    h5.innerText = `${growth}%`;
}, randomNumber *5)
setTimeout(() => {
    clearInterval(kk);
    btn.innerText = `Downloaded`
    btn.style.background = "lightgray"
    btn.style.color = "darkgray"
}, randomNumber * 500);
btn.style.pointerEvents = 'none';
})