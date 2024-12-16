//! Basic class
// class Department {
//     name: string;
//     constructor(n: string) {
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log("Department",  this.name);
//     }
// }
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
// const accounting = new Department("Accounting");
// accounting.describe();
// const accountingCopy = { 
//     name:"Dummy",
//     describe : accounting.describe
// }
// accountingCopy.describe();
// private, public access modyfiers
// class Department {
//     // public name: string;
//     // private employees: string[];
//     constructor(public name: string, private employees: string[]) { //  shorthand
//         // this.name = n;
//         // this.employees = [];
//     }
//     describe(this: Department) {
//         console.log("Department", this.name);
//     }
//     addEmployee(emp: string) {
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp: ', this.employees.length);
//         console.log(this.employees);
//     }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// accounting.addEmployee("Patel");
// accounting.addEmployee("Shivani");
// accounting.printEmployeeInformation();
// // accounting.employees = ["xyz"]; 
// accounting.printEmployeeInformation();
//! readonly
// class Department {
//     public name: string;
//     private employees: string[];
//     private readonly id : string;
//     constructor(n: string) { //  shorthand
//         this.name = n;
//         this.id = "d1"; // only once you can initialize
//         this.employees = [];
//     }
//     describe(this: Department) {
//         // this.id = "d2"; 
//         console.log("Department", this.name);
//     }
//     addEmployee(emp: string) {
//         this.employees.push(emp);
//     }
//     printEmployeeInformation() {
//         console.log('Number of emp: ', this.employees.length);
//         console.log(this.employees);
//     }
// }
//! Inheritence
//! Override properties & protected access modifier
//! setter & getter method
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "), ").concat(this.name));
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // reports : string[] = [];
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (emp) {
        if (emp === "Patel") {
            return;
        }
        this.employees.push(emp);
    };
    Object.defineProperty(AccountingDepartment.prototype, "getReports", {
        get: function () {
            if (this.reports.length > 0) {
                return this.reports;
            }
            throw new Error("Report not found.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "setReports", {
        set: function (value) {
            if (!value) {
                throw new Error("Please pass valid value.");
            }
            this.reports.push(value);
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDepartment;
}(Department));
var accDep = new AccountingDepartment("d1", []);
accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe();
accDep.addEmployee("Patel");
accDep.addEmployee("Shivani");
// accDep.printEmployeeInformation();
// setter & getter
console.log("getter -> ", accDep.getReports);
accDep.setReports = "Code review error";
console.log("getter -> ", accDep.getReports);
//! static method
var Department2 = /** @class */ (function () {
    function Department2(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    Department2.prototype.describe = function () {
        console.log("Department (".concat(this.id, "), ").concat(this.name));
    };
    Department2.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department2.prototype.printEmployeeInformation = function () {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    };
    Department2.getSalary = function () {
        return { salary: 500000 };
    };
    return Department2;
}());
var salary = Department2.getSalary(); //  without creating object, we can access by its class name
console.log(salary);
//! abstract classes
var Department3 = /** @class */ (function () {
    function Department3(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    return Department3;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    Subclass.prototype.describe = function () {
        console.log("Department", this.id);
    };
    Subclass.prototype.displayName = function () {
        console.log(this.name);
    };
    return Subclass;
}(Department3));
var subClass = new Subclass("D1", []);
subClass.describe();
