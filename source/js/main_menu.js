'use strict';
(function() {


var bgMenu = $('.main_menu'),
		content = $('.content'),
		body_here = $('body');
    
$('.menu_header').on('click', onClickToggle);

function onClickToggle(e){
	// e.preventDefault();
  bgMenu.toggleClass('main_menu-active');
  content.toggleClass('content_show');

  body_here.toggleClass('pos_fixed');
}

$('.main_menu__item').mouseenter(function() {
        $(".main_menu__line", this).toggleClass('main_menu__line-opas');
    });

$('.main_menu__item').mouseleave(function() {
        $(".main_menu__line", this).toggleClass('main_menu__line-opas');
    });

})();