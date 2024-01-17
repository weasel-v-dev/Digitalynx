<?php
session_start();
if(empty($_SESSION['lang'])) $_SESSION['lang'] = 'en';
function __($langRu = '', $langEn = '') {
    if($_SESSION['lang'] == 'en') {
         return $langEn;
    }
    return $langRu;
}
?>
<!doctype html>
<html lang="<?= $_SESSION['lang'] ?>">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="index,follow">
    <title>Создание сайтов любой сложности | Digital Lynx Веб-студия</title>
    <meta name="description" content="Студия веб-дизайна и разработки, создает креативные веб-сайты и разрабатывает потрясающие мобильные и веб-приложения. Приведите друга и получите скидку 25% на любую услугу.">
    <meta name="keywords" content="Веб-сайт, Веб-студія, Веб-агенция, digital агенция, web-lynx, lynx студия, lynx digital, Lynx студия, Lynx агенция, Lynx компания, landing page, e-commerce, digital студия, Lynx agency, Lynx company, онлайн-сервисы, digital, lynx, digitallynx">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="og:locale" content="<?= __('ru_RU', 'en_US')?>">
    <meta property="og:site_name" content="DigitaLynx — цифровизация Вашего бизнеса">
    <meta property="og:url" content="https://digitalynx.org">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Создание сайтов любой сложности | Digital Lynx Веб-студия">
    <meta property="og:description" content="Студия веб-дизайна и разработки, создает креативные веб-сайты и разрабатывает потрясающие мобильные и веб-приложения. Приведите друга и получите скидку 25% на любую услугу.">
    <link type="Image/x-icon" href="/assets/img/favicon.ico" rel="icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VLMT5TY2K6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VLMT5TY2K6');
    </script>
    <script>
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(92093615, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
        });
    </script>
    <!-- /Yandex.Metrika counter -->
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
<canvas class="live-color"></canvas>
<div class="container-fluid">
    <header class="d-flex align-items-center justify-content-between mx-xl-3 me-xl-3 position-relative" style="z-index: 1;">
        <a href="/" title="Digital Lynx">
            <img src="/assets/img/logo.png" class="logo" alt="digital lynx">
        </a>
        <div>
            <div>
                <?php
                if(!empty(htmlspecialchars($_POST['lang']))){
                    $lang = htmlspecialchars($_POST['lang']);
                    if($lang == 'en') {
                        $_SESSION['lang'] = 'ru';
                    }
                    else if($lang == 'ru') {
                        $_SESSION['lang'] = 'en';
                    }
                }
                ?>
                <form method="POST" action="">
                    <button type="submit" class="lang transparent-btn" name="lang" value="<?= $_SESSION['lang'] ?>"><?= $_SESSION['lang'] ?></button>
                </form>
            </div>
            <nav>
                <ul class="d-flex align-items-center layer menu">
                    <li>
                        <a class="a" href="/portfolio"><img src="/assets/img/portfolio.svg" alt="portfolio" class="d-md-none"><span><?= __('Портфолио', 'Portfolio') ?></span></a>
                    </li>
                    <li>
                        <a class="a" href="/contacts"><img src="/assets/img/contacts.svg" alt="contacts" class="d-md-none"><span><?= __('Контакты', 'Contacts') ?></span></a>
                    </li>
<!--                    <li class="d-md-none">-->
<!--                        <a class="js-menu transparent-btn">-->
<!--                            <img src="/assets/img/menu.svg" alt="about"><span>Меню</span>-->
<!--                        </a>-->
<!--                        <ul class="layer menu-sub js-menu-sub">-->
<!--                            <li>-->
<!--                                <a href="/about.php"><img src="/assets/img/about.svg" alt="about"><span>О нас</span></a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a href="#"><img src="/assets/img/blog.svg" alt="about"><span>Блог</span></a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->
                    <li>
                        <a class="a" href="/offer"><img src="/assets/img/product.svg" alt="services" class="d-md-none main-img"><span><?= __('Услуги', 'Services') ?></span></a>
                    </li>
                    <li>
                        <a class="a" href="/about"><img src="/assets/img/about.svg" alt="about" class="d-md-none"><span><?= __('О нас', 'About us') ?></span></a>
                    </li>
                    <li class="d-md-none">
                        <span class="a js-social"><img src="/assets/img/social.svg" alt="social" class="d-md-none"><span><?= __('Мы в сети', 'Socials') ?></span></span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</div>
