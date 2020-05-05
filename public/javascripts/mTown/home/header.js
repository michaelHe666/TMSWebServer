$(document).ready(function () {
    headerCalender();
    headerClock();
    // headerWeather();
});

function headerCalender() {
    const date=new Date();
    function Day() {
        const temp=date.getDay();
        if(temp===1){return 'Monday';}
        else if (temp === 2) {return 'Tuesday';}
        else if (temp === 3) {return 'Wednesday';}
        else if (temp === 4) {return 'Thursday';}
        else if (temp === 5) {return 'Friday';}
        else if (temp === 6) {return 'Saturday';}
        else {return 'Sunday';}
    }
    $('.home_header>span:nth-child(1):first').html(date.getFullYear().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getDate().toString()+' '+Day());
    setInterval(headerCalender,(23-date.getHours())*1000*60*60+(59)+(59-date.getMinutes())*60*1000+(59-date.getSeconds())*1000);
}

function headerClock() {
    const date=new Date();
    function timeToString(i) {if (i < 10){return '0'+i.toString();}else {return i.toString();}}
    $('.home_header>span:nth-child(2):first').html(timeToString(date.getHours())+':'+timeToString(date.getMinutes()));
    setInterval(headerClock,(date.getSeconds()===0?60:(59-date.getSeconds()))*1000);
}

//cross-domain access is denied by something.
function headerWeather() {
    console.log('ppx');
    $.ajax({
        url:'http://www.weather.com.cn/data/cityinfo/101190408.html',
        type:'get',
        dataType:'jsonp',
        success:function (feedback) {
            console.log(JSON.stringify(feedback));
        }
    });
}