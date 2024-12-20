function findGCD(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    return Math.abs(a * b) / findGCD(a, b);
}


let a = parseInt(prompt("Enter value of a: "));
let b = parseInt(prompt("Enter value of b: "));


    let lcm = findLCM(a, b);
    console.log(`LCM of ${a} and ${b} = ${lcm}`);