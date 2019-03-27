// simple generic
function echo(data: any) {
    return data;
}

console.log(echo('Aron'));
console.log(echo(31));
console.log(echo({name: 'Aron', age: 31}));

// better generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Aron').length);
console.log(betterEcho<number>(31));
console.log(betterEcho({name: 'Aron', age: 31}));

// built-in generic
const testResult:Array<number> = [1.99, 2.45];
testResult.push(2);
console.log(testResult);

// arrays
function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}
printAll(['alma', 'körte']);

// generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('string'));

// generic class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());