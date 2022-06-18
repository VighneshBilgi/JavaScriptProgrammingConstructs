const prompt = require('prompt-sync')({sigint: true});

console.log('Factorial of a number.');

const number = prompt('Please enter number :');
console.log('Number entered is :');
console.log(Number(number));

var num = Number(number);
var fact = num;

for(var i = num; i>1; i--){

    fact = fact*(i-1);

}

console.log('Factorial of ',num,'is :',fact);
   

