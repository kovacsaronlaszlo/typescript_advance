class Person {
    name: string;
    private type: string;
    protected age: number = 31;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('bad motherf*cker');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Aron', 'aron1234');
console.log(person.name, person.username);
person.printAge();
// person.setType('bad motherf*cker'); // => won't work with private method

// inheritance
class Max extends Person {
    // name = 'Max';

    constructor(username: string) {
        super('Max', username);
        this.age = 32;
    }
}

const max = new Max('anna');
console.log(max);

// getters & setters
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) 
            this._species = value;
        else
            this._species = 'Default';
    }

}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// static properties & methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference (diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(2 * Helpers.calcCircumference(8));

// abstract classes
abstract class Project {
    projectName: string = "default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super It Project');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;
    
    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';