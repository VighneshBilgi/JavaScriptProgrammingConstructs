console.log('Generating 5 Random 3 digit numbers...');

var num1 = Math.floor(Math.random() * 900) + 100;
var num2 = Math.floor(Math.random() * 900) + 100;
var num3 = Math.floor(Math.random() * 900) + 100;
var num4 = Math.floor(Math.random() * 900) + 100;
var num5 = Math.floor(Math.random() * 900) + 100;

console.log('Random 3 digit number 1:',num1);
console.log('Random 3 digit number 2:',num2);
console.log('Random 3 digit number 3:',num3);
console.log('Random 3 digit number 4:',num4);
console.log('Random 3 digit number 5:',num5);

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ){
    console.log(num1,' is largest');
}else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log(num2,' is largest');
}else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log(num3,' is largest');
}else if(num4 > num1 && num4 > num2 && num4 > num4 && num4 > num5){
    console.log(num4,' is largest');
}else{
    console.log(num5,' is largest');
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 ){
    console.log(num1,' is smallest');
}else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
    console.log(num2,' is smallest');
}else if(num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
    console.log(num3,' is smallest');
}else if(num4 < num1 && num4 < num2 && num4 < num4 && num4 < num5){
    console.log(num4,' is smallest');
}else{
    console.log(num5,' is smallest');
}