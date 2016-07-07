$('.login__boxCheckbox').click(function() {
    $(".login__checkbox", this).toggleClass('login__checkbox-checked');
});




$('#RadioOne').click(function() {

	$(".login__radio", this).toggleClass('login__checkbox-checked');
    $('#RadioOne').find('.login__checkboxText').toggleClass('login__radioCheckedText');
    $("#RadioTwo").find('.login__radio').removeClass('login__checkbox-checked');
    $("#RadioTwo").find('.login__checkboxText').removeClass('login__radioCheckedText');

 });


$('#RadioTwo').click(function() {

	$(".login__radio", this).toggleClass('login__checkbox-checked');
    $('#RadioTwo').find('.login__checkboxText').toggleClass('login__radioCheckedText');
    $("#RadioOne").find('.login__radio').removeClass('login__checkbox-checked');
    $("#RadioOne").find('.login__checkboxText').removeClass('login__radioCheckedText');

 });

$('.button_sign').click(function() {

    $(".login__radio", this).toggleClass('login__checkbox-checked');
    $('#RadioTwo').find('.login__checkboxText').toggleClass('login__radioCheckedText');
    $("#RadioOne").find('.login__radio').removeClass('login__checkbox-checked');
    $("#RadioOne").find('.login__checkboxText').removeClass('login__radioCheckedText');

 });