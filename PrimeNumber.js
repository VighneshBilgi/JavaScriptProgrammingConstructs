const prompt = require('prompt-sync')({sigint: true});

console.log('Is the number a prime ?');

const number = prompt('Please enter number :');
console.log('Number entered is :');
console.log(Number(number));

var num = Number(number);
var count =0;

for(var i = num; i>=1; i--){
    if(num%i==0){
        count++;
    }
    
}

if(count ==2){
    console.log(num,' is a Prime Number');
}else{
    console.log(num,' is not a Prime Number');
}
