/***********************************************
 *             CLASSES AND INTERFACES          *
 *          WITH ALL OOPS CONCEPTS IN TS       *
 ***********************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Creating an object
var person1 = new Person("Patel", 22);
person1.greet(); // Output: Hello, my name is Patel and I am 22 years old.
/************************************************
 * 2. ACCESS MODIFIERS
 * - public: Accessible anywhere
 * - private: Accessible only within the class
 * - protected: Accessible within the class and subclasses
 ************************************************/
var Employee = /** @class */ (function () {
    function Employee(name, salary, role) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    Employee.prototype.displaySalary = function () {
        console.log("Salary of ".concat(this.name, " is $").concat(this.salary));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, role) {
        return _super.call(this, name, salary, role) || this;
    }
    Manager.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a ").concat(this.role));
    };
    return Manager;
}(Employee));
var emp1 = new Manager("John", 5000, "Manager");
emp1.displaySalary(); // Accessible: Public
emp1.displayRole(); // Accessible: Protected role in subclass
// emp1.salary = 6000; // Error: salary is private
// emp1.role = "Director"; // Error: role is protected
/************************************************
 * 3. READONLY PROPERTIES
 * - Readonly properties can only be assigned once.
 ************************************************/
var Vehicle = /** @class */ (function () {
    function Vehicle(model) {
        this.model = model;
    }
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Tesla Model S");
console.log(vehicle1.getModel()); // Output: Tesla Model S
// vehicle1.model = "BMW"; // Error: Cannot assign to 'model' because it is a read-only property
/************************************************
 * 4. STATIC PROPERTIES & METHODS
 * - Static members belong to the class itself, not objects.
 ************************************************/
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircleArea = function (radius) {
        return MathUtils.PI * radius * radius;
    };
    MathUtils.PI = 3.14;
    return MathUtils;
}());
console.log(MathUtils.PI); // Accessing static property
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.5
/************************************************
 * 5. GETTERS AND SETTERS
 * - Control access to properties with custom logic.
 ************************************************/
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBal ance) {
        this._balance = initialBalance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (amount) {
            if (amount < 0) {
                console.log("Balance cannot be negative.");
            }
            else {
                this._balance = amount;
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount(1000);
console.log(account.balance); // Getter: 1000
account.balance = 1500; // Setter
console.log(account.balance); // Output: 1500
account.balance = -500; // Output: Balance cannot be negative.
/************************************************
 * 6. INHERITANCE
 * - A child class inherits properties and methods of a parent class.
 ************************************************/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move(); // Output: Moving... (inherited)
dog.bark(); // Output: Woof! Woof!
/************************************************
 * 7. METHOD OVERRIDING
 * - A subclass can provide its own implementation of a method.
 ************************************************/
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        console.log("Calculating area...");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        console.log("Area of Circle: ".concat(Math.PI * this.radius * this.radius));
    };
    return Circle;
}(Shape));
var circle = new Circle(5);
circle.area(); // Output: Area of Circle: 78.5398
var Report = /** @class */ (function () {
    function Report(content) {
        this.content = content;
    }
    Report.prototype.print = function () {
        console.log("Printing Report: ".concat(this.content));
    };
    return Report;
}());
var report = new Report("Monthly Financial Report");
report.print(); // Output: Printing Report: Monthly Financial Report
/************************************************
 * 9. ABSTRACT CLASSES
 * - Abstract classes cannot be instantiated.
 * - They may contain abstract methods that must be implemented in subclasses.
 ************************************************/
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase() {
    }
    EmployeeBase.prototype.logWorkHours = function () {
        console.log("Logging work hours...");
    };
    return EmployeeBase;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.work = function () {
        console.log("Writing code...");
    };
    return Developer;
}(EmployeeBase));
var dev = new Developer();
dev.work(); // Output: Writing code...
dev.logWorkHours(); // Output: Logging work hours...
/************************************************
 * 10. POLYMORPHISM
 * - One method can behave differently based on the object calling it.
 ************************************************/
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.sound = function () {
        console.log("Bird makes a sound");
    };
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.sound = function () {
        console.log("Chirp! Chirp!");
    };
    return Sparrow;
}(Bird));
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parrot.prototype.sound = function () {
        console.log("Squawk! Squawk!");
    };
    return Parrot;
}(Bird));
var birds = [new Sparrow(), new Parrot(), new Bird()];
birds.forEach(function (bird) { return bird.sound(); });
/*
Output:
Chirp! Chirp!
Squawk! Squawk!
Bird makes a sound
*/
