// first decorator
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("hi");
    }
}

// factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {}

// advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "green Plant";
}
const plant = new Plant();
(<any>plant).print();

// method decorator
function editable(value: boolean) {
    return function(target: any, ppropName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

// property decorator
function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value,
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(true)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(true)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super project');
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
};
project.calcBudget();
console.log(project);

// parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`Target: ${target}`);
    console.log(`Method name: ${methodName}`);
    console.log(`Param index: ${paramIndex}`);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printSutentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll)
            console.log(10000);
        else
            console.log(2000);
    }
}
const course = new Course('Super course');
course.printSutentNumbers('anything', true);
course.printSutentNumbers('something', false);
