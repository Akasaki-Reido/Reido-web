/*
$(function(){
    var $li = $('ul.tab-title li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });


var myli = document.querySelector('ul.tab-title li');
var allli = myli.eq(0).addClass('active').find('a').attr('href');
allli.siblings('.tab-inner').hide();

myli.addEventListener("click", function() {
    myli.find('a').attr ('href').show().siblings('.tab-inner').hide();
    myli.addClass('active').siblings('.active').removeClass('active');
})
*/
var tabbutton = document.querySelector('.choose-button h2');
var button = document.querySelector('a.tab').getAttribute('href');

//tab
var komainu = document.querySelector('h2#tab01');
var inori = document.querySelector('h2#tab02');
//bool
var selection = document.querySelector('h2.selected');
//box
var leftbox = document.querySelector('.left-box');
var rightbox = document.querySelector('.right-box');
//picture
var pic = document.querySelector('img.left-pic');
//title
var title = document.querySelector('.name h2');
//about
var about1 = document.querySelector('p.line1');
var about2 = document.querySelector('p.line2');
//twitter
//var timeline = document.querySelector('a.twitter-timeline');
//var follow = document.querySelector('a.twitter-follow-button');
//links
var twitter = document.querySelector('a.twitter-b');
var reality = document.querySelector('a.reality-b');
var youtube = document.querySelector('a.yt-b');


komainu.addEventListener("click", function() {
    komainu.classList.add("selected");
    komainu.classList.remove("nope");
    inori.classList.add("nope");
    inori.classList.remove("selected");
    komainu.style.backgroundColor = "#00FFFF";
    inori.style.backgroundColor = "White";
    leftbox.style.display = "";
    rightbox.style.display = "";
    pic.setAttribute('src', '../assets/komainu1.jpg');
    title.innerHTML = 'こまいぬ';
    about1.innerHTML = 'REALITYの神社に住んでいる犬です';
    about2.innerHTML = 'エアロがすき';
    //timeline.href = 'https://twitter.com/komainu_reality?ref_src=twsrc%5Etfw';
    //follow.href = 'https://twitter.com/komainu_reality';
    twitter.href = 'https://twitter.com/komainu_reality';
    reality.href = 'https://reality.app/profile/232c82a5';
    youtube.href = 'https://www.youtube.com/channel/UCPPJIVH7i1Nyf5e1i1_eJvQ';
})

inori.addEventListener("click", function() {
    komainu.classList.add("nope");
    komainu.classList.remove("selected");
    inori.classList.add("selected");
    inori.classList.remove("nope");
    komainu.style.backgroundColor = "White";
    inori.style.backgroundColor = "#00FFFF";
    leftbox.style.display = "";
    rightbox.style.display = "";
    pic.setAttribute('src', '../assets/himeboshi1.jpg');
    title.innerHTML = '媛星いのり';
    about1.innerHTML = 'VWIED TWILIGHT 1期生';
    about2.innerHTML = '褒めて、愛して、ｽﾞﾌﾞｽﾞﾌﾞに♡き';
    //timeline.href = 'https://twitter.com/himeboshi_inori?ref_src=twsrc%5Etfw';
    //follow.href = 'https://twitter.com/himeboshi_inori';
    twitter.href = 'https://twitter.com/himeboshi_inori';
    reality.href = 'https://reality.app/profile/8fdf2c97';
    youtube.href = 'https://www.youtube.com/channel/UCiwmYRyHPNVbDQbZ_qT8X5A';
})

if (komainu == null) and (inori == null); {
    leftbox.style.display = "none";
    rightbox.style.display = "none";
}