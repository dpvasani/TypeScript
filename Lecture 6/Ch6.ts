/***********************************************
 *             CLASSES AND INTERFACES          *
 *          WITH ALL OOPS CONCEPTS IN TS       *
 ***********************************************/

/** 
 * Table of Contents:
 * 1. Classes & Objects
 * 2. Access Modifiers (public, private, protected)
 * 3. Readonly Properties
 * 4. Static Properties & Methods
 * 5. Getters & Setters
 * 6. Inheritance
 * 7. Method Overriding
 * 8. Interfaces
 * 9. Abstract Classes
 * 10. Polymorphism
 */

/************************************************
 * 1. CLASSES & OBJECTS
 * A class is a blueprint for creating objects.
 ************************************************/

class Person {
    name: string; // Property
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object
const person1 = new Person("Patel", 22);
person1.greet(); // Output: Hello, my name is Patel and I am 22 years old.

/************************************************
 * 2. ACCESS MODIFIERS
 * - public: Accessible anywhere
 * - private: Accessible only within the class
 * - protected: Accessible within the class and subclasses
 ************************************************/

class Employee {
    public name: string; // Public: Accessible everywhere
    private salary: number; // Private: Accessible only within this class
    protected role: string; // Protected: Accessible in this class & subclasses

    constructor(name: string, salary: number, role: string) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

    displaySalary(): void {
        console.log(`Salary of ${this.name} is $${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, role: string) {
        super(name, salary, role);
    }

    displayRole(): void {
        console.log(`${this.name} is a ${this.role}`);
    }
}

const emp1 = new Manager("John", 5000, "Manager");
emp1.displaySalary(); // Accessible: Public
emp1.displayRole();   // Accessible: Protected role in subclass

// emp1.salary = 6000; // Error: salary is private
// emp1.role = "Director"; // Error: role is protected

/************************************************
 * 3. READONLY PROPERTIES
 * - Readonly properties can only be assigned once.
 ************************************************/

class Vehicle {
    readonly model: string;

    constructor(model: string) {
        this.model = model;
    }

    getModel(): string {
        return this.model;
    }
}

const vehicle1 = new Vehicle("Tesla Model S");
console.log(vehicle1.getModel()); // Output: Tesla Model S

// vehicle1.model = "BMW"; // Error: Cannot assign to 'model' because it is a read-only property

/************************************************
 * 4. STATIC PROPERTIES & METHODS
 * - Static members belong to the class itself, not objects.
 ************************************************/

class MathUtils {
    static PI: number = 3.14;

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Accessing static property
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.5

/************************************************
 * 5. GETTERS AND SETTERS
 * - Control access to properties with custom logic.
 ************************************************/

class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
        } else {
            this._balance = amount;
        }
    }
}

const account = new BankAccount(1000);
console.log(account.balance); // Getter: 1000
account.balance = 1500; // Setter
console.log(account.balance); // Output: 1500

account.balance = -500; // Output: Balance cannot be negative.

/************************************************
 * 6. INHERITANCE
 * - A child class inherits properties and methods of a parent class.
 ************************************************/

class Animal {
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.move(); // Output: Moving... (inherited)
dog.bark(); // Output: Woof! Woof!

/************************************************
 * 7. METHOD OVERRIDING
 * - A subclass can provide its own implementation of a method.
 ************************************************/

class Shape {
    area(): void {
        console.log("Calculating area...");
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): void {
        console.log(`Area of Circle: ${Math.PI * this.radius * this.radius}`);
    }
}

const circle = new Circle(5);
circle.area(); // Output: Area of Circle: 78.5398

/************************************************
 * 8. INTERFACES
 * - Interfaces define a contract for classes to implement.
 ************************************************/

interface Printable {
    print(): void;
}

class Report implements Printable {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

    print(): void {
        console.log(`Printing Report: ${this.content}`);
    }
}

const report = new Report("Monthly Financial Report");
report.print(); // Output: Printing Report: Monthly Financial Report

/************************************************
 * 9. ABSTRACT CLASSES
 * - Abstract classes cannot be instantiated.
 * - They may contain abstract methods that must be implemented in subclasses.
 ************************************************/

abstract class EmployeeBase {
    abstract work(): void;

    logWorkHours(): void {
        console.log("Logging work hours...");
    }
}

class Developer extends EmployeeBase {
    work(): void {
        console.log("Writing code...");
    }
}

const dev = new Developer();
dev.work(); // Output: Writing code...
dev.logWorkHours(); // Output: Logging work hours...

/************************************************
 * 10. POLYMORPHISM
 * - One method can behave differently based on the object calling it.
 ************************************************/

class Bird {
    sound(): void {
        console.log("Bird makes a sound");
    }
}

class Sparrow extends Bird {
    sound(): void {
        console.log("Chirp! Chirp!");
    }
}

class Parrot extends Bird {
    sound(): void {
        console.log("Squawk! Squawk!");
    }
}

const birds: Bird[] = [new Sparrow(), new Parrot(), new Bird()];
birds.forEach((bird) => bird.sound());
/*
Output:
Chirp! Chirp!
Squawk! Squawk!
Bird makes a sound
*/
