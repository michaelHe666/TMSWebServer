$(document).ready(function () {
    userInfoScroll();
});

function userInfoScroll() {
    $('.user_header_info>span>span').each(function () {
        $(this).bind('mousewheel',function () {
            let detail = event.wheelDelta || event.detail;
            let moveForwardStep = -1;
            let moveBackStep = 1;
            let step = 0;
            if(detail > 0){step = moveForwardStep * 10;}
            else{step = moveBackStep * 10;}
            this.scrollLeft = this.scrollLeft + step;
            event.preventDefault();
            return false;
        })
    });
}