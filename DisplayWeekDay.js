const prompt = require('prompt-sync')({sigint: true});

const num = prompt('Enter Single Digit Number (between 1 to 7) :');
console.log('Number entered is :');
console.log(Number(num));

if(num == 1){
    console.log('Monday');
}else if(num == 2){
    console.log('TTuesday');
}else if(num == 3){
    console.log('Wednesday');
}else if(num == 4){
    console.log('Thursday');
}else if(num == 5){
    console.log('Friday');
}else if(num == 6){
    console.log('Saturday');
}else if(num == 7){
    console.log('Sunday');
}else{
    console.log('Number needs to be between 1 and 7');
}