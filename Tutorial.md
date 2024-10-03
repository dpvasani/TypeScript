This guide introduces the fundamentals of TypeScript, helping you build a solid foundation. Keep learning!

---

```tsx
type ID = string | number;

```

Example:

The `type` keyword also helps in annotating and reusing union types.

```tsx
type Age = number;

```

Example:

The `type` keyword allows creating type aliases for custom types.

**Creating Custom Types Using the “type” Keyword**

---

```tsx
let value: string | number = "Hello";

```

Example:

Union types (`|`) combine multiple types, allowing a value to have different possible types.

**Union Types in TypeScript**

---

```tsx
function greet(name: string, greeting?: string): void {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
greet("John"); // Output: Hello, John!
greet("Jane", "Good morning"); // Output: Good morning, Jane!

```

Example:

Functions can also have optional parameters and default parameter values.

```tsx
function addNumbers(a: number, b: number): number {
  return a + b;
}

```

Example:

Functions can have parameter types and return types for type safety.

**Functions and Types in TypeScript**

---

```tsx
person.name = "Jane";

```

Example:

Objects can have properties and methods, allowing for meaningful data with properties and behaviors.

```tsx
let person: { name: string, age: number } = { name: "John", age: 25 };

```

Example:

Objects represent collections of key-value pairs.

**Objects in TypeScript**

---

Arrays have built-in methods and properties like `push()`, `pop()`, `length`, and `forEach()`.

```tsx
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

```

Example:

Arrays can store values of the same type or a combination of different types.

```tsx
let numbers: number[] = [1, 2, 3, 4, 5];

```

Example:

Arrays represent ordered collections of values.

**Arrays in TypeScript**

---

Complex types, such as arrays, objects, and function types, provide powerful tools for representing structured data, modeling real-world entities, and defining the shape and behavior of functions.

**Complex Data Types in TypeScript**

---

```tsx
const symbol1 = Symbol("ritik");
const symbol2 = Symbol("ritik");
console.log(symbol1 === symbol2); // false

```

Example:

Symbols are unique, even if they have the same description.

```tsx
const id: symbol = Symbol("uniqueId");

```

Example:

Used to create unique and immutable values that can be used as object properties or keys.

`symbol`: Represents unique identifiers.

**Symbol in TypeScript**

---

Enables working with extremely large numbers without losing precision.

```tsx
let bigValue: bigint = BigInt(1000000000000000);

```

Example:

Used to store integers of arbitrary size.

`bigint`: Represents arbitrary precision integers.

**Bigint in TypeScript**

---

Often used to indicate the absence of a valid value or an error condition.

```tsx
let result: null = null;
let data: undefined = undefined;

```

Examples:

- `undefined` represents the absence of a value for an uninitialized variable.
- `null` represents the intentional absence of any object value.

`null` and `undefined`: Represent the absence of a value.

**Null and Undefined in TypeScript**

---

Supports logical operations like AND (`&&`), OR (`||`), and NOT (`!`).

```tsx
let isActive: boolean = true;
let isCompleted: boolean = false;

```

Examples:

`boolean`: Represents true/false values.

**Boolean Data Type in TypeScript**

---

Supports string manipulation, concatenation, and interpolation.

```tsx
let name: string = "John";
let message: string = 'Hello, TypeScript!';

```

Examples:

Used to store sequences of characters.

`string`: Represents textual data.

**String Data Type in TypeScript**

---

Supports mathematical operations like addition, subtraction, multiplication, and division.

```tsx
let age: number = 25;
let pi: number = 3.14;

```

Examples:

Used to store numbers, both integers, and floating-point numbers.

`number`: Represents numeric values.

**Number Data Type in TypeScript**

---

```tsx
let message = "Hello, TypeScript!"; // TypeScript infers message as string

```

- **Type inference**: TypeScript automatically infers types based on the assigned value or usage context.
Example:

```tsx
let count: number = 10;

```

- **Type annotations**: Explicitly declare the type of a variable or function parameter.
Example:

**Type Annotations and Inference**

---

Additionally, `null` and `undefined` represent the absence of a value, while `bigint` handles large integers, and `symbol` represents unique identifiers.

Built-in data types in TypeScript include `number` for numeric values, `string` for textual data, and `boolean` for representing true/false values.

**Primitive Data Types in TypeScript**

---

```tsx
const {variable name}: {variable type} = {variable value};

```

TypeScript is a statically-typed language, allowing explicit declaration of data types.

Data types define the nature of values that variables can hold. They specify the operations that can be performed on variables.

Data types in TypeScript help ensure code reliability, catch errors early, and improve maintainability.

**TypeScript Data Types**

---

```jsx
const person = { name: "Alice", age: 30 };
person.age = 31; // Valid
person = { name: "Bob", age: 40 }; // Error: Cannot assign to 'person' because it is a constant

```

Example:

`const` does not make objects or arrays immutable, only their assignment. Properties of a `const` object can be modified.

**Considerations for const**

---

- Use `const` for values that should remain constant.
It is advisable to use `const` in TypeScript as it helps improve code clarity and prevents accidental modifications.
- Use `let` when the value needs to change over time.

**Choosing Between let and const**

---

```jsx
let count: number;
count = 10; // Valid

const PI: number; // Error: Const declarations must be initialized

```

Example:

- `let` can be declared without an initial value, but `const` requires initialization.
- `let` allows variable reassignment, while `const` does not.

**Differences Between let and const**

---

- Expresses intent by indicating that a variable's value should not change.
- Improves code robustness.
- Ensures immutability.

**Benefits of const**

---

```jsx
const PI = 3.14;
PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant

```

Example:

Immutable variables are useful for constants or values that should not change.

`const` declares an immutable variable that cannot be reassigned.

**const**

---

- `let` variables cannot be re-declared.
- `let` variables cannot be read or written before they are declared.
- `let` is block-scoped.

`let` is preferable over `var`.

**Choosing Between var and let**

---

- Enhances code maintainability and readability.
- Provides better scoping.
- Avoids variable hoisting.

**Benefits of let**

---

```jsx
let name = "Ritik";
let typedName: string = "Ritik";  // with type annotations (not necessary)

```

Example:

---

```jsx
if (true) {
  let count = 10;
  console.log(count); // Output: 10
}
console.log(count); // Error: count is not defined

```

Example:

`let` declarations follow the same syntax as `var` but introduce block-scoping.

**let**

---

```jsx
console.log(name); // Output: undefined
var name = "Ritik";

```

Example:

**Hoisting**: Variables declared with `var` are moved to the top of their scope during the compilation phase.

`var` declares a variable with function scope or global scope.

**var**

---

- **const**: Declares an immutable variable and is preferred for most cases in TypeScript.
- **let**: Introduces block-scoping and declares an immutable variable.
- **var**: Older variable declaration keyword in JavaScript.

Variables can be declared using: `var`, `let`, and `const`.

TypeScript follows the same rules as JavaScript for variable declarations.

**Declaring Variables**

---

This makes our code more scalable and reliable, allowing us to check if it runs properly before runtime.

It provides optional static typing, which enables better tooling and helps catch errors at compile-time.

TypeScript is a statically-typed superset of JavaScript that compiles to plain JavaScript.

**TypeScript: The Basics**

---

```
npx tsc

```

Or

```
npm install typescript --save-dev

```

**Installation**

---

This TypeScript series may cause improved coding skills, or a burning desire to dive deeper into TypeScript. Viewer discretion advised. Enjoy responsibly!

**Disclaimer**

**TypeScript: The Ultimate Guide (Zero-to-Hero)**

---

TypeScript Type Aliases and Index Types provide ways to improve code readability and safety, while Mapped and Conditional Types help manage complex type relationships. Here's a summary of each:

### **Type Aliases**

- **Definition:** Custom names for types to enhance readability and reusability.
- **Syntax:** `type AliasName = Type;`
- **Usage:**
    - Simplifying complex types:
        
        ```
        type Point = { x: number; y: number; };
        const onePoint: Point = { x: 10, y: 5 };
        
        ```
        
    - Working with **Union Types**:
        
        ```
        type UserId = string | number;
        const user: UserId = 100;
        
        ```
        
- **Intersection Types:** Combine multiple types into one.
    
    ```
    type Person = { name: string; age: number };
    type Employee = { employeeId: string; department: string };
    type EmployeeInfo = Person & Employee;
    const employee: EmployeeInfo = { name: 'Ritik', age: 23, employeeId: 'E123', department: 'Engineering' };
    
    ```
    

### **Index Types**

- **Definition:** Enable dynamic property access.
- **Operators:**
    - `keyof`: Extracts keys of a type.
        
        ```
        interface Person { name: string; age: number; }
        type PersonKeys = keyof Person; // 'name' | 'age'
        
        ```
        
    - `T[K]`: Indexed access, ensures type-safe property access.
        
        ```
        interface Person { name: string; age: number; }
        const john: Person['name'] = "John"; // 'John'
        
        ```
        
- **Index Signatures:** Allow arbitrary properties with specific types.
    
    ```
    interface Person { name: string; age: number; [key: string]: string | number; }
    const person: Person = { name: "John", age: 30, city: "NY" };
    
    ```
    

### **Mapped Types**

- **Definition:** Transform and manipulate types.
- **Example:**
    
    ```
    type AppConfig = { username: string; layout: string; };
    type AppPermissions = { [Key in keyof AppConfig]: boolean; };
    let permission: AppPermissions = { username: true, layout: false };
    
    ```
    

### **Conditional Types**

- **Definition:** Conditionally determine types.
- **Syntax:** `T extends U ? X : Y`
    
    ```
    type NonNullable<T> = T extends null | undefined ? never : T;
    type NullableString = string | null;
    type NonNullableString = NonNullable<NullableString>; // string
    
    ```
    
- **Distributive Conditional Types:** Apply condition to unions.
    
    ```
    type ExtractStrings<T> = T extends string ? T : never;
    type StringOrNumber = string | number;
    type OnlyStrings = ExtractStrings<StringOrNumber>; // string
    
    ```
    

### 1. Authentication Middleware (`authMiddleware.ts`)

The `authMiddleware` is responsible for extracting the user ID from the request's `Authorization` header and attaching it to the `req` object.

```tsx
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Assume there's a function to validate the user's token and retrieve the user ID
  const userId = getUserIdFromToken(req.headers.authorization);

  if (userId) {
    req.userId = userId; // Attaching userId to the request object
    next(); // Proceed to the next middleware or route handler
  } else {
    return res.status(401).json({ message: 'Unauthorized' }); // If no userId, return unauthorized
  }
};

```

### 2. Extending the Request Object in `global.d.ts`

Since the `Request` object in Express does not natively have a `userId` property, you need to extend the `Request` type globally to add the `userId` property.

```tsx
// global.d.ts
declare namespace Express {
  export interface Request {
    userId?: string; // Optional because it may not always be present
  }
}

```

This declaration extends the `Request` interface, so anywhere in your code, you can now safely access `req.userId`.

### 3. User Service (`userService.ts`)

The `UserService` provides methods for retrieving user information based on the `userId` from the request object.

```tsx
import { Request } from 'express';

class UserService {
  static getUserInfo(req: Request) {
    const userId = req.userId; // Accessing userId added in middleware
    if (!userId) {
      throw new Error('User not authenticated');
    }
    // Now you can use the userId to fetch user data from the database
    return getUserDataFromDatabase(userId); // Simulated function to fetch user data
  }
}

export { UserService };

```

### 4. User Controller (`userController.ts`)

This controller handles incoming requests for user data and delegates the logic to the `UserService`.

```tsx
import { Request, Response } from 'express';
import { UserService } from './userService';

class UserController {
  static getUserInfo(req: Request, res: Response) {
    try {
      const userData = UserService.getUserInfo(req);
      return res.status(200).json(userData); // Respond with user data
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' }); // Handle errors
    }
  }
}

export default UserController;

```

### 5. TypeScript Configuration (`tsconfig.json`)

To ensure TypeScript picks up the extended types in `global.d.ts`, you need to configure your `tsconfig.json` properly.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "files": ["global.d.ts"] // Ensure the global.d.ts file is included
  }
}

```

By including `"files": ["global.d.ts"]`, you explicitly tell TypeScript to use the type definitions in this file, which ensures the `userId` extension is recognized in your project.

### Summary:

- The `authMiddleware` attaches a `userId` to the `req` object if the user is authenticated.
- The `Request` object is extended in `global.d.ts` to include `userId`.
- The `UserService` uses the `userId` to retrieve user data, and the `UserController` handles the request-response flow.
- The `tsconfig.json` is configured to ensure TypeScript includes the global types.

This approach ensures type safety and maintainability across your Express app when dealing with user authentication.
