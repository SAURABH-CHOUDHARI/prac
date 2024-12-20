function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);  
}

let n = parseInt(prompt("Enter a value of n: "));


    console.log(fizzbuzz(n));
