let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    boxes.forEach(function (box) {
        box.style.transform = "scale(1.2)"; 
    });
});
