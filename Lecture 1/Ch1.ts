// Declare variables with proper spacing and types
let a: number = 15;
let b: number = 5;

// Compilation and execution instructions
// Use the following commands:
// tsc filename.ts   // This will create a .js file
// node filename.js  // This will run the compiled JavaScript file

// Function to add two numbers
type AddResult = number | void; // Define a type if needed for clarity

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 6)); // Outputs: 11

// Enhanced add function with additional parameters for printing results
function addWithOptions(num1: number, num2: number, printResult: boolean, someText: string): AddResult {
    if (printResult) {
        console.log(`${someText}${num1 + num2}`);
    } else {
        return num1 + num2;
    }
}

// Input values
const n1: number = 20;
const n2: number = 200;
const printResult: boolean = true;
const someText: string = "Sum of two numbers is: ";

// Call the function
addWithOptions(n1, n2, printResult, someText); // Logs: Sum of two numbers is: 220