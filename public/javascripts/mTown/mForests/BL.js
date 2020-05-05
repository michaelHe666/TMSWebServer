$(document).ready(function () {
    BL();
});

function BL() {
    const height=window.innerHeight;
    const width=window.innerWidth;
    $('body').css({width:width.toString()+'px',height:height.toString()+'px'});
}