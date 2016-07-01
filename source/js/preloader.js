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

		var percents = 1;

		for (var i=0; i<imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function () {
				setPercents(imgs.length, percents);
				percents ++;
			});

		}

		function setPersents(total, current) {
			var percent = Math.cell(current / total * 100);

			if (percent >= 100) {
				$('.wrap').css('display', 'block');
			}


			$('.loader-bar').css({
				'width' : percent + '%'
			}).text(percent + '%');

		};

	});



});