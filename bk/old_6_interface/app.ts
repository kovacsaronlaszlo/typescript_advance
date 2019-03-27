interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastname: string): void;
}

function greet(person: NamedPerson) {
    console.log(`hello ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Viki'
}

const person: NamedPerson = {
    firstName: 'Aron', 
    hobbies: ['sport', 'reading'],
    greet(lastname: string) {
        console.log(`hi, I am ${this.firstName} ${lastname}`)
    }
}

// greet({firstName: 'Aron', age: 31});
changeName(person);
greet(person);
person.greet('Anything');

class Person implements NamedPerson {
    firstName: string;
    lastname: string;
    greet(lastname: string) {
        console.log(`hi, I am ${this.firstName} ${lastname}`)
    }
}

const myPerson = new Person();
myPerson.firstName = 'Áron';
myPerson.lastname = 'adfd';
greet(myPerson);
myPerson.greet('Anything');
myPerson.greet(myPerson.lastname);


// function types

interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10,20));

// interface inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 31,
    firstName: 'Aron',
    greet(lastname: string) {
        console.log('hello');
    }
}

console.log(oldPerson);