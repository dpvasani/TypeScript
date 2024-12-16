/******************************************
 *          FUNCTIONS IN TYPESCRIPT       *
 ******************************************/
var _this = this;
//! 1. FUNCTION RETURN TYPES
// You can explicitly define the return type of a function.
// The TypeScript compiler will check if the returned value matches the defined type.
function add(num1, num2) {
    return num1 + num2; // Ensures the return type is a number
}
console.log(add(10, 20)); // Output: 30
// Void return type: A function that doesn't return anything.
function greet(name) {
    console.log("Hello, ".concat(name));
}
greet("Patel"); // Output: Hello, Patel
//! 2. FUNCTION TYPES
// Function types specify the signature (parameters and return type) of a function.
// Define a function type: Takes two numbers and returns a number
var operation;
operation = add; // Valid because `add` matches the function signature
console.log(operation(5, 15)); // Output: 20
// Function that takes a callback
function calculateAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result); // Call the callback with the result
}
// Passing a callback function
calculateAndHandle(10, 20, function (result) {
    console.log("Callback result: ".concat(result));
});
// Output: Callback result: 30
//! 4. OPTIONAL PARAMETERS
// Parameters can be made optional using the `?` symbol.
function multiply(a, b) {
    // If `b` is not provided, default to 1
    return a * (b !== undefined ? b : 1);
}
console.log(multiply(5)); // Output: 5 (b is optional and defaults to 1)
console.log(multiply(5, 4)); // Output: 20
//! 5. DEFAULT PARAMETERS
// Default values can be assigned to function parameters.
function divide(a, b) {
    if (b === void 0) { b = 2; }
    return a / b;
}
console.log(divide(10)); // Output: 5 (default `b` is 2)
console.log(divide(10, 5)); // Output: 2
//! 6. REST PARAMETERS
// Rest parameters allow you to pass a variable number of arguments.
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20)); // Output: 30
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // Add numbers
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenate strings
    }
    throw new Error("Invalid arguments");
}
console.log(combine(10, 20)); // Output: 30
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
// console.log(combine(10, "World")); // Error: No matching overload
//! 8. ARROW FUNCTIONS
// Arrow functions provide a more concise syntax for writing functions.
var square = function (num) { return num * num; };
console.log(square(5)); // Output: 25
// Arrow function with multiple parameters
var greetUser = function (name, age) {
    return "Hi ".concat(name, ", you are ").concat(age, " years old!");
};
console.log(greetUser("Patel", 22)); // Output: Hi Patel, you are 22 years old!
//! 9. THIS IN FUNCTIONS
// Arrow functions don't have their own `this` context. They inherit `this` from the surrounding scope.
var user = {
    name: "Patel",
    age: 22,
    greet: function () {
        console.log("Hello, I am ".concat(this.name));
    },
    greetArrow: function () {
        // `this` does not refer to `user` in arrow functions
        console.log("Hello, I am ".concat(_this.name));
    },
};
user.greet(); // Output: Hello, I am Patel
user.greetArrow(); // Output: Hello, I am undefined (or window object in browsers)
//! 10. NEVER RETURN TYPE
// The `never` type indicates a function that never returns (e.g., throws an error or infinite loop).
function throwError(message) {
    throw new Error(message);
}
// throwError("Something went wrong!");
// Function that never finishes execution
function infiniteLoop() {
    while (true) {
        console.log("Running...");
    }
}
// Uncomment at your own risk!
// infiniteLoop();
// Topics Covered:
// Function Return Types: Explicitly defining return types like number, void, or never.
// Function Types: Defining the function signature for type safety.
// Callbacks: Passing functions as arguments with custom callback types.
// Optional Parameters: Using ? to make function parameters optional.
// Default Parameters: Assigning default values to parameters.
// Rest Parameters: Handling variable-length arguments using ....
// Function Overloads: Defining multiple function signatures for better type support.
// Arrow Functions: Concise function syntax and this behavior.
// this in Functions: How this behaves in normal and arrow functions.
// Never Return Type: Functions that throw errors or run indefinitely.
//! Function return type
function add(num1, num2) {
    return num1 + num2; //  return 30
}
// console.log(add(10,20));
function welcome(name) {
    console.log("Hi, ".concat(name));
}
// let combineFunction : Function;
// combineFunction = 10; // invalid
// combineFunction = function(){}; valid
// combineFunction = add; // valid
// combineFunction = welcome;
// console.log(combineFunction(1,2));
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
