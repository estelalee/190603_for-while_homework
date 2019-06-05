alert("這次由我來猜，請給我一個範圍吧");
var min = Number(prompt("請你給我一個最小值"));
var max = Number(prompt("請你給我一個最大值"));
alert("你想好炸彈是多少了嗎？我們開始吧！");

var computerGuess = Number(Math.floor(Math.random() * 100));
var feedback = prompt("我猜是" + computerGuess + "，請你告訴我猜'對'了還是'錯'了");
var boom = false;


do{
    if (feedback == "對") {
        alert("哇！猜對了耶！");
        boom = true;    
    } else if (feedback == "錯") {
        //猜太大



        computerGuess = Number(Math.floor(Math.random() * 100));
        feedback = prompt("那我猜是" + computerGuess + "，請你告訴我猜'對'了還是'錯'了");
    } else {
        var error = prompt("你這樣我不懂，請你告訴我猜'對'了還是'錯'了");
    }
} while (boom = true);
