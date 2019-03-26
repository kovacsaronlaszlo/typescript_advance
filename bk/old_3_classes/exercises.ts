// Exercise 1 - class
class Car {
    name: string;
    acceleration: number = 0;
    constructor(name: string){
        this.name = name;
    }
    honk() {
        console.log('Tooot!');
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car('bmw');
car.honk(); // Tooot!
console.log(car.acceleration); // 0
car.accelerate(20);
console.log(car.acceleration); // 20

// Exercise 2 - inheritence
class BaseObject {
    width = 0;
    height = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.height = 10;
console.log(rectangle.calcSize()); // 50

// Exercise 3 - getters and setters
class Person2 {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = ""
        }
    }
}

const person2 = new Person2();
console.log(person2.firstName); // ""
person2.firstName = 'Ma';
console.log(person2.firstName); // ""
person2.firstName = 'Kovács Áron';
console.log(person2.firstName); // "Kovács Áron"
