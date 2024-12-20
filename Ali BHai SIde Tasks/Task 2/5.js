
function isEvenOrOdd(number) {
    return number % 2 === 0 ? `${number} is an even number.` : `${number} is an odd number.`;
}

function isPrime(number) {
    if (number <= 1) return `${number} is not a prime number.`;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return `${number} is not a prime number.`;
    }
    return `${number} is a prime number.`;
}

function factorial(number) {
    if (number < 0) return `Factorial is not defined for negative numbers.`;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return `The factorial of ${number} is ${result}.`;
}

function menu() {
    let choice;
    do {
        console.log("1. Check if a number is even or odd");
        console.log("2. Check if a number is prime");
        console.log("3. Calculate the factorial of a number");
        console.log("4. Exit the program");
        choice = parseInt(prompt("Enter your choice: "), 10);

        switch (choice) {
            case 1:
                const num1 = parseInt(prompt("Enter a number: "), 10);
                console.log(isEvenOrOdd(num1));
                break;
            case 2:
                const num2 = parseInt(prompt("Enter a number: "), 10);
                console.log(isPrime(num2));
                break;
            case 3:
                const num3 = parseInt(prompt("Enter a number: "), 10);
                console.log(factorial(num3));
                break;
            case 4:
                console.log("Exiting the program. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 4);
}


menu();