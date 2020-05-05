$(document).ready(function () {
    mTownBL();
});

$(window).bind('resize',function () {
    mTownBL()
});

function mTownBL() {
    const height=window.innerHeight;
    const width=window.innerWidth;
    const rem=parseFloat(Math.max(6,height/100).toFixed(2));
    const body=$('body:first');
    $('html:first').css({fontSize:rem.toString()+'px'});
    body.css({height:Math.max(height,95*rem).toString()+'px',width:Math.max(160*rem,width).toString()+'px'});
}