"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// first decorator
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log("hi");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "green Plant";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// method decorator
function editable(value) {
    return function (target, ppropName, descriptor) {
        descriptor.writable = value;
    };
}
// property decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('Super project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
// parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: " + target);
    console.log("Method name: " + methodName);
    console.log("Param index: " + paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printSutentNumbers = function (mode, printAll) {
        if (printAll)
            console.log(10000);
        else
            console.log(2000);
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printSutentNumbers", null);
    return Course;
}());
var course = new Course('Super course');
course.printSutentNumbers('anything', true);
course.printSutentNumbers('something', false);
