// Exercise 1 - as arrow function
const double = (value:number) => value * 2;
console.log(double(10));

// Exercise 2 - default params
const greet2 = (name = 'Max') => {
    console.log("Hello, " + name);
};
greet2();
greet2("Anna");

// Exercise 3 - spread operator
const numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

// Exercise 4  - spread operator
const newArray = [55, 20];
newArray.push(...numbers2);
console.log(newArray);

// Exercise 5 - desctruction array
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
console.log([result1, result2, result3]);

// Exercise 6 - desctruction object
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
console.log([firstName, experience]);