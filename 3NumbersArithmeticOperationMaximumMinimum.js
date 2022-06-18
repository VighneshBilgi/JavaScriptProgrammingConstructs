const prompt = require('prompt-sync')({sigint: true});

console.log('Enter 3 Numbers (a,b,c):');

const a = prompt('Enter number "a":');
console.log(Number(a));

const b = prompt('Enter number "b":');
console.log(Number(b));

const c = prompt('Enter number "c":');
console.log(Number(c));

var exp1 = a + b * c;
console.log('Value for expression 1 i.e a + b * c is :',exp1);
var exp2 = a % b + c;
console.log('Value for expression 2 i.e a % b + c is :',exp2);
var exp3 = c + a / b;
console.log('Value for expression 3 i.e c + a / b is :',exp3);
var exp4 = a * b + c;
console.log('Value for expression 4 i.e a * b + c is :',exp4);

var largest = Math.max(exp1 , exp2, exp3, exp4);
console.log('Largest value is :', largest);

var smallest = Math.min(exp1 , exp2, exp3, exp4);
console.log('Largest value is :', smallest);