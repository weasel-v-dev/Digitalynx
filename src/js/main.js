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
                    breakpoint: 490,
                    settings: {
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

        $('.glass-visible-js').css({
            opacity: 0
        });

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
        $('.glass-visible-js').css({
            opacity: 1
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

    $('.slider-nav .slick-slide').on('click', function (event) {
        $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
    });

    $('.portfolio-modal-shadow-js').click(function () {
        $('.portfolio-modal-js').css({
            opacity: 0,
            pointerEvents: 'none'
        })
    });

    $('.portfolio-item-js').each(function () {
        $(this).find('.glass-visible-js').click(function () {
            $('.portfolio-modal-js').css({
                opacity: 1,
                pointerEvents: 'auto'
            });
            $('.portfolio-modal-page-js').append(`<img src="${$(this).data('link')}" alt=""/>`);
        });
    });
})(jQuery);