  var numimg = 0;
    var qr;
    var cssUrlRegex = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
    var images = new Array();
    var cssImageProps = [
        'background',
        'backgroundImage',
        'backgroundImage',
        'borderImage',
        'borderCornerImage',
        'listStyleImage',
        'cursor'
    ];


    function load(url) {
        return new Promise(function (resolve, reject) {
            var newimg = new Image();
            newimg.src = url;
            newimg.onload = function () {
                resolve();
            };
            newimg.onerror = function () {
                reject();
            };
        });
    };
    function getimg(url) {
        load(url).then(
            function () {
                timer();
            },
            function () {
                timer();
            }
        );
    };
    function repeatimg(url) {
        if ($.inArray(url, images) == -1) {
            getimg(url);
            images.push(url);
        };
    };

    $("*").each(function (i, e) {

        if ($(e).is('img') && $(e).attr("src")) {
            repeatimg($(e).attr("src"));
        };

        $.each(cssImageProps, function (i, property) {
            var propertyValue = $(e).css(property);
            var match;
            if (!propertyValue) {
                return true;
            }

            match = cssUrlRegex.exec(propertyValue);
            if (match) {
                repeatimg(match[2]);
            }
        });
    });
    function numAnimate(toNum,fromNum) {
        clearInterval(qr);
        qr = setInterval(function () {
            fromNum++;
            if (fromNum <= toNum) {
                $('.loader__text').text(fromNum);
            };
        }, 1);
    };
    function timer(){
        var persent;
        numimg = numimg + 1;
        persent = numimg * 70 / images.length;
        persent = persent + 30;
        persent = (persent-persent%1);
        var fromNum = $('.loader__text').text();

        if (numimg == 1 ){
            fromNum = 0;
        };
        if (persent == 100 ){
            clearInterval(qr);
            $('.loader__text').text('100');
            closepreloader();
        } else {
            numAnimate(persent,fromNum);
        };
    };
    function closepreloader() {
        $('.loader').delay(500).fadeOut();
        $('.b-portfolio_flipJS').delay(500).queue(function() {
            $(this).addClass('b-portfolio_flipin');

            $('.b-portfolio').delay(1500).queue(function() {
                $('.b-portfolio').removeClass('b-portfolio_flipin');
            });
        });

        $('body').removeClass('i-overflow_hidden');
    };

