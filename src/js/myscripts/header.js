const headerFixed = () => {
    const heightHeader = document.querySelector('.header').offsetHeight; // высота хедера
    document.body.style.paddingTop = heightHeader + 'px';
};

const headerBtnPhone = () => {
    const btnPhone = document.querySelector('.header-btn-phone__icon').firstElementChild; // высота хедера

    if (document.documentElement.clientWidth > 768) {
        btnPhone.setAttribute('xlink:href', 'img/sprite.svg#telephone');
    } else {
        btnPhone.setAttribute('xlink:href', 'img/sprite.svg#telephone-line');
    }
};

headerFixed();
headerBtnPhone();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);
// запускаем headerBtnPhone при ресайзе
window.addEventListener("resize", headerBtnPhone);


// Показать / скрыть разделы страницы
let togglePageSections = function() {
    if (document.querySelector('.subsections-btn')) {
        const btnToggle = document.querySelector('.subsections-btn'); // кнопка переключения
        const subsections = document.querySelector('.subsections'); // список разделов
        let flag = true; // проверка состояния включалась ли прокрутка. flag = false - прокрутка уже была включена

        btnToggle.style.display = 'none'; // изначально скрываем кнопку

        // Если Viewport <= 768 активируем переключатель разделов страницы
        let checkMobile = function() {
            const widthViewport = document.documentElement.clientWidth;
            if (widthViewport <= 880) {
                btnToggle.style.display = 'inline-flex';
                btnToggle.classList.add('toggle');
                headerFixed();

            } else {
                if (flag = true) {
                    subsections.style.display = 'block';
                };
            };
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Меняем состояние кнопки
        let btnLvl3Toggole = function() {
            if (btnToggle.classList.contains('toggle')) {
                flag = false;
                btnToggle.querySelector('.subsections-btn__text').innerText = 'Скрыть подразделы';
                btnToggle.querySelector('.subsections-btn__icon').setAttribute("src", "img/icons/close.svg");
                subsections.style.display = 'block';
            } else {
                btnToggle.querySelector('.subsections-btn__text').innerText = 'Разделы страницы';
                btnToggle.querySelector('.subsections-btn__icon').setAttribute("src", "img/icons/list-ul.svg");
                subsections.style.display = 'none';
            };

            btnToggle.classList.toggle('toggle');
            subsections.classList.toggle('toggle');
            headerFixed();
        };

        btnToggle.addEventListener('click', btnLvl3Toggole);

        // Скрываем 3лвл меню за кнопку при скролле и при ресайзе
        let hideLvl3 = function() {
            btnToggle.classList.add('toggle');
            subsections.classList.add('toggle');
            flag = false;
            btnToggle.style.display = 'inline-flex';
            subsections.style.display = 'none';

            btnToggle.querySelector('.subsections-btn__text').innerText = 'Разделы страницы';
            btnToggle.querySelector('.subsections-btn__icon').setAttribute("src", "img/icons/list-ul.svg");
        };

        window.addEventListener('scroll', hideLvl3);
        window.addEventListener('resize', hideLvl3);
    };
};
togglePageSections();

// document.querySelector('.main-menu__item').click();