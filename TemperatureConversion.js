const prompt = require('prompt-sync')({sigint: true});

function Farenheit(degC) {

    if(degC >=0 && degC <=100){
        degF = (degC * 9/5) + 32 ;
        console.log(degC,' degree Celsius is',degF,' degree Farenheit');
    }else{
        console.log('Celsius must be between 0 and 100');
    }
    
   
}

function Celsius(degF) {

    if(degF >=32 && degF <=212){
        degC = (degF -32)* (5/9);
        console.log(degF,' degree Farenheit is',degC,' degree Celsius');
    }else{
        console.log('Farenheit must be between 32 and 212');
    }
   
}

console.log('Temperature Conversion Menu :');

console.log('Select choice (between 1 and 2) :');
console.log('1. Celsius to Farenheit :');
console.log('2. Farenheit to Celsius :');

const choice = prompt('Please enter choice :');
console.log('Choice entered is :');
console.log(Number(choice));

switch(Number(choice)){
    case 1:
        const celsius = prompt('Enter Celsius:');
        Farenheit(celsius);
    break;
    case 2:
        const farenheit = prompt('Enter Farenheit:');
        Celsius(farenheit);
    break;
    default:
        console.log('Choice needs to be between 1 and 2');
}
