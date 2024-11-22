let likes = document.querySelector("span");
let btn = document.querySelector("button");

let like = 0;
btn.addEventListener("click", function () {
    like++;
    likes.innerHTML = `${like}`
});
