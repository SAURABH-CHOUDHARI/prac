// Get DOM elements
const sec = document.querySelector(".dclock .sec");
const min = document.querySelector(".dclock .min");
const hour = document.querySelector(".dclock .hour");

let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

function updateClockHands() {
    const secondsDegrees = s * 6; 
    const minutesDegrees = m * 6 + (s / 60) * 6; 
    const hoursDegrees = h * 30 + (m / 60) * 30; 

    sec.style.transform = `rotateZ(${secondsDegrees}deg)`;
    min.style.transform = `rotateZ(${minutesDegrees}deg)`;
    hour.style.transform = `rotateZ(${hoursDegrees}deg)`;
}

function loop() {
    s++;
    if (s >= 60) {
        s = 0;
        m++;
        if (m >= 60) {
            m = 0;
            h++;
            if (h >= 24) {
                h = 0;
            }
        }
    }
    
    updateClockHands();
}

updateClockHands();

setInterval(loop, 1000);