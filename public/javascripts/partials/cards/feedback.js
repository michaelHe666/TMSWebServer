$(document).ready(function () {
    const title=$('.feedback_title>span:first');
    const boxDefault=$('.feedback_box_default:first');
    const boxSetting=$('.feedback_box_settings:first');
    const minimizeButton=$('.feedback_box_settings>span:first');
    const hideButton=$('.feedback_box_settings>span:nth-child(2)');

    //Here are functions about title
    let countTitle=0;
    let countClick=0;
    title.mouseenter(function () {
        if(countTitle===1){
            title.html('');
            title.html('Feedback');
            countTitle=0;
        }
        else {
            title.html('');
            title.html('Settings');
            countTitle=1;
        }
    });
    title.click(function () {
        countClick=1;
        if(countTitle===0){
            boxDefault.css('display','flex');
            boxSetting.css('display','none');
        }
        else {
            boxDefault.css('display','none');
            boxSetting.css('display','flex');
        }
    });
    title.mouseleave(function () {
        if(countClick===0){
            if(countTitle===1){
                title.html('');
                title.html('Feedback');
                countTitle=0;
            }
            else {
                title.html('');
                title.html('Settings');
                countTitle=1;
            }
        }
        else {
            countClick=0;
        }
    });

    //Here are functions about setting box
    //hover animation is defined in CSS files
    minimizeButton.click(function () {
        let feedback=$('.feedback:first');
        feedback.css('height','90px');
        boxDefault.css('display','none');
        boxSetting.css('display','none');
        title.html('');
        title.html('Feedback');
        countTitle=0;
    });
    hideButton.click(function () {
        let feedback=$('.feedback:first');
        feedback.css('display','none');
    })
});