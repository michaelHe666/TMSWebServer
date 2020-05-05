$(document).ready(function () {
    userButton();
});

function userButton() {
    const button=$('.userButton>span:nth-child(1)');
    const darkBlock=$('.userButton>span:nth-child(2)>span:nth-child(2)');
    const lightBlock=$('.userButton>span:nth-child(2)>span:nth-child(1)');
    button.click(function () {
       if(parseInt(darkBlock.css('left'))>parseInt(lightBlock.css('left'))){
           userHide();
       }
       else {
           userShow();
       }
    });
}

function userHide() {
    const user=$('.user:first');
    const main=$('.main:first');
    const body=$('body:first');
    const width=window.innerWidth;
    const darkBlock=$('.userButton>span:nth-child(2)>span:nth-child(2):first');
    const lightBlock=$('.userButton>span:nth-child(2)>span:nth-child(1):first');
    user.animate({width:'0px'},1000,'swing',function () {
        lightBlock.css({borderRight:'none',borderLeft:'solid 2rem #a8a791',animation:'breatheLightLeft 2s infinite alternate'});
        darkBlock.css({left:'0.8rem',borderRight:'none',borderLeft:'solid 2rem #a8a791'});
    });
    body.animate({width:width.toString()+'px'},1000,'swing');
    main.animate({width:width.toString()+'px'},1000,'swing');
}

function userShow() {
    const width=window.innerWidth;
    const height=window.innerHeight;
    const body=$('body:first');
    const user=$('.user:first');
    const main=$('.main:first');
    const rem=Math.max(height/100,6).toFixed(2);
    const darkBlock=$('.userButton>span:nth-child(2)>span:nth-child(2):first');
    const lightBlock=$('.userButton>span:nth-child(2)>span:nth-child(1):first');
    user.animate({width:Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56)).toString()+'px'},1000,'swing',function () {
        lightBlock.css({borderLeft:'none',borderRight:'solid 2rem #a8a791',animation:'breatheLightRight 2s infinite alternate'});
        darkBlock.css({left:'1.2rem',borderLeft:'none',borderRight:'solid 2rem #a8a791'});
    });
    if(width<=2*Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))){
        if(width>(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem)){
            body.animate({width:width.toString()+'px'},1000,'swing');
            main.animate({width:width.toString()+'px'},1000,'swing');
        }
        else {
            body.animate({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'},1000,'swing');
            main.animate({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'},1000,'swing');
        }
    }
    else{
        body.animate({width:width.toString()+'px'},1000,'swing');
        main.animate({width:(width-Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))).toString()+'px'},1000,'swing');
    }
}