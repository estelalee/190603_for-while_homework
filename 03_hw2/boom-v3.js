alert("這次由我來猜，請給我一個範圍吧");
var min = Number(prompt("請你給我一個最小值"));
var max = Number(prompt("請你給我一個最大值"));
alert("你設定的數字範圍是：" + min + "-" + max);
alert("那你想好炸彈是多少了嗎？我們開始吧！");

var guessing = Number(Math.floor(Math.random() * 100));
var feedback = prompt("我猜是" + guessing + "，請你告訴我猜'對'了還是'錯'了");
var range = guessing <= max && guessing >= min;
var boom = false;

do {
    if (range) {
        while (boom = false) {
            if (feedback == "對") {
                alert("哇！猜對了耶！");
                boom = true;
                break;
            } else if (feedback == "錯") {
                //太大或太小
                var hint = prompt("那我猜得太'大'了還是太'小'了呢？");
                while (boom = false) {
                    if (hint = "大") {
                        var max = guessing;
                        guessing = Number(Math.floor(Math.random() * 100));
                    } else if (hint = "小") {
                        var min = guessing;
                        guessing = Number(Math.floor(Math.random() * 100));
                    } else {
                        alert("你這樣我不懂，請你告訴我猜太'大'了還是太'小'了");
                    }
                };
            } else {
                var errorFeedback = prompt("你這樣我不懂，請你告訴我猜'對'了還是'錯'了");
            }
        };
    } else {
        guessing = Number(Math.floor(Math.random() * 100));
    }
} while (boom = false);