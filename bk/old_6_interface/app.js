"use strict";
function greet(person) {
    console.log("hello " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Viki';
}
var person = {
    firstName: 'Aron',
    hobbies: ['sport', 'reading'],
    greet: function (lastname) {
        console.log("hi, I am " + this.firstName + " " + lastname);
    }
};
// greet({firstName: 'Aron', age: 31});
changeName(person);
greet(person);
person.greet('Anything');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastname) {
        console.log("hi, I am " + this.firstName + " " + lastname);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Áron';
myPerson.lastname = 'adfd';
greet(myPerson);
myPerson.greet('Anything');
myPerson.greet(myPerson.lastname);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 31,
    firstName: 'Aron',
    greet: function (lastname) {
        console.log('hello');
    }
};
console.log(oldPerson);
