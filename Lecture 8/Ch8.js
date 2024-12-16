/****************************************************
 *                   GENERICS IN TYPESCRIPT         *
 * ------------------------------------------------ *
 * Table of Contents:
 * 1. Introduction to Generics
 * 2. Generics with Constraints
 * 3. Generics with Interfaces
 * 4. Default Generic Types
 * 5. Generics with Classes
 * 6. Generics with Arrays
 * 7. Generics with `keyof` and keyof Constraints
 ****************************************************/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Example 1: Basic Generics in a function
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC); // Combines all objects
}
var result = merge({ name: "Patel" }, { role: "Software Engineer" }, { id: "d1" });
console.log(result);
// Output: { name: 'Patel', role: 'Software Engineer', id: 'd1' }
/****************************************************
 * 2. GENERICS WITH CONSTRAINTS
 * ------------------------------------------------ *
 * Constraints limit the types that can be passed
 * to a generic function using `extends`.
 ****************************************************/
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
console.log(obj);
var numberBox = { value: 200 };
var stringBox = { value: "Hello, TypeScript!" };
console.log(numberBox); // Output: { value: 200 }
console.log(stringBox); // Output: { value: 'Hello, TypeScript!' }
var response = { data: "Success", status: 200 }; // Default type: string
var jsonResponse = {
    data: { name: "Patel", age: 21 },
    status: 200,
};
console.log(response); // Output: { data: 'Success', status: 200 }
console.log(jsonResponse); // Output: { data: { name: 'Patel', age: 21 }, status: 200 }
/****************************************************
 * 5. GENERICS WITH CLASSES
 * ------------------------------------------------ *
 * Classes can also be made generic.
 ****************************************************/
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello, World!");
console.log(stringContainer.getContent()); // Output: 'Hello, World!'
var numberContainer = new Container(123);
console.log(numberContainer.getContent()); // Output: 123
/****************************************************
 * 6. GENERICS WITH ARRAYS
 * ------------------------------------------------ *
 * Generics are very helpful for working with arrays.
 ****************************************************/
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]); // Type: number
var firstString = getFirst(["a", "b", "c"]); // Type: string
console.log(firstNumber); // Output: 1
console.log(firstString); // Output: 'a'
/****************************************************
 * 7. GENERICS WITH `KEYOF` AND TYPE CONSTRAINTS
 * ------------------------------------------------ *
 * Generics can work with object properties using the
 * `keyof` operator to ensure valid keys are used.
 ****************************************************/
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Patel", age: 21 };
var personName = getProperty(person, "name"); // Valid key
var personAge = getProperty(person, "age"); // Valid key
console.log(personName); // Output: 'Patel'
console.log(personAge); // Output: 21
// Invalid Example (will cause error):
// const invalidKey = getProperty(person, "salary"); // Error: 'salary' does not exist
/****************************************************
 * SUMMARY OF GENERICS IN TYPESCRIPT
 * ------------------------------------------------ *
 * 1. Generics allow reusable, type-safe components.
 * 2. Constraints (`extends`) ensure certain properties/types.
 * 3. Generic interfaces, classes, and arrays are powerful.
 * 4. Default types can simplify usage.
 * 5. `keyof` allows accessing specific properties of objects.
 ****************************************************/
