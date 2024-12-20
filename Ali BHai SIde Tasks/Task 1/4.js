function calculate(a, b, operation) {
    switch(operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? "Error: Division by zero" : a / b;
        case '%': return b === 0 ? "Error: Division by zero" : a % b;
        default: return "Invalid operation";
    }
}

// Operation descriptions
const operationNames = {
    '+': 'Addition',
    '-': 'Subtraction',
    '*': 'Multiplication',
    '/': 'Division',
    '%': 'Modulo'
};

console.log("Simple Calculator");
console.log("----------------");
console.log("Available operations: +, -, *, /, %");

let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let operation = prompt("Enter an operation: ");

if (isNaN(a) || isNaN(b)) {
    console.log("Please enter valid numbers");
} else {
    let result = calculate(a, b, operation);
    
    console.log("\nOperation:", operationNames[operation] || "Invalid");
    console.log(`${a} ${operation} ${b} = ${result}`);
}