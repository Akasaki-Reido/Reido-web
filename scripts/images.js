//old code

/*var mytitle = document.querySelector('h2.sec-title')
var newImage = document.querySelector('img.Right-pic');

mytitle.onclick = function() {
    let mysrc = newImage.getAttribute('src');
    if(mysrc === './assets/Reido2.original') {
        newImage.setAttribute('src', './assets/Reido3.original');
    } else {
        newImage.setAttribute('src', './assets/Reido2.original');
    }
}*/

//new code

var mytitle = document.querySelector('h2.sec-title')
var all_images = ['./assets/Reido2.original', './assets/Reido3.original', './assets/Reido4.jpg'];
var images_count = 0;
var get_image = document.querySelector('img.Right-pic');
var rpic = document.querySelector('img.rpic');

function change_pic() {
    get_image.setAttribute('src', all_images[images_count]);
    images_count += 1;
    if (images_count === all_images.length) {
        images_count = 0;
    };
    setTimeout(change_pic, 3000);
}

//I don't need this code now, I will do other things about this code in future
/*
mytitle.onclick = function() {
    let pic = get_image.getAttribute('src');
    get_image.setAttribute('src', all_images[images_count]);
    images_count += 1;
    if (images_count === all_images.length) {
        images_count = 0;
    }
}
*/

rpic.onmouseover = function() {
    rpic.setAttribute('src', './assets/light_reido.png');
    rpic.setAttribute('title', '吾輩の天使ver.');
    rpic.setAttribute('alt', '天使吾輩');
}

rpic.onmouseout = function() {
    rpic.setAttribute('src', './assets/Reido1-1.original');
    rpic.setAttribute('title', '吾輩はかっこいいよね~');
    rpic.setAttribute('alt', 'かっこいい吾輩');
}

window.onload = change_pic;