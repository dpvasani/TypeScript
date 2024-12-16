/****************************************************
 *                TYPE GUARDS IN TYPESCRIPT         *
 * ------------------------------------------------ *
 * Table of Contents:
 * 1. Type Guards with Union Types
 * 2. Intersection Types & `in` Operator for Type Guards
 * 3. Type Guards in Classes using `instanceof`
 * 4. Type Casting / Type Assertion
 ****************************************************/

/****************************************************
 * 1. TYPE GUARDS WITH UNION TYPES
 * ------------------------------------------------ *
 * Type Guards help narrow down types using:
 *  - typeof
 *  - instanceof
 *  - `in` keyword
 ****************************************************/

type Combinable = string | number;

// Function that uses a Type Guard to differentiate between types
function add(a: Combinable, b: Combinable) {
    // Type guard using typeof
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString(); // Concatenate if any argument is a string
    }
    return a + b; // Otherwise, add numbers
}

console.log(add(30, 30));       // Output: 60
console.log(add("30", 30));     // Output: "3030"

/****************************************************
 * 2. INTERSECTION TYPES & `in` OPERATOR
 * ------------------------------------------------ *
 * Intersection types combine multiple types into one.
 * The `in` keyword checks if a property exists in an object.
 ****************************************************/

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Intersection type
type UnknownEmployee = Employee | Admin;  // Union type

const emp1: ElevatedEmployee = {
    name: "Patel Darshan",
    privileges: ["create-server"],
    startDate: new Date(),
};

// Function using `in` operator as a Type Guard
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: ", emp.name);

    if ("privileges" in emp) {
        console.log("Privileges: ", emp.privileges);
    }

    if ("startDate" in emp) {
        console.log("Start Date: ", emp.startDate);
    }
}

printEmployeeInformation(emp1);
// Output: Name: Patel Darshan
//         Privileges: [ 'create-server' ]
//         Start Date: current date

printEmployeeInformation({ name: "Aman", startDate: new Date() });
// Output: Name: Aman
//         Start Date: current date

/****************************************************
 * 3. TYPE GUARDS IN CLASSES USING `instanceof`
 * ------------------------------------------------ *
 * `instanceof` checks if an object is an instance of a class.
 ****************************************************/

class Car {
    drive() {
        console.log("Driving a car...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo...", amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// Function using instanceof as a Type Guard
function useVehicle(vehicle: Vehicle) {
    vehicle.drive(); // Common method for both classes

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500); // Access specific method of Truck
    }
}

useVehicle(v1);
// Output: Driving a car...

useVehicle(v2);
// Output: Driving a truck...
//         Loading cargo... 500

/****************************************************
 * 4. TYPE CASTING / TYPE ASSERTION
 * ------------------------------------------------ *
 * Type Casting tells TypeScript about a specific type of a variable.
 ****************************************************/

// Type Casting with DOM elements
// The '!' indicates the value will not be null
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hi Patel"; // Setting value after assertion
console.log(userInput.value); // Output: Hi Patel

// Alternative syntax for Type Casting (older style):
// const userInput = <HTMLInputElement>document.getElementById("user-input");

/****************************************************
 * SUMMARY:
 * ------------------------------------------------ *
 * - **Type Guards**:
 *   - `typeof`: Checks primitive types.
 *   - `in`: Checks if a property exists in an object.
 *   - `instanceof`: Checks if an object belongs to a specific class.
 * - **Intersection Types**: Combine multiple types into one.
 * - **Type Casting**: Asserts a specific type for a variable.
 ****************************************************/
