//-------------------- Basic Example --------------------//
// Declaring variables
var firstName;
var age;
firstName = "Patel";
age = 22;
// Object with explicit types
var person = {
    firstName: "Patel",
    age: 22,
};
//-------------------- Union Types --------------------//
// Function using union types (number | string)
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2; // Numeric addition
    }
    else {
        result = num1.toString() + num2.toString(); // String concatenation
    }
    return result;
}
var sum = combine(10, 20); // Output: 30
var combinedName = combine("Patel", " Darshan"); // Output: Patel Darshan
console.log(sum, combinedName);
//-------------------- Literal Types --------------------//
// Function using literal types for stricter control
function combineWithLiteral(num1, num2, conversionType // Literal type
) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number") {
        result = +num1 + +num2; // Ensures numeric conversion
    }
    else {
        result = num1.toString() + num2.toString(); // Concatenates as strings
    }
    return result;
}
var sum1 = combineWithLiteral("10", "20", "as-number"); // Output: 30
var sum2 = combineWithLiteral(10, 50, "as-number"); // Output: 60
var combinedNameLiteral = combineWithLiteral("Patel", " Darshan", "as-string"); // Output: Patel Darshan
console.log(sum1, sum2, combinedNameLiteral);
// Function using type aliases
function combineWithAlias(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sumAlias1 = combineWithAlias("10", "20", "as-number"); // Output: 30
var sumAlias2 = combineWithAlias(10, 50, "as-number");
var combinedNameAlias = combineWithAlias("Patel", " Darshan", "as-string"); // Output: Patel Darshan
console.log(sumAlias1, sumAlias2, combinedNameAlias);
// Creating a user object
var user = {
    name: "Patel",
    age: 22,
    skills: ["React", "Node"],
};
// Function accepting a User type
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
