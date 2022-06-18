console.log('Generating 5 Random 2 digit numbers...');

var num1 = Math.floor(Math.random() * 90) + 10;
var num2 = Math.floor(Math.random() * 90) + 10;
var num3 = Math.floor(Math.random() * 90) + 10;
var num4 = Math.floor(Math.random() * 90) + 10;
var num5 = Math.floor(Math.random() * 90) + 10;

console.log('Random 2 digit number 1:',num1);
console.log('Random 2 digit number 2:',num2);
console.log('Random 2 digit number 3:',num3);
console.log('Random 2 digit number 4:',num4);
console.log('Random 2 digit number 5:',num5);

sum = num1 + num2 + num3 + num4 + num5;
console.log('Sum of 5 numbers:',sum);
avg = sum/5;
console.log('Average of 5 numbers:',avg);