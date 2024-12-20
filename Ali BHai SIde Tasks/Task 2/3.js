function findGCD(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


let a = parseInt(prompt("Enter value of a: "));
let b = parseInt(prompt("Enter value of b: "));


    let lcm = findGCD(a, b);
    console.log(`GCD of ${a} and ${b} = ${lcm}`);