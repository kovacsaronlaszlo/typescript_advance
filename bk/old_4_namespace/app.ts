// namespaces
/*namespace MyMath {
    const PI = 3.14;

    export function calculateCircumfence(diameter: number) {
        return diameter * PI;
    }
    
    export function calculateRentangle(width: number, height: number) {
        return width * height;
    }
}*/
/*
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
// tsc --outFile app.js
*/
import CircleMath = MyMath.Circle;

const PI = 2.99;

console.log(MyMath.calculateRentangle(10, 20));
console.log(CircleMath.calculateCircumfence(3));
console.log(PI);