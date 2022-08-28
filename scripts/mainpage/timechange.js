/*
var timetext = document.querySelector('h4.time');
var date = new Date();

function get_time_now() {
    let years = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let fulldate = years+'/'+month+'/'+day+', '+hour+':'+min+':'+sec;
    return fulldate;
}

timetext.innerHTML = get_time_now()
*/
function startTime(){
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.querySelector('div.timenow').innerHTML = hh + ":" + mm + ":" + ss;
    var timeoutId = setTimeout(startTime, 500);
  }
  
  function checkTime(i){
    if(i < 10) {
      i = "0" + i;
    }
    return i;
  }

setInterval(startTime, 0);