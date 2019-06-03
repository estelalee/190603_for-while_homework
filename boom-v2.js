var min = 0;
var max = 100;
var answer = Math.floor(Math.random() * 100);

var input = Number(prompt("一起來玩終極密碼吧，範圍是" + min + "-" + max + "，請猜一個數字："));

while (input !== answer) {
    if (input > answer) {
        max = input;
        alert("猜錯了哦～再給你一次機會～");
        input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
    } else if (input < answer) {
        min = input;
        alert("猜錯了哦～再給你一次機會～");
        input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
    } else {
        break;
    }
}
alert("哇你猜對了耶～只好結束遊戲摟");