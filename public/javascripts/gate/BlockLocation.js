$(document).ready(function blockLocation() {
    BL();
});

let gateBLSwitch = false;
$(window).resize(function blockLocation() {
    if (gateBLSwitch === false) {
        gateBLSwitch = true;
        BL();
    }
});

function BL() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const rem = parseFloat(Math.max(8, (height / 100 + 1)).toFixed(2));
    const html = $('html:first');
    const body = $('body:first');
    if (html.css('fontSize') !== rem.toString() + 'px') {
        html.css({fontSize: rem.toString() + 'px'});
    }
    body.css({width: width.toString() + 'px', height: height.toString() + 'px'});
    gateBLSwitch = false;
}
