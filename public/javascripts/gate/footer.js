$(document).ready(function () {
    footerButtons();
});

function footerButtons() {
    const footer=$('.footer:first');
    const minmizeButton=$('.footer>span:nth-child(2)>span:nth-child(1):first');
    const hideButton=$('.footer>span:nth-child(2)>span:nth-child(2):first');
    const maximunButton=$('.footer>span:nth-child(3):first');
    minmizeButton.click(function () {
        footer.children('span:first').css({width: '0'});
        footer.css({minWidth:'0'});
        footer.animate({width:'10rem'},1000,'swing',function () {
            footer.children('span:nth-child(2):first').css({display: 'none'});
            footer.children('span:nth-child(3):first').css({display: 'block'});
            footer.css({paddingLeft:'0',paddingRight:'0'});
        });
    });
    hideButton.click(function () {
        footer.css({display:'none'});
    });
    maximunButton.click(function () {
        const temp=0.5*$(window).width();
        footer.css({paddingLeft:'5rem',paddingRight:'5rem'});
        footer.children('span:nth-child(3):first').css({display: 'none'});
        footer.children('span:nth-child(2):first').css({display: 'flex'});
        footer.animate({width:Math.max(480,temp).toString()+'px'},1000,'swing',function () {
            footer.css({minWidth:'480px',width:'50%'});
            footer.children('span:first').css({width: 'auto'});
        });
    });
}