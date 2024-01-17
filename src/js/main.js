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
    const $subTitlePortfolio = $('.portfolio-subtitle-js');

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

        let lastName = $(slick.$slides[currentSlide]).data('last-name');
        $subTitlePortfolio.text(lastName ? lastName : 'project');
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



    if(window.matchMedia('(min-width: 1200px)')) {
        const $as = $('.about-window-js');
        const $os = $('.offer-window-js');
        if($as.length > 0) {
            slidePage($as);
        }
        if($os.length > 0) {
            slidePage($os);
        }
    }

    function slidePage($selector) {
        let currentPage = 1;
        let stopWheel = 0;
        const $clue = $('.clue-vertical-js');

        $('.page-js').on('wheel', async function (e) {
                if (stopWheel) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    return false;
                }
                $clue.css('opacity', 0);

                if (e.originalEvent.deltaY < 0) {
                    $selector.each(function (i) {
                        if (currentPage === i + 1) {
                            $selector[i].style.right = '0';
                            $selector[i + 1].style.top = '200%';
                        }
                    });
                    --currentPage;
                } else {
                    $selector.each(function (i) {
                        if (currentPage === i + 1) {
                            $selector[i].style.right = '-100%';
                            $selector[i + 1].style.top = '50%';
                        }
                    });
                    ++currentPage;
                }

                if (currentPage < 1) {
                    $clue.css('opacity', 0.5);
                    $clue.find('span').html('SCROLL DOWN');
                    currentPage = 1;
                }
                if (currentPage > $selector.length - 1) {
                    currentPage = $selector.length - 1;
                    $clue.css('opacity', 0.5);
                    $clue.find('span').html('SCROLL UP');
                }

                stopWheel = 1;
                await new Promise(resolve => setTimeout(resolve, 500));
                stopWheel = 0;
            })

    }
})(jQuery);