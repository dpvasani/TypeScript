//-------------------- Basic Example --------------------//

// Declaring variables
let firstName: string;
let age: number;

firstName = "Patel";
age = 22;

// Object with explicit types
const person: {
    firstName: string;
    age: number;
} = {
    firstName: "Patel",
    age: 22,
};

//-------------------- Union Types --------------------//

// Function using union types (number | string)
function combine(num1: number | string, num2: number | string) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2; // Numeric addition
    } else {
        result = num1.toString() + num2.toString(); // String concatenation
    }
    return result;
}

const sum = combine(10, 20); // Output: 30
const combinedName = combine("Patel", " Darshan"); // Output: Patel Darshan
console.log(sum, combinedName);

//-------------------- Literal Types --------------------//

// Function using literal types for stricter control
function combineWithLiteral(
    num1: number | string,
    num2: number | string,
    conversionType: "as-number" | "as-string" // Literal type
) {
    let result;
    if (
        (typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number"
    ) {
        result = +num1 + +num2; // Ensures numeric conversion
    } else {
        result = num1.toString() + num2.toString(); // Concatenates as strings
    }
    return result;
}

const sum1 = combineWithLiteral("10", "20", "as-number"); // Output: 30
const sum2 = combineWithLiteral(10, 50, "as-number"); // Output: 60
const combinedNameLiteral = combineWithLiteral(
    "Patel",
    " Darshan",
    "as-string"
); // Output: Patel Darshan
console.log(sum1, sum2, combinedNameLiteral);

//-------------------- Type Aliases --------------------//

// Custom types for better reusability
type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

// Function using type aliases
function combineWithAlias(
    num1: Combinable,
    num2: Combinable,
    conversionType: ConversionType
) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sumAlias1 = combineWithAlias("10", "20", "as-number"); // Output: 30
const sumAlias2 = combineWithAlias(10, 50, "as-number");
const combinedNameAlias = combineWithAlias(
    "Patel",
    " Darshan",
    "as-string"
); // Output: Patel Darshan
console.log(sumAlias1, sumAlias2, combinedNameAlias);

//-------------------- Type Aliases with Objects --------------------//

// Creating a `User` type
type User = {
    name: string;
    age: number;
    skills: string[];
};

// Creating a user object
const user: User = {
    name: "Patel",
    age: 22,
    skills: ["React", "Node"],
};

// Function accepting a User type
function greet(user: User) {
    console.log(`Hi, I am ${user.name}`);
}

greet(user);
