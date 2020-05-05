$(document).ready(function () {
    messagesTitleAnimation();
    messagesOptionsAnimation();
    }
);

function messagesTitleAnimation() {
    const title=$('.messages_title>span:first');
    let countTitle=true;//true foe interaction,false for settings
    title.mouseenter(function () {
        if(countTitle){
            title.html('');
            title.html('Settings');
            countTitle=!countTitle;
        }
        else {
            title.html('');
            title.html('Messages');
            countTitle=!countTitle;
        }
    });
    title.click(function () {
        if(countTitle){
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
}

function messagesOptionsAnimation() {
    const messageButtonSystem=$('.messages_options_button:first');
    const messageButtonPrivate=$('.messages_options_button:nth-child(2)');
    const boxPrivate=$('.messages_box_private:first');
    const boxSystem=$('.messages_box_system:first');
    let count1=true;
    let count2=false;

    messageButtonSystem.click(function () {
        messageButtonSystem.animate({
            color: '#ffffff',
            backgroundColor: '#cdbfaa'
        });
        messageButtonPrivate.animate({
            color: '#cdbfaa',
            backgroundColor: '#ffffff'
        });
        boxSystem.css('display','flex');
        boxPrivate.css('display','none');

        const temp=new XMLHttpRequest();
        temp.onreadystatechange = function(){
            if (temp.readyState===4){
                if(temp.status===200){
                    console.log(temp.responseText);
                }
                else {
                    console.error(temp.statusText);
                }
            }
        };

        temp.onerror = function (e) {
            console.error(temp.statusText);
        };

        temp.open('GET', '/test', true);
        temp.send(null);
        count1=!count1;
        count2=!count2;
    });
    messageButtonSystem.mouseenter(function () {
        if(!count1){
            messageButtonSystem.animate({
                color: '#ffffff',
                backgroundColor: '#cdbfaa'
            },100);
            messageButtonPrivate.animate({
                color: '#cdbfaa',
                backgroundColor: '#ffffff'
            },100);
        }
    });
    messageButtonSystem.mouseleave(function () {
       if(!count1) {
           messageButtonPrivate.animate({
               color: '#ffffff',
               backgroundColor: '#cdbfaa'
           },100);
           messageButtonSystem.animate({
               color: '#cdbfaa',
               backgroundColor: '#ffffff'
           },100);
       }
    });
    messageButtonPrivate.click(function () {
        messageButtonPrivate.animate({
            color: '#ffffff',
            backgroundColor: '#cdbfaa'
        });
        messageButtonSystem.animate({
            color: '#cdbfaa',
            backgroundColor: '#ffffff'
        });
        boxPrivate.css('display','flex');
        boxSystem.css('display','none');
        count1=!count1;
        count2=!count2;
    });
    messageButtonPrivate.mouseenter(function () {
        if(!count2){
            messageButtonPrivate.animate({
                color: '#ffffff',
                backgroundColor: '#cdbfaa'
            },100);
            messageButtonSystem.animate({
                color: '#cdbfaa',
                backgroundColor: '#ffffff'
            },100);
        }
    });
    messageButtonPrivate.mouseleave(function () {
        if(!count2) {
            messageButtonSystem.animate({
                color: '#ffffff',
                backgroundColor: '#cdbfaa'
            },100);
            messageButtonPrivate.animate({
                color: '#cdbfaa',
                backgroundColor: '#ffffff'
            },100);
        }
    });
}