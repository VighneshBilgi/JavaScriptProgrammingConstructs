const prompt = require('prompt-sync')({sigint: true});

const year = prompt('Enter Year :');
console.log('Year entered is :');
console.log(Number(year));

if ( ((year % 4 == 0) && (year % 100 != 0))  || (year % 400 == 0) ){
    console.log(Number(year),' is a Leap Year');
}else{
    console.log(Number(year),' is not a Leap Year');
}