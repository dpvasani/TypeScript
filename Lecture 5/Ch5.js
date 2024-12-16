/******************************************
 *            UNKNOWN & NEVER TYPES        *
 ******************************************/
//! 1. UNKNOWN TYPE
// The `unknown` type is more restrictive than `any`.
// Unlike `any`, TypeScript will not allow assigning `unknown` values directly without proper checks.
var userInput; // Unknown type: safer than `any`
// let userInput: any;   // `any` would allow bypassing type checks
var userName;
// Assigning values to `userInput` is allowed
userInput = 10; // OK
userInput = "Patel"; // OK
// Directly assigning `unknown` to another type is NOT allowed
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'
// Use type-checking (typeof) to safely assign values
if (typeof userInput === "string") {
    userName = userInput; // OK after type check
}
console.log("User Name: ".concat(userName)); // Output: User Name: Patel
/*
 * Summary:
 * - Use `unknown` when you don't know the value's type upfront.
 * - Unlike `any`, `unknown` forces you to perform type checks before assignment.
 */
//! 2. NEVER RETURN TYPE
// The `never` type represents a function that never successfully completes.
// Such functions either throw an error or run indefinitely.
function generateError(message, code) {
    // Throw an error object
    throw { message: message, statusCode: code };
}
// Calling the function
var res = generateError("Internal server error", 500);
// Code after a `never` function call is unreachable.
// console.log(res); // This line will NOT execute because `generateError` throws an error.
/*
 * Summary:
 * - A `never` function either:
 *   1. Throws an error (e.g., `throw`)
 *   2. Runs an infinite loop (e.g., `while (true)`)
 * - `never` indicates that the function doesn't return anything and never completes successfully.
 */
