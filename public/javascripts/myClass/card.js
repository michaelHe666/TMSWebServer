$(document).ready(function () {
    cardTitleAnimation();
    cardOptionsAnimation();
});

//this defines title animation to settings
function cardTitleAnimation(){
    const title=$('.myClass_card_title>span');
    for(let i=0;i<title.length;i=i+1){
        const usingTitle=title.eq(i);
        const temp=usingTitle.html();
        usingTitle.parent().mouseenter(function(){
            if((usingTitle.html()!=='Settings')&&(usingTitle.html()!=='Settings ')){
                    usingTitle.html('Settings');
            }
            else {
                    usingTitle.html(temp);
            }
        });
        usingTitle.parent().click(function () {
            if((usingTitle.html()!==temp+' ')&&(usingTitle.html()!=='Settings ')){
                const foo=usingTitle.html();
                usingTitle.html(foo+' ');
            }
        });
        usingTitle.parent().mouseleave(function () {
            if((usingTitle.html()!==temp+' ')&&(usingTitle.html()!=='Settings ')){
                if(usingTitle.html()!=='Settings'){
                    usingTitle.html('Settings');
                }
                else {
                    usingTitle.html(temp);
                }
            }
        })
    }
}

//this defines options animation on style switching as mouse move
//and defines initializing method
function cardOptionsAnimation() {
    const options=$('.myClass_card_options');
    for(let i=0;i<options.length;i=i+1){
        const usingOptions=options.eq(i);
        const optionsButton=usingOptions.children('.universe_card_options_button');

        //initialize width for option buttons
        let maxWidth=0;
        for (let k = 0; k < optionsButton.length; k = k + 1) {maxWidth=Math.max(parseInt(optionsButton.eq(k).css('width')),maxWidth);}
        const tempRatio=maxWidth/(parseFloat(optionsButton.eq(0).css('fontSize')))+1;
        for (let k = 0; k < optionsButton.length; k = k + 1) {optionsButton.eq(k).css({width:tempRatio.toString()+'em'});}

        const tempColor=optionsButton.eq(0).css('backgroundColor');
        const status1={backgroundColor:tempColor,color:'#ffffff'};
        const status2={backgroundColor:'#ffffff',color:tempColor};
        //initializing method
        for (let k = 0; k < optionsButton.length; k = k + 1) {
            if (k === 0) {
                optionsButton.eq(k).css(status1);
                optionsButton.eq(k).html(' '+optionsButton.eq(k).html()+' ');
            }
            else {optionsButton.eq(k).css(status2);}
        }
        //style switching method
        for (let k = 0; k < optionsButton.length; k = k + 1) {
            const  usingOptionsButton=optionsButton.eq(k);
            usingOptionsButton.mouseenter(function () {
                usingOptionsButton.animate(status1,100);
                for (let p = 0; p < optionsButton.length; p = p + 1) {
                    if(p!==k){
                        optionsButton.eq(p).css(status2)
                    }
                }
            });
            usingOptionsButton.click(function () {
                const tempText=usingOptionsButton.html();
                usingOptionsButton.html(' '+tempText+' ');
                for (let p = 0; p < optionsButton.length; p = p + 1) {
                    if(p!==k){
                        optionsButton.eq(p).html($.trim(optionsButton.eq(p).html()));
                    }
                }
            });
            usingOptionsButton.mouseleave(function (){usingOptionsButton.stop(true)});
        }
        usingOptions.mouseleave(function () {
            for(let k = 0; k < optionsButton.length; k = k + 1) {
                const usingOptionsButton=optionsButton.eq(k);
                const tempText=usingOptionsButton.html();
                if(tempText.indexOf(' ')!==-1){
                    usingOptionsButton.css(status1);
                }
                else {
                    usingOptionsButton.css(status2);
                }
            }
        })
    }
}