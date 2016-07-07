'use strict';
(function() {

	$(window).scroll(function() {
		var wScroll = $(window).scrollTop();

		(function(){

			var
				bg = $('.header__bg'),
				sectionText = $('.about-com__portfolio_svg'),
				user = $('.about_com__user');

				slideIt(bg, wScroll / 45);
				slideIt(sectionText, wScroll / 20);
				slideIt(user, wScroll / 3);
				


			function slideIt(block, strafeAmount) {
				var strafe = -strafeAmount,
					transformString = 'translate3d(0,' + strafe + '%,0)';

					if (block == sectionText) {
						strafe = -50-strafeAmount;
						transformString = 'translate3d(-50%,' + strafe + '%,0)';}
				block.css({
					'transform': transformString
				});
			}


		}());


	}); // -> scroll_end


})();