let arr = ["csk", "rcb", "srh", "dc" ]
let btn = document.querySelector("button");
let h2 = document.querySelector('h2');

btn.addEventListener("click", function(){
    let win = Math.floor(Math.random()*arr.length);
    h2.innerHTML = arr[win];

})