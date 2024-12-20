let n = Number(prompt("Enter A Number :"));

function fibbonaci(n){
let a = 0, b = 1;
for (let i = 0; i <= n; i++) {
    if (i <= 1) {
        console.log(i)
    } else {
        [a, b] = [b, a + b];
        console.log(b)
    }
}   
}

fibbonaci(n);