/****************************************************
 *                TYPE GUARDS IN TYPESCRIPT         *
 * ------------------------------------------------ *
 * Table of Contents:
 * 1. Type Guards with Union Types
 * 2. Intersection Types & `in` Operator for Type Guards
 * 3. Type Guards in Classes using `instanceof`
 * 4. Type Casting / Type Assertion
 ****************************************************/
// Function that uses a Type Guard to differentiate between types
function add(a, b) {
    // Type guard using typeof
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString(); // Concatenate if any argument is a string
    }
    return a + b; // Otherwise, add numbers
}
console.log(add(30, 30)); // Output: 60
console.log(add("30", 30)); // Output: "3030"
var emp1 = {
    name: "Patel Darshan",
    privileges: ["create-server"],
    startDate: new Date(),
};
// Function using `in` operator as a Type Guard
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
// Function using instanceof as a Type Guard
function useVehicle(vehicle) {
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
var userInput = document.getElementById("user-input");
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
