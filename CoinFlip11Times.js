console.log('Coin Flip Simulator');

var headCount =0;
var tailCount =0;

while(headCount!=11 && tailCount!=11){

    var flip = Math.random();
    if (flip < 0.5){
    // console.log('Coin shows Heads');
    headCount++;
    }else{
    // console.log('Coin shows Tails');
    tailCount++;
    }

}

console.log('Coin shows Head ',headCount,' times.');
console.log('Coin shows Tail ',tailCount,' times.');

if(headCount>tailCount){
    console.log("Head Wins!");
}else{
    console.log("Tail Wins!");
}

 

