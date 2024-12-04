let target = document.querySelector(".target h1")
let time = document.querySelector(".time h1")
let score = document.querySelector(".score h1")
let bubbles = document.querySelector(".Bubbles")
let bubble = document.querySelectorAll(".bubble")

let arr = []
function rand(){
    bubble.forEach(elem => {
        elem.innerHTML = `<h1>${Math.floor(Math.random() * 9 + 1)}</h1>`
        arr.push(parseInt(elem.innerText))
    });
}
rand();

function times(){
    count = 60;
    let temp= setInterval(function(){
        count --;
        time.innerHTML = `${count}`
    },1000)
    setTimeout(function(){
        clearInterval(temp)
        bubbles.style.pointerEvents = 'none'
        bubbles.innerHTML = `<h1>GAME OVER</h1><h2>Score : ${scor}</h2>`
    },60000)

}
times()


function targett(){
    target.innerHTML = `${arr[Math.floor(Math.random() * 36 )]}`
}
targett();


let scor = 0;
bubbles.addEventListener("click", (dets)=>{
    if(dets.target.className === "bubble"){
        if(dets.target.childNodes[0].textContent == target.textContent){
            scor += 1
            score.textContent = scor
            rand()
            targett()
        }else{
            rand()
            targett()
        }
    }
})