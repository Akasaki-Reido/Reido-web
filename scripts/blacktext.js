var mytext = document.querySelector('span.word-block');

mytext.onmouseover = function() {
    mytext.style.backgroundColor = "#FFFFFF";
}

mytext.onmouseout = function() {
    mytext.style.backgroundColor = "#000000";
}