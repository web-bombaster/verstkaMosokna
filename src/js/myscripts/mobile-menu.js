// Меню для ПК
// Раздаем первоначальные классы активности пунктам меню при загрузке страницы
// Предварительно проверяем, есть ли уже эти классы в разметке. Если есть, то не добавляем.
let addClassActive = function() {
    if (document.querySelector('.main-menu__link')) {

        let flag;

        document.querySelectorAll('.main-menu__link').forEach(element => {
            if (!element.classList.contains('active')) {
                flag = true;
            };
        });

        if (flag) {
            document.querySelector('.main-menu__link').classList.add('active');
        };

        const lvl2 = document.querySelector('.main-menu__link.active').nextElementSibling.querySelectorAll('.main-menu__submenu-link');

        lvl2.forEach(element => {
            if (!element.classList.contains('active')) {
                flag = true;
            };
        });

        if (flag) {
            document.querySelector('.main-menu__link.active').nextElementSibling.querySelector('.main-menu__submenu-link').classList.add('active');
        };
    };
};
addClassActive();
// headerFixed();


// Инициализация меню для ПК второго уровня
let pcMenuToggle2lvl = function() {
    if (document.querySelector('.main-menu__link')) {
        const mainMenuLink = document.querySelectorAll('.main-menu__link'); // все пункты первого уровня
        const currentInitBox = document.querySelector('.header-bottom__box'); // куда будем записывать меню второго уровня
        let currentInitEl, newInitEl;

        currentInitEl = document.querySelector('.main-menu__link.active').nextElementSibling; // находим подменю второго уровня активного элемента первого уровня для копирования - не cons, т.к. будет изменяться
        newInitEl = currentInitEl.cloneNode(true); // создаем новый элемент, который будем вставлять в панель второго уровня - не cons, т.к. будет изменяться

        // предварительно все очищаем
        if (currentInitBox.querySelector('.main-menu__submenu')) {
            currentInitBox.querySelector('.main-menu__submenu').remove();
        }
        // currentInitBox.innerHTML = ''; // предварительно все очищаем
        currentInitBox.prepend(newInitEl); // Инициализация меню второго уровня

        mainMenuLink.forEach(element => {
            // Поменять класс активности у раздела по наведению
            // element.addEventListener('mouseenter', function (e) {
            element.addEventListener('click', function (e) {
                mainMenuLink.forEach(element => {
                    element.classList.remove('active');
                });
                element.classList.toggle('active');

                // Чистим класс активности у пунктов второго уровня
                document.querySelectorAll('.main-menu__submenu-link').forEach(element => {
                    element.classList.remove('active');
                });

                e.target.closest('.main-menu__link').nextElementSibling.querySelector('.main-menu__submenu-link').classList.add('active'); // даем класс активности нужному пункту второго уровня

                currentInitEl = document.querySelector('.main-menu__link.active').nextElementSibling; // находим подменю второго уровня активного элемента первого уровня для копирования - не cons, т.к. будет изменяться
                newInitEl = currentInitEl.cloneNode(true); // создаем новый элемент, который будем вставлять в панель второго уровня - не cons, т.к. будет изменяться

                // предварительно все очищаем
                if (currentInitBox.querySelector('.main-menu__submenu')) {
                    currentInitBox.querySelector('.main-menu__submenu').remove();
                }

                // currentInitBox.innerHTML = ''; // предварительно все очищаем

                currentInitBox.prepend(newInitEl); // Инициализация меню второго уровня

                pcMenuToggle3lvl(); // вызываем заполнение меню третьего уровня и при наведении на другой пункт меню первого уровня

                headerFixed(); //
            });
        });
    };
};

// Инициализация меню для ПК третьего уровня
let pcMenuToggle3lvl = function() {
    if (document.querySelector('.subsections')) {

        const mainMenuLink = document.querySelectorAll('.main-menu__submenu-link'); // все пункты второго уровня
        const currentInitBox = document.querySelector('.subsections'); // куда будем записывать меню третьего уровня
        let currentInitEl, newInitEl;

        currentInitEl = document.querySelector('.main-menu__submenu-link.active').nextElementSibling; // находим подменю третьего уровня активного элемента второго уровня для копирования - не cons, т.к. будет изменяться
        newInitEl = currentInitEl.cloneNode(true); // создаем новый элемент, который будем вставлять в панель третьего уровня - не cons, т.к. будет изменяться

        currentInitBox.innerHTML = '';
        currentInitBox.append(newInitEl);

        mainMenuLink.forEach(element => {
            // Поменять класс активности у раздела по наведению
            // element.addEventListener('mouseenter', function (e) {
            element.addEventListener('click', function (e) {
                mainMenuLink.forEach(element => {
                    element.classList.remove('active');
                });
                element.classList.toggle('active');

                currentInitEl = document.querySelector('.main-menu__submenu-link.active').nextElementSibling; // находим подменю третьего уровня активного элемента второго уровня для копирования - не cons, т.к. будет изменяться
                newInitEl = currentInitEl.cloneNode(true); // создаем новый элемент, который будем вставлять в панель третьего уровня - не cons, т.к. будет изменяться
        
                currentInitBox.innerHTML = '';
                currentInitBox.append(newInitEl);
            });
        });
    };
};

pcMenuToggle2lvl();
// window.addEventListener("resize", pcMenuToggle2lvl);

pcMenuToggle3lvl();

// После иниуиализации меню пересчитываем высоту шапки
headerFixed();

if (document.querySelector('.jsMobileMenuBtnToggle')) {

    const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');

    // Показать / скрыть мобильное меню
    let menuToggle = function() {
        const body = document.querySelector('body');
        const menu = document.querySelector('.mobile-menu');

        positionMobileMenu();

        if (!menuBtn.classList.contains('toggle')) {
            menu.classList.add('toggle');
            body.classList.add('toggle');
        } else {
            menu.classList.remove('toggle');
            body.classList.remove('toggle');
        }

        window.addEventListener('resize', function () {
            menuBtn.classList.remove('toggle');
            menu.classList.remove('toggle');
            body.classList.remove('toggle');
        }, true);

        // heightMenuOverlay(); // меняем высоту оверлея меню при ресайзе
    };

    // Закрываем мобильное меню по клику вне его
    let closeMobileMenu = function() {
        const btnMenu = document.querySelector('.jsMobileMenuBtnToggle');
        const body = document.querySelector('body');
        const menu = document.querySelector('.mobile-menu');

        document.addEventListener("click", function (e) {
            const target = e.target;
            const its_menu = target == menu || menu.contains(target);
            const its_btnMenu = target == btnMenu;

            if (!its_menu && !its_btnMenu) {
                menuBtn.classList.remove('toggle');
                menu.classList.remove('toggle');
                body.classList.remove('toggle');
            }
        });
    };

    menuBtn.addEventListener("click", menuToggle);
    closeMobileMenu();
};

// Определяем высоту мобильного меню и размещаем под шапкой
let positionMobileMenu = function() {
    const heightViewport = document.documentElement.clientHeight;
    const heightHeader = document.querySelector('.header').offsetHeight;
    // const heightHeader = document.querySelector('.header-top').offsetHeight + document.querySelector('.header-middle').offsetHeight;

    const heightMenuOverlay = heightViewport - heightHeader;
    let posTop = window.pageYOffset;

    const menu = document.querySelector('.mobile-menu');
    menu.style.height = heightMenuOverlay + 'px';
    // menu.style.top = posTop + heightHeader + 'px';
    menu.style.top = heightHeader + 'px';

};

positionMobileMenu();
window.addEventListener("resize", positionMobileMenu);

// Для открывающихся пунктов меню по щелчку будем менять класс toggle
let mobileMenuToggleSubmenu = function() {
    if (document.querySelector('.mobile-menu .main-menu__link')) {
        const mobileMenuSubMenuOpenBtn = document.querySelectorAll('.mobile-menu .main-menu__link');

        mobileMenuSubMenuOpenBtn.forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                e.target.closest('.main-menu__link').classList.toggle('toggle');
            });
        });
    };
};

// window.addEventListener("resize", mobileMenuToggleSubmenu);
mobileMenuToggleSubmenu();

