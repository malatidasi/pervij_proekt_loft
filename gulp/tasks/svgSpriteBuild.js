'use strict';

module.exports = function() {
  $.gulp.task('svgSpriteBuild', function () {
	return $.gulp.src('./source/images/svg/**/*.*')
	// minify svg
		.pipe($.gp.svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe($.gp.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe($.gp.replace('&gt;', '>'))
		// build svg sprite
		.pipe($.gp.svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					render: {
						css: false
					}
				}
			}
		}))
		.pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
});
};


