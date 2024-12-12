// Declare variables with proper spacing and types
var a = 15;
var b = 5;
function add(a, b) {
    return a + b;
}
console.log(add(5, 6)); // Outputs: 11
// Enhanced add function with additional parameters for printing results
function addWithOptions(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText).concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
// Input values
var n1 = 20;
var n2 = 200;
var printResult = true;
var someText = "Sum of two numbers is: ";
// Call the function
addWithOptions(n1, n2, printResult, someText); // Logs: Sum of two numbers is: 220
