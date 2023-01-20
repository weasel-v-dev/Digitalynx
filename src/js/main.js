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

    $portfolio.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.glass-visible-js').css({
            opacity: 0
        });

        $('.clue-js').css({
            opacity: 0
        })

        $titlePortfolio.css({
            opacity: 0,
            top: '30px'
        });

        $('.portfolio-subtitle-js').css({
            opacity: 0,
            marginRight: '-80px'
        });

        $portfolio.next(nextSlide);
    });

    $portfolio.on('afterChange', function(event, slick, currentSlide){
        $titlePortfolio.css({
            opacity: 1,
            top: 0
        });

        $('.slick-center .glass-visible-js').css({
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
            console.log($(this).closest('.portfolio-item-js').data('image'));
            $('.portfolio-modal-page-js').html(`<img src="${$(this).closest('.portfolio-item-js').data('image')}" alt="">`);
        });
    });

    let currentPage = 1;
    let stopWheel = 0;
    const $aboutWindow = $('.about-window-js');
    $('.about-js').on('wheel touchmove', async function(e) {
        console.log(stopWheel);
        if(stopWheel) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        }
        if (e.originalEvent.deltaY < 0) {
            if(currentPage === 1) {
                $aboutWindow[0].style.right = '0';
                $aboutWindow[1].style.top = '200%';
            }
            else if (currentPage === 2) {
                $aboutWindow[1].style.right = '0';
                $aboutWindow[2].style.top = '200%';
            }
            --currentPage;
        }
        else {
            if(currentPage === 1) {
                if(window.matchMedia('(min-width: 1200px)')) {
                    $aboutWindow[0].style.right = '-100%';
                    $aboutWindow[1].style.top = '50%';
                }
                else {
                    $aboutWindow[0].style.top = '-200%';
                }
            }
            else if (currentPage === 2) {
                if(window.matchMedia('(min-width: 1200px)')) {
                    $aboutWindow[1].style.right = '-100%';
                    $aboutWindow[2].style.top = '50%';
                }
                else {
                    $aboutWindow[0].style.top = '-200%';
                }
            }
            ++currentPage;
        }
        if(currentPage < 1) {
            currentPage = 1;
        }
        if(currentPage > 2){
            currentPage = 2;
        }

        stopWheel = 1;
        await delay(500);
        stopWheel = 0;
    });

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
})(jQuery);