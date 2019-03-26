"use strict";
// let & const
console.log('let and const');
var variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 21; // => wont work
// block scope
function reset() {
    // console.log(variable); // wont work
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log('====================');
// arrow functions
console.log('arrow functions');
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(1, 2));
var multiplyNumbers = function (number1, number2) { return number1 + number2; };
console.log(multiplyNumbers(10, 12));
var greet = function () {
    console.log('hello');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('aron');
console.log('====================');
// defult parameters
console.log('defult parameters');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countdown(10);
console.log('====================');
// rest and spread
console.log('rest and spread');
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6, 12, 10));
console.log('====================');
// destructuring
console.log('destructuring');
var myHobbies = ['sports', 'reading'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: 'aron', age: 31 };
// const {userName, age} = userData; //=> same shit belove
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
console.log('====================');
// template literals
console.log('template literals');
var userName = 'aron';
var greeting = "this is a heading!\nhello, I'm " + userName + "!\nI'm a bad motherf*cker!";
console.log(greeting);
