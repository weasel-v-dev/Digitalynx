<?php include 'sections/header.php' ?>
    <main class="about contacts">
        <div class="glass-wrap d-flex flex-column">
            <div class="container-fluid">
                <h1 class="title-bread"><?= __('Контакты', 'Contacts') ?></h1>
            </div>
            <div class="glass about__shadow"></div>
            <div class="d-flex justify-content-center glass-wrap about__window about__window--1">
                <div class="glass">
                    <h2 class="about__title title-mega">
                        <span class="black">Lynx</span><span class="white">foundation</span>
                    </h2>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="pe-xl-5">
                                <h3 class="step__title text-center">
                                    <?= __('Для связи с нами:', 'Get in touch with us:') ?>
                                </h3>
                                <div class="contacts__socials d-flex justify-content-around pt-1 pb-3 mb-3 pt-xxl-2 pb-xxl-4">
                                    <a target="_blank" href="https://www.instagram.com/lynxfoundation/" title="Instagram">
                                        <img src="/assets/img/inst-c.svg" alt="Instagram">
                                    </a>
                                    <a target="_blank" href="skype:live:.cid.7bb9beabce36bfd5?chat" title="Skype">
                                        <img src="/assets/img/sk-c.svg" alt="Skype">
                                    </a>
                                    <a target="_blank" href="tg://resolve?domain=SerbianLynx" title="Telegram">
                                        <img src="/assets/img/tg-c.svg" alt="Telegram">
                                    </a>
                                    <a target="_blank" href="tg://resolve?domain=SerbianLynx" title="VK">
                                        <img src="/assets/img/vk-c.svg" alt="VK">
                                    </a>
                                </div>
                                <h3 class="step__title text-center">
                                    <?= __('Общие вопросы:', 'General questions:') ?>
                                </h3>
                                <p class="step__desc text-center">
                                    <a title="E-mail" class="underline" href="mailto:info@digitalynx.org">info@digitalynx.org</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="ps-xl-5 contacts__divider">
                                <div class="row">
                                    <div class="col-lg-6 col-xl-12">
                                        <h3 class="step__title mt-3 mt-lg-0 text-center">
                                            <?= __('Локация:', 'Briefly about us:') ?>
                                        </h3>
                                        <p class="step__desc contacts__socials contacts__socials--only-desk pb-xl-3 pb-xxl-4 mb-3 text-center">
                                            <?= __('Мы - удаленная outsource команда со штаб-квартирой в Белграде.',
                                                'We are a remote outsourcing team with headquarters in Belgrade.') ?>
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-xl-12">
                                        <h3 class="step__title text-center">
                                            <?= __('Адрес:', 'The address:') ?>
                                        </h3>
                                        <div class="d-flex contacts__address">
                                            <p class="step__desc text-center">
                                                <a target="_blank" href="https://goo.gl/maps/64zikwvPK3aRoNzr9" title="Google Maps">
                                                    <span class="d-inline-block">Ušće Business Center,</span>
                                                    <span class="d-inline-block">Bulevar Mihajla Pupina 6,</span>
                                                    <span class="d-inline-block">Белград 11070, Сербия</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php include 'sections/footer.php' ?>