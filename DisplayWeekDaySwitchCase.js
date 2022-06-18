const prompt = require('prompt-sync')({sigint: true});

const num = prompt('Enter Single Digit Number (between 1 to 7) :');
console.log('Number entered is :');
console.log(Number(num));

switch(Number(num)){
    case 1:
        console.log('Monday');
    break;
    case 2:
        console.log('Tuesday');
    break;
    case 3:
        console.log('wednesday');
    break;
    case 4:
        console.log('Thursday');
    break;
    case 5:
        console.log('Friday');
    break;
    case 6:
        console.log('Saturday');
    break;
    case 7:
        console.log('Sunday');
    break;
    default:
        console.log('Number needs to be between 1 and 7');
}
