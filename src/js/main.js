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

    const $portfolio = $('.portfolio');

    $(document).ready(function() {
        $portfolio.slick({
            centerMode: true,
            focusOnSelect: true,
            slidesToShow: 3,
            arrows: false,
            adaptiveHeight: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        // vertical: true,
                        // verticalScrolling: true,
                        // adaptiveHeight: true
                    }
                }
            ]
        });
    });

    const $titlePortfolio = $('.portfolio-title-js');

    $portfolio.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let slidesLength = slick.$slides.length - 1,
            isCurrentFirstOrLast = currentSlide === 0 || currentSlide === slidesLength,
            isNextFirstOrLast = nextSlide === 0 || nextSlide === slidesLength;

        if (isCurrentFirstOrLast && isNextFirstOrLast){
            let nextClone = $(event.currentTarget).find('.slick-cloned.slick-active');
            setTimeout(function(){
                nextClone.addClass('slick-current');
            }, 100)
        }

        $titlePortfolio.css({
            opacity: 0,
            top: '30px'
        });
        $('.portfolio-subtitle-js').css({
            opacity: 0,
            marginRight: '-80px'
        })
    });

    $portfolio.on('afterChange', function(event, slick, currentSlide){
        $titlePortfolio.css({
            opacity: 1,
            top: 0
        });
        $('.portfolio-subtitle-js').css({
            opacity: 1,
            marginRight: '-50px'
        })

        $titlePortfolio.text($(slick.$slides[currentSlide]).data('name'));
    });

    $portfolio.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));
})(jQuery);