'use strict';
(function(){

$(document).ready(function () {

	$(function (){
		var imgs = [],
			sInter;


		$('*').each(function () {
			var $this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');

			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');
				
				imgs.push(path);

			}

		
			if (img) {
				var path = $this.attr('src');

				if (path) {
					imgs.push(path);
				}
			}
		});

		
			console.log(imgs);


		var percents = 1;

		for (var i=0; i<imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function() {
				setPercents(imgs.length, percents);
				percents ++;
				clearInterval(sInter);
			});

		}


		function animatePerscent (percent_before, percent) {
			// percent_before++;
			console.log (percent_before);
			if (percent_before <= percent) {
		       $('.preloadSvg_text').text(percent_before);}
		     }

		function setPercents(total, current) {
			var percent_before = Math.ceil((current-1) / total * 100);
			var percent = Math.ceil(current / total * 100);
				

				console.log ( "percent_before = ", percent_before);
				console.log("percent = ", percent);
			
			for (var i = 0; i <= percent-percent_before; i++) {
					
					console.log("i v zikle = ", i);
					clearInterval(sInter);
					console.log (percent_before);
					setInterval( animatePerscent (percent_before+i, percent), 1000);
							
			}

				if (percent === 100) {
				$('.wrapper, footer, .wrapper_com').css('display', 'block');
				$('.preloader').css('display', 'none');
				console.log("proveryaem");
			} 
			
		}

	});


});

})();


