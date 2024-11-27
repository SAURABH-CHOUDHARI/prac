let sec = document.querySelector(".dclock .sec h1");
let min = document.querySelector(".dclock .min h1");
let hour = document.querySelector(".dclock .hour h1");

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();



function loop(){
    s++;
    if(s >= 60){
        s =0 ;
        m++;
        if(m >= 60){
            m =0;
            h++
            if(h >= 24){
                h=0;
            }
        }
    }
    sec.innerText = `${s}`;
    min.innerText= `${m}`;
    hour.innerText = `${h}`;
}

setInterval(loop, 1000);

