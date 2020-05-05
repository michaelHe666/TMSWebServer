$(document).ready(function () {
    lockAndKeyMethods()
    lockAndKeyButtons();
});

function lockAndKeyMethods() {
    $('.lockAndKey>div>span').each(function () {
        $(this).bind('click',function () {
            if($(this).css('backgroundColor')==='rgb(229, 228, 198)'){
                $(this).css({backgroundColor:'#cbca9d'});
            }
            else {
                $(this).css({backgroundColor:'#e5e4c6'});
            }
        })
    })
}

function lockAndKeyButtons() {
    $('.ppx>span:nth-child(1):first').click(function () {
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(1):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k=2;
            for(let i=0;i<temp.length;i=i+1){
                temp[i]=String.fromCharCode(((temp[i].charCodeAt()+k)-97)%26+97);
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(2):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k=new Array();
            k[0]=[17,17];
            k[1]=[21,18];
            for(let i=0;i<temp.length;i=i+1){
                temp[i]=String.fromCharCode(temp[i].charCodeAt());
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(3):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k='abcdefghijklmnopqrstuvwxyz'.split('');
            let k1='dklmnopvwxqrefgzahijstuybc'.split('');
            for(let i=0;i<temp.length;i=i+1){
                for(let i1=0;i1<k.length;i1=i1+1){
                    if (temp[i]===k[i1]) {
                        temp[i]=k1[i1];
                    }
                    continue;
                }
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(4):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k='abcdefghijklmnopqrstuvwxyz'.split('');
            let k1='abcdefghijklmnopqrstuvwxyz'.split('');
            for(let i=0;i<temp.length;i=i+1){
                for(let i1=0;i1<k.length;i1=i1+1){
                    if (temp[i]===k[i1]) {
                        temp[i]=k1[i1];
                    }
                    continue;
                }
            }
            console.log(temp.join(''));
        }
    });
    $('.ppx>span:nth-child(2):first').click(function () {
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(1):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k=2;
            for(let i=0;i<temp.length;i=i+1){
                temp[i]=String.fromCharCode(((temp[i].charCodeAt()-k)+26-97)%26+97);
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(2):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k=new Array();
            k[0]=[17,17];
            k[1]=[21,18];
            for(let i=0;i<temp.length;i=i+1){
                temp[i]=String.fromCharCode(temp[i].charCodeAt());
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(3):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k='dklmnopvwxqrefgzahijstuybc'.split('');
            let k1='abcdefghijklmnopqrstuvwxyz'.split('');
            for(let i=0;i<temp.length;i=i+1){
                for(let i1=0;i1<k.length;i1=i1+1){
                    if (temp[i]===k[i1]) {
                        temp[i]=k1[i1];
                    }
                    continue;
                }
            }
            console.log(temp.join(''));
        }
        if($('.lockAndKey>div:nth-child(1)>span:nth-child(4):first').css('backgroundColor')!=='rgb(229, 228, 198)'){
            const temp=$('.lockAndKey>input:nth-child(3):first').val().split('');
            let k='abcdefghijklmnopqrstuvwxyz'.split('');
            let k1='abcdefghijklmnopqrstuvwxyz'.split('');
            for(let i=0;i<temp.length;i=i+1){
                for(let i1=0;i1<k.length;i1=i1+1){
                    if (temp[i]===k[i1]) {
                        temp[i]=k1[i1];
                    }
                    continue;
                }
            }
            console.log(temp.join(''));
        }
    });

    // next comes exam2 codes
    $('.calculator>div:nth-child(1)>input:first').click(function () {
        let modInput=$('.calculator>div:nth-child(1)>input:first').val().split('*');
        // let mutiplyInput=$('.calculator>div:nth-child(2)>input').val();

        let rem=modInput[modInput.length].split('/');

        modInput[modInput.length]=rem[0];

        let result=1;

        for(let i=0;i<modInput.length;i=i+1){
            result=result*modInput[i]%rem[1];
        }

        console.log(result%rem[1]);
    })

    $('.calculator>div:nth-child(2)>input:first').click(function () {
        // let modInput=$('.calculator>div:nth-child(1)>input:first').val().split('*');
        let mutiplyInput=$('.calculator>div:nth-child(2)>input:first').val();

        console.log(mutiplyInput);

        for(let i=0;i<mutiplyInput;i=i+1){
           for (let k = 0; k < mutiplyInput; k = k + 1) {
               if (i * k % mutiplyInput === 1){
                   console.log(i+"和"+k+"是一组乘法逆元");
               }
           }
        }
    })
}