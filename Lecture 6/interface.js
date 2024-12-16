"use strict";
// Compile With Watch Mode: tsc interface.ts -w Or watch mode
// tsc --init -> tsconfig.json Added
// tsc -w -> watch mode
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 20));
class Person {
    constructor(n) {
        this.name = n;
    }
}
