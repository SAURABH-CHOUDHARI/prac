
let minutes = parseInt(prompt("Enter the number of minutes: "));


let hours = Math.floor(minutes / 60);
let remaining_minutes = minutes % 60;


console.log(`Total hours: ${hours} hours and ${remaining_minutes} minutes`);