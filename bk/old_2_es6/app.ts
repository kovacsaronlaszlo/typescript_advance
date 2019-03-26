// let & const
console.log('let and const');
var variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 21; // => wont work

// block scope
function reset() {
    // console.log(variable); // wont work
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

console.log('====================');
// arrow functions
console.log('arrow functions');
const addNumber = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumber(1,2));

const multiplyNumbers = (number1: number, number2: number) => number1 + number2;
console.log(multiplyNumbers(10, 12));

const greet = () => {
    console.log('hello');
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend('aron');

console.log('====================');
// defult parameters
console.log('defult parameters');
const countdown = (start: number = 10): void => {
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

const numbers = [1, 10, 99, -5];
console.log(Math.max(33,99,10,-3));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
    return args;
}

console.log(makeArray(1,2,6,12,10));

console.log('====================');
// destructuring
console.log('destructuring');

const myHobbies = ['sports', 'reading'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: 'aron', age: 31};
// const {userName, age} = userData; //=> same shit belove
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

console.log('====================');
// template literals
console.log('template literals');

const userName = 'aron';
const greeting = `this is a heading!
hello, I'm ${userName}!
I'm a bad motherf*cker!`;
console.log(greeting);


