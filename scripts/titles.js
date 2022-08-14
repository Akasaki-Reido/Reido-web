function presstitle() {
    document.querySelector('h1').onclick = function() {
        alert('触らない！\n吾輩は魔王だ！！！')
    };
    return presstitle();
};

presstitle()