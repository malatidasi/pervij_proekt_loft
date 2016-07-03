$(document).ready(function () {

	$(function (){
		var imgs = [];

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
			});

		}

		var dashof = 96;

		function setPersents(total, current) {
			var percent_before = Math.cell((current-1) / total * 100);
			var percent = Math.cell(current / total * 100);

			if (percent >= 100) {
				$('.wraper').css('display', 'block');
			} 
			else 
			{
				for (var i = percent_before; i <= percent; i++) {
					
					for (var q = 1; q <= 5; q++) {
						$('.preloadSvg_line').css({
							'stroke-dashoffset' : dashof-q
						});
					dashof=-5;
					}
					
					$('.preloadSvg_text').text(percent);				

				}
			}
		}

	});

	$(function () {
		
	});

});