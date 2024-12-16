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

/****************************************************
 * 1. INTRODUCTION TO GENERICS
 * ------------------------------------------------ *
 * Generics allow us to create reusable components
 * that work with multiple types instead of just one.
 ****************************************************/

type Person = {
    name: string;
    age: number;
};

// Example 1: Basic Generics in a function
function merge<T, U, V>(objA: T, objB: U, objC: V) {
    return { ...objA, ...objB, ...objC }; // Combines all objects
}

const result = merge(
    { name: "Patel" },
    { role: "Software Engineer" },
    { id: "d1" }
);
console.log(result);
// Output: { name: 'Patel', role: 'Software Engineer', id: 'd1' }

/****************************************************
 * 2. GENERICS WITH CONSTRAINTS
 * ------------------------------------------------ *
 * Constraints limit the types that can be passed
 * to a generic function using `extends`.
 ****************************************************/

function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V
): { key: T; value: U; isActive: V } {
    return { key, value, isActive };
}

const obj = createObject("age", 25, true);
console.log(obj);
// Output: { key: 'age', value: 25, isActive: true }

/****************************************************
 * 3. GENERIC INTERFACES
 * ------------------------------------------------ *
 * Interfaces can be generic to accept a type input.
 ****************************************************/

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Hello, TypeScript!" };

console.log(numberBox); // Output: { value: 200 }
console.log(stringBox); // Output: { value: 'Hello, TypeScript!' }

/****************************************************
 * 4. GENERICS WITH DEFAULT TYPES
 * ------------------------------------------------ *
 * A default type can be provided for a generic.
 ****************************************************/

interface User<T = string> {
    data: T;
    status: number;
}

type Person2 = {
    name: string;
    age: number;
};

const response: User = { data: "Success", status: 200 }; // Default type: string
const jsonResponse: User<Person2> = {
    data: { name: "Patel", age: 21 },
    status: 200,
};

console.log(response);      // Output: { data: 'Success', status: 200 }
console.log(jsonResponse);  // Output: { data: { name: 'Patel', age: 21 }, status: 200 }

/****************************************************
 * 5. GENERICS WITH CLASSES
 * ------------------------------------------------ *
 * Classes can also be made generic.
 ****************************************************/

class Container<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

const stringContainer = new Container<string>("Hello, World!");
console.log(stringContainer.getContent()); // Output: 'Hello, World!'

const numberContainer = new Container<number>(123);
console.log(numberContainer.getContent()); // Output: 123

/****************************************************
 * 6. GENERICS WITH ARRAYS
 * ------------------------------------------------ *
 * Generics are very helpful for working with arrays.
 ****************************************************/

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);    // Type: number
const firstString = getFirst(["a", "b", "c"]); // Type: string

console.log(firstNumber); // Output: 1
console.log(firstString); // Output: 'a'

/****************************************************
 * 7. GENERICS WITH `KEYOF` AND TYPE CONSTRAINTS
 * ------------------------------------------------ *
 * Generics can work with object properties using the
 * `keyof` operator to ensure valid keys are used.
 ****************************************************/

function getProperty<T extends object, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const person = { name: "Patel", age: 21 };
const personName = getProperty(person, "name"); // Valid key
const personAge = getProperty(person, "age");   // Valid key

console.log(personName); // Output: 'Patel'
console.log(personAge);  // Output: 21

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
    