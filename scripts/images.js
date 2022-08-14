var mytitle = document.querySelector('h2.sec-title')
var newImage = document.querySelector('img.Right-pic');

mytitle.onclick = function() {
    let mysrc = newImage.getAttribute('src');
    if(mysrc === './assets/Reido2.original') {
        newImage.setAttribute('src', './assets/Reido3.original');
    } else {
        newImage.setAttribute('src', './assets/Reido2.original');
    }
}