const prompt = require('prompt-sync')({sigint: true});

console.log('Unit Conversion Menu :');

var feetToInches = 12;
var metersToFeet = 3.281;

console.log('Select choice (between 1 and 4) :');
console.log('1. Feet to Inch :');
console.log('2. Inch to Feet :');
console.log('3. Feet to Meter:');
console.log('4. Meter to Feet:');

const choice = prompt('Please enter choice :');
console.log('Choice entered is :');
console.log(Number(choice));

switch(Number(choice)){
    case 1:
        const feet1 = prompt('Enter Feet:');
        console.log(feet1,' Feet is',feet1* feetToInches,' Inches');
    break;
    case 2:
        const inches = prompt('Enter Inches:');
        console.log(inches,' Inches is',inches / feetToInches,' Feet');
    break;
    case 3:
        const feet2 = prompt('Enter Feet:');
        console.log(feet2,' Feet is',feet2 / metersToFeet,' Meters');
    break;
    case 4:
        const meters = prompt('Enter Meters:');
        console.log(meters,' Meters is',meters * metersToFeet,' Feet');
    break;
    default:
        console.log('Choice needs to be between 1 and 4');
}
