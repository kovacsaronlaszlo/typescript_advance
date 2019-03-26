"use strict";
// string
var myName_bk = 'aron';
// myName = 31;
// number
var age = 31;
// age = 'aron'
// boolean
var hobbies = true;
// hobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
var arrayHobbies = ['sport', 'reading'];
console.log(typeof arrayHobbies);
arrayHobbies = [100];
// arrayHobbies = 100;
// tuples
var address = ['superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("hello");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
// funtion types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 10));
// objects
var userData = {
    name: 'aron',
    age: 31
};
/*userData = {
    a: 'hello',
    b: 21
};*/
// complex obejct
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 31;
myRealRealAge = "31";
// myRealRealAge = true;
// check types
var finalValue = 31;
if (typeof finalValue == "number") {
    console.log('Finbal value is a number');
}
// never type - mean never relevent
function neverReturn() {
    throw new Error('An error');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
