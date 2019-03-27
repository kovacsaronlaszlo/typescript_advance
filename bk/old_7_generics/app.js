"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo('Aron'));
console.log(echo(31));
console.log(echo({ name: 'Aron', age: 31 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Aron').length);
console.log(betterEcho(31));
console.log(betterEcho({ name: 'Aron', age: 31 }));
// built-in generic
var testResult = [1.99, 2.45];
testResult.push(2);
console.log(testResult);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['alma', 'körte']);
// generic types
var echo2 = betterEcho;
console.log(echo2('string'));
// generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
