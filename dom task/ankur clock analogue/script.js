// Get DOM elements
const sec = document.querySelector(" .sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");


function updateClockHands() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secondsDegrees = seconds * 6; 
    const minutesDegrees = minutes * 6 + (seconds / 60) * 6; 
    const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30; 

    sec.style.rotate = `${secondsDegrees}deg`;
    min.style.rotate = `${minutesDegrees}deg`;
    hour.style.rotate = `${hoursDegrees}deg`;
}

setInterval(updateClockHands, 1000);