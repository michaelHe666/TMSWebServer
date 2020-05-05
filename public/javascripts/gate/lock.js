$(document).ready(
    function myClassDoor() {
        lockOptionsButton();
        lockFormLogin();
        lockFormRegister();
    }
);

function lockOptionsButton() {
    const lockOptions=$('.lock_options:first');
    const buttonLogin=$('.lock_options_button:first');
    const buttonRegister=$('.lock_options_button:last');
    const status1={backgroundColor:'#808080',color:'#ffffff'};
    const status2={backgroundColor:'#ffffff',color:'#808080'};
    let status=true;
    buttonLogin.mouseenter(function () {
            buttonLogin.animate(status1,100);
            buttonRegister.css(status2);
    });
    buttonRegister.mouseenter(function () {
        buttonRegister.animate(status1,100);
        buttonLogin.css(status2);
    });
    buttonLogin.mouseleave(function (){buttonLogin.stop(true)});
    buttonRegister.mouseleave(function (){buttonRegister.stop(true)});
    buttonLogin.click(function () {
        status=true;
        $('.lock_box_register').hide();
        $('.lock_box_login').css('display','flex');
    });
    buttonRegister.click(function () {
        status=false;
        $('.lock_box_login').hide();
        $('.lock_box_register').css('display','flex');
    });
    lockOptions.mouseleave(function () {
        if(status===true){
            buttonLogin.css(status1);
            buttonRegister.css(status2);
        }
        else{
            buttonRegister.css(status1);
            buttonLogin.css(status2);
        }
    })
}

function lockFormLogin() {
    const usernameInput=$('#login_username');
    const passwordInput=$('#login_password');
    const submit=$('#login_submit');
    submit.click(function () {
        const username=usernameInput.val();
        const password=passwordInput.val();
        if(!username){return alert('Error:username can not be empty!');}
        else if(username.length>20){return alert('Attention:username shall be [1,20] chars.');}
        if(!password){return alert('Error:password can not be empty!');}
        else if((password.length<8)||(password.length>20)){return alert('Attention:password shall be [8,20] chars.');}
        $.ajax({
            type:'post',
            url:'http://localhost:3000',
            dataType:'json',
            data:{ method:'login',username:username,password:password },
            success:function(feedback){
                const status=feedback.status;
                if(status==='success'){alert('Welcome!'+username);window.location.href='./mTown';}
                else if(status==='password'){alert('Sorry,password error!');}
                else if(status==='time out'){alert('Sorry,time out error,please refresh this page.');}
                else {alert('Sorry,username error!');}
            }
        })
    });
}

function  lockFormRegister() {
    const usernameInput=$('#register_username');
    const passwordInput=$('#register_password');
    const submit=$('#register_submit');
    // passwordInput.attr('placeholder','这里还有没学的');
    submit.click(function () {
        const username=usernameInput.val();
        const password=passwordInput.val();
        if(!username){return alert('Error:username can not be empty!');}
        else if(username.length>20){return alert('Attention:username shall be [1,20] chars.');}
        if(!password){return alert('Error:password can not be empty!');}
        else if((password.length<8)||(password.length>20)){return alert('Attention:password shall be [8,20] chars.');}
        $.ajax({
            type:'post',
            url:'http://localhost:3000',
            dataType:'json',
            data:{ method:'register',username:username,password:password },
            success:function(feedback){
                const status=feedback.status;
                if(status==='success'){alert('Welcome!'+username);window.location.href='./mTown';}
                else if(status==='time out'){alert('Sorry,time out error,please refresh this page.');}
                else {alert('Sorry,username exists!');}
            }
        })
    });
}