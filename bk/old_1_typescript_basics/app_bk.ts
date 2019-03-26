// string
let myName_bk: string = 'aron';
// myName = 31;

// number
let age: number = 31;
// age = 'aron'

// boolean
let hobbies: boolean = true;
// hobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

let arrayHobbies: any[] = ['sport', 'reading'];
console.log(typeof arrayHobbies);
arrayHobbies = [100];
// arrayHobbies = 100;

// tuples
let address: [string, number] = ['superstreet', 99];

// enum
enum Color {
    Gray, // 0 
    Green = 100, // 1
    Blue // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = 'bmw';
console.log(car);
car = {brand: 'bmw', series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("hello");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2 
}
console.log(multiply(2, 4));

// funtion types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2,10));

// objects
let userData: {name: string, age: number} = {
    name: 'aron',
    age: 31
};
/*userData = {
    a: 'hello',
    b: 21
};*/

// complex obejct
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 31;
myRealRealAge = "31";
// myRealRealAge = true;

// check types
let finalValue = 31;
if (typeof finalValue == "number") {
    console.log('Finbal value is a number')
}

// never type - mean never relevent
function neverReturn(): never {
    throw new Error('An error');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;