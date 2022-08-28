//add fadein and fadeout
var mytext = document.querySelector('span.word-block');

function fadeIn(element, speed) {
    if(element.style.color != "rgba(255, 255, 255, 1)") {
        var speed = speed || 30;
        var num = 0;
        var st = setInterval(function() {
            num ++;
            element.style.color = "rgba(255, 255, 255, "+num/10+")";
            if (num>=10){
                clearInterval(st);
            }
        }, speed);
    }
}

function fadedOut(element, speed) {
    if(element.style.color != "rgba(255, 255, 255, 0)") {
        var speed = speed || 30;
        var num = 10;
        var st = setInterval(function() {
            num --;
            element.style.color = "rgba(255, 255, 255, "+num/10+")";
            if (num<=0){
                clearInterval(st);
            }
        },speed);
    }
}

mytext.onmouseover = function() {
    fadeIn(mytext,20);
}

mytext.onmouseout = function() {
    fadedOut(mytext, 20);
}

/*
mytext.onmouseover = function() {
    //mytext.style.backgroundColor = "#FFFFFF";
    mytext.style.color = "#FFFFFF";
}

mytext.onmouseout = function() {
    //mytext.style.backgroundColor = "#000000";
    mytext.style.color = "#000000";
}
*/