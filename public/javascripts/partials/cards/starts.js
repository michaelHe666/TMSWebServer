$(document).ready(function toDo() {
   startsOptions();
   startsButtons();//hover animation on buttons in boxes are defined in css files
});

function startsOptions() {
    const buttonStudy=$('.starts_options_button:first');
    const buttonCreate=$('.starts_options_button:last');
    buttonStudy.click(function () {
        $('.starts_box_create:first').hide();
        $('.starts_box_study:first').css('display','flex');
    });
    buttonCreate.click(function () {
        $('.starts_box_study:first').hide();
        $('.starts_box_create:first').css('display','flex');
    });
}

function startsButtons() {
    const buttonOne=$('.starts_box_create>span:first');
    const buttonTwo=$('.starts_box_create>span:nth-child(2)');
    const buttonThree=$('.starts_box_create>span:last');
    buttonOne.click(function () {
        // window.open('')
    })
}