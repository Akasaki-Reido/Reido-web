var click_count = 0
//var test = document.querySelector('h1')
var popup_ = document.querySelector('dialog.popup')
var close_ = document.querySelector('button.close-b')
var changepage = document.querySelector('h2.to-oshi')

function presstitle() {
    document.querySelector('h1.big-title').onclick = function() {
        click_count += 1;
        alert('吾輩は魔王だから！\n触らない！('+click_count+')');
        //test code
        //test.innerHTML = '赤咲レイド' + click_count;
        if (click_count === 10) {
            popup_.showModal();
            click_count = 0;
        }
    }
    return;
}

changepage.addEventListener("click", function() {
    window.location = "./pages/oshi.html";
});

close_.addEventListener("click", function() {
    popup_.close();
});

presstitle()