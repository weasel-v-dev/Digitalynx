<?php include 'sections/header.php' ?>
<main class="about page-js">
    <div class="clue clue--vertical clue-vertical-js">
        <span>SCROLL DOWN</span>&nbsp;&nbsp;
        <img src="/assets/img/mouse.svg" alt="icon">
    </div>
    <div class="glass-wrap d-flex flex-column">
        <div class="container-fluid">
            <h1 class="title-bread">О нас</h1>
        </div>
        <div class="glass about__shadow"></div>
        <div class="d-flex justify-content-center glass-wrap about__window about__window--1 about-window-js">
            <div class="glass">
                <h2 class="about__title title-mega">
                    <span class="black">Lynx</span><span class="white">foundation</span>
                </h2>
                <p class="mb-4">
                    <?= __('Команда молодых, креативных людей. Создаем IT-решения и помогаем
                    цифровизировать любую вашу идею. Среди проектов автоматизация
                    бизнес-процессов, онлайн-сервисы и сайты, внедрение digital-инструментов
                    для продаж и маркетинга.', 'A team of young, creative people. We create IT solutions and help
                    digitalized any of your ideas. Automation is among the projects
                    business processes, online services and websites, implementation of digital tools
                    for sales and marketing.') ?>
                </p>
                <p>
                    <?= __('Наши основные принципы — гибкость мышления, осознанность,
                    прозрачность, скорость и качество работы, высокий клиентский сервис
                    и нацеленность на результат. Работаем с людьми и для людей.', 'Our main principles are flexibility of thinking, awareness,
                    transparency, speed and quality of work, high customer service
                    and focus on results. We work with people and for people.') ?>
                </p>
            </div>
        </div>
        <div class=" d-flex justify-content-center glass-wrap about__window about__window--2 about-window-js">
            <div class="glass step">
                <h2 class="about__title title-mega">
                    <span class="black step__black"><?= __('Этапы', 'Stages') ?></span>
                    <span class="white step__white" ><?= __('работы', 'of work') ?></span>
                </h2>
                <div class="d-lg-flex">
                    <div class="step__dividers pe-lg-4 pb-4">
                        <h3 class="step__title">
                            <?= __('Входные данные', 'Input data') ?>
                        </h3>
                        <div class="d-flex">
                            <div class="step__number">1</div>
                            <p class="step__desc">
                                <?= __('Вы объясняете, что бы
                                хотели увидеть в результате','You explain that
                                we wanted to see the result') ?>
                            </p>
                        </div>
                    </div>
                    <div class="ps-lg-4 pb-lg-4">
                        <h3 class="step__title step__title--divider">
                            <?= __('Подготовка','Preparation') ?>
                        </h3>
                        <div class="d-flex">
                            <div class="step__number">2</div>
                            <p class="step__desc">
                                <?= __('Мы показываем вам
                                наши предложения на
                                основе ваших пожеланий','We show you
                                our suggestions based on your wishes') ?>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="d-lg-flex">
                    <div class="pe-lg-4 pt-4">
                        <h3 class="step__title  step__title--divider">
                            <?= __('Реализация','Realization') ?>
                        </h3>
                        <div class="d-flex">
                            <div class="step__number">3</div>
                            <p class="step__desc">
                                <?= __('Вносим ваши коррективы,
                                оговариваем сроки и
                                приступаем к выполнению','We make your adjustments,
                                we stipulate the terms and
                                getting started') ?>
                            </p>
                        </div>
                    </div>
                    <div class="ps-lg-4 pt-4">
                        <h3 class="step__title  step__title--divider">
                            <?= __('Достижение результата','Achieving the result') ?>
                        </h3>
                        <div class="d-flex">
                            <div class="step__number">4</div>
                            <p class="step__desc">
                                <?= __('Показываем вам
                                промежуточные результаты
                                для коррекции. Отдаём вам
                                готовый продукт','We show you
                                interim results
                                for correction. We give you
                                finished product') ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" d-flex justify-content-center glass-wrap about__window about__window--3 about-window-js">
            <div class="glass glass--big step technology">
                <h2 class="about__title title-mega">
                    <span class="black step__black"><?= __('Наши','Our') ?></span><span class="white step__white"><?= __('технологии','technologies') ?></span>
                </h2>
                <h3 class="step__title technology__divider technology__divider--1 pt-4 pt-xl-0"><?= __('Клиентская часть','The client part') ?></h3>
                <div class="d-flex flex-wrap justify-content-between justify-content-md-start technology__category">
                    <figure>
                        <img src="/assets/img/vue.svg" alt="Vue.js">
                        <figcaption>Vue.js</figcaption>
                    </figure>
                    <figure>
                        <img src=/assets/img/ang.svg alt="Angular">
                        <figcaption>Angular</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/rjs.svg" alt="React.js">
                        <figcaption>React.js</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/tjs.svg" alt="TypeScript">
                        <figcaption>TypeScript</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/js.svg" alt="JavaScript">
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/jq.svg" alt="jQuery">
                        <figcaption>jQuery</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/boot.svg" alt="Bootstrap">
                        <figcaption>Bootstrap</figcaption>
                    </figure>
                </div>
                <h3 class="step__title technology__divider technology__divider--2 pt-4 pt-xl-0"><?= __('Серверная часть','Server part') ?></h3>
                <div class="d-flex flex-wrap justify-content-between justify-content-md-start technology__category">
                    <figure>
                        <img src="/assets/img/php.svg" alt="PHP">
                        <figcaption>PHP</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/laravel.svg" alt="Laravel">
                        <figcaption>Laravel</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/njs.svg" alt="Node.js">
                        <figcaption>Node.js</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/mysql.svg" alt="MySQL">
                        <figcaption>MySQL</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/w.svg" alt="Wordpress">
                        <figcaption>Wordpress</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/yii.svg" alt="Yii">
                        <figcaption>Yii1, Yii2</figcaption>
                    </figure>
                </div>
                <h3 class="step__title technology__divider technology__divider--3 pt-4 pt-xl-0"><?= __('Дизайн интерфейсов','Interface design') ?></h3>
                <div class="d-flex flex-wrap justify-content-between justify-content-md-start technology__category">
                    <figure>
                        <img src="/assets/img/ill.svg" alt="Illustrator">
                        <figcaption>Illustrator</figcaption>
                    </figure>
                    <figure>
                        <img src=/assets/img/pt.svg alt="Photoshop">
                        <figcaption>Photoshop</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/xd.svg" alt="XD">
                        <figcaption>XD</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/img/fg.svg" alt="Figma">
                        <figcaption>Figma</figcaption>
                    </figure>
                    <figure>
                        <img src=/assets/img/aae.svg alt="After Effects">
                        <figcaption>AfterEffects</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</main>
<?php include 'sections/footer.php' ?>