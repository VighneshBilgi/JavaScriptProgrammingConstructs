const prompt = require('prompt-sync')({sigint: true});

console.log('Prime Number within a range.');

const number1 = prompt('Please enter starting number of the range:');
console.log('Number entered is :');
console.log(Number(number1));

const number2 = prompt('Please enter ending number of the range:');
console.log('Number entered is :');
console.log(Number(number2));

var start = Number(number1);
var final = Number(number2);

var count =0;

for(var i = start; i<=final; i++){

    for(var j = i; j>=1; j--){
        
        if(i%j==0){
            count++;
        }

    }

    if(count ==2){
        console.log(i,' is a Prime Number');
    }

    count = 0;

}

   

