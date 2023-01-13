(function ($) {
    $('.js-menu').click(() => {
        $('.js-menu-sub').animate({
            opacity: 'toggle',
        }, 500);
    });

    let isSoc = false;
    $('.js-social').click(() => {
        if(isSoc) {
            $('.js-soc').animate({
                right: "+="+-100+"%",
            }, 500);
        }
        else {
            $('.js-soc').animate({
                right: "-="+-100+"%",
            }, 500);
        }
        isSoc = !isSoc;
    });
    $(document).ready(function() {
        $('.portfolio').slick({
            centerMode: true,
            focusOnSelect: true,
            slidesToShow: 3,
            arrows: false,
            adaptiveHeight: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
})(jQuery);