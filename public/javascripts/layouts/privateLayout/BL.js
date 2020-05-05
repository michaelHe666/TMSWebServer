$(document).ready(function () {
    BL();
});

let resizeSwitch=false;
$(window).bind('resize',function () {
   if(resizeSwitch===false){
       resizeSwitch=true;
       resizeBL();
   }
});

function BL() {
    const width=window.innerWidth;
    const height=window.innerHeight;
    const html=$('html:first');
    const body=$('body:first');
    const user=$('.user:first');
    const main=$('.main:first');
    const userButton=$('.userButton:first');
    const rem=parseFloat(Math.max(height/100,6).toFixed(2));
    if ( html.css('fontSize') !== rem.toString()+'px') { html.css('fontSize',rem.toString()+'px');}
    body.css({height:height.toString()+'px'});
    user.css({width:Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56)).toString()+'px',height:height.toString()+'px'});
    userButton.css('top',Math.floor(height/2-6*rem).toString()+'px');
    main.css({height:height.toString()+'px'});
    if(width<=3*Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))){
        if(width>(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem)){main.css({width:width.toString()+'px'});}
        else {
            main.css({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'});
            body.css({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'});
        }
    }
    else{main.css({width:(width-parseInt(user.css('width'))).toString()+'px'});}

    if(width<=3*Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))){userHide();}
}

function resizeBL() {
    const width=window.innerWidth;
    const height=window.innerHeight;
    const html=$('html:first');
    const body=$('body:first');
    const user=$('.user:first');
    const main=$('.main:first');
    const userButton=$('.userButton:first');
    const rem=Math.max(height/100,6).toFixed(2);
    if ( html.css('fontSize') !== rem.toString()+'px') { html.css('fontSize',rem.toString()+'px');}
    body.css({height:height.toString()+'px'});
    user.css({height:height.toString()+'px'});
    userButton.css('top',Math.floor(height/2-6*rem).toString()+'px');
    main.css({height:height.toString()+'px'});
    if (parseInt(user.css('width')) === 0) {
        user.css({width:Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56)).toString()+'px'});
        main.css({width:width.toString()+'px'});
        resizeSwitch=false;
    }
    else {
        user.css({width:Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56)).toString()+'px'});
        if(width<=3*Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))){
            if(width>(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem)){
                body.css({width:width.toString()+'px'});
                main.css({width:width.toString()+'px'});
            }
            else {
                body.css({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'});
                main.css({width:(Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))+10*rem).toString()+'px'});
            }
        }
        else{
            body.css({width:width.toString()+'px'});
            main.css({width:(width-Math.floor(Math.min(Math.max((width/5+100),rem*50),rem*56))).toString()+'px'});
        }
        resizeSwitch=false;
    }
}

function userHide() {
    const user=$('.user:first');
    const main=$('.main:first');
    const body=$('body:first');
    const width=window.innerWidth;
    const darkBlock=$('.userButton>span:nth-child(2)>span:nth-child(2):first');
    const lightBlock=$('.userButton>span:nth-child(2)>span:nth-child(1):first');
    user.animate({width:'0px'},1000,'swing',function () {
        lightBlock.css({borderRight:'none',borderLeft:'solid 2rem #f3f3f3',animation:'breatheLightLeft 2s infinite alternate'});
        darkBlock.css({left:'0.8rem',borderRight:'none',borderLeft:'solid 2rem #a8a791'});
    });
    body.animate({width:width.toString()+'px'},1000,'swing');
    main.animate({width:width.toString()+'px'},1000,'swing');
}