$(document).ready(function () {
    homeBodyNav();
});

function homeBodyNav() {
    const buttons=$('.home_body_nav>span>span');
    const status1={borderBottomColor: '#6e6e6e',color:'#6e6e6e'};
    const status2={borderBottomColor: 'transparent',color:'#cecece'};
    //style switching method
    for (let k = 0; k < buttons.length; k = k + 1) {
        const  usingButton=buttons.eq(k);
        usingButton.mouseenter(function () {
            usingButton.animate(status1,500);
            for (let p = 0; p < buttons.length; p = p + 1) {
                if(p!==k){
                    buttons.eq(p).css(status2)
                }
            }
        });
        usingButton.click(function () {
            const tempText=usingButton.html();
            usingButton.html(' '+tempText+' ');
            $('.home_body_content:first').children('div:nth-child('+(k+1).toString()+')').css({display:'flex'});
            for (let p = 0; p < buttons.length; p = p + 1) {
                if(p!==k){
                    buttons.eq(p).html($.trim(buttons.eq(p).html()));
                    $('.home_body_content:first').children('div:nth-child('+(p+1).toString()+')').css({display:'none'});
                }
            }
        });
        usingButton.mouseleave(function (){usingButton.stop(true)});
    }
    $('.home_body_nav>span:first').mouseleave(function () {
        for(let k = 0; k < buttons.length; k = k + 1) {
            const usingButton=buttons.eq(k);
            const tempText=usingButton.html();
            if(tempText.indexOf(' ')!==-1){
                usingButton.css(status1);
            }
            else {
                usingButton.css(status2);
            }
        }
    })
}