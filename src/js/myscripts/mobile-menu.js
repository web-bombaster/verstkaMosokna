if (document.querySelector('.jsMobileMenuBtnToggle')) {

    const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');

    // Показать / скрыть мобильное меню
    function menuToggle() {
        const body = document.querySelector('body');
        const menu = document.querySelector('.mobile-menu');

        if (menuBtn.classList.contains('toggle')) {
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
    }


	// Определяем высоту мобильного меню и размещаем под шапкой
	function positionMobileMenu() {
		const heightViewport = document.documentElement.clientHeight;
		const heightHeader = document.querySelector('.header').offsetHeight;
		const heightMenuOverlay = heightViewport - heightHeader;
		let posTop = window.pageYOffset;

		const menuActive = document.querySelector('.mobile-menu.toggle');

		if (menuActive) {
			menuActive.style.minHeight = heightMenuOverlay + 'px';
			menuActive.style.top = posTop + heightHeader + 'px';
		};
	};

    // Закрываем мобильное меню по клику вне его
    function closeMobileMenu() {
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
    menuBtn.addEventListener("click", positionMobileMenu);
    closeMobileMenu();
};





// Для открывающихся пунктов меню по щелчку будем менять класс toggle
// сделаю по клику потом переделать на ховер

// function mobileMenuToggleSubmenu() {
//     if (document.querySelector('.mobile-menu__main-menu .main-menu__submenu')) {
//         const mobileMenuSubMenuOpenBtn = document.querySelectorAll('.main-menu__link');
//         console.log(mobileMenuSubMenuOpenBtn);

//         mobileMenuSubMenuOpenBtn.forEach(element => {
//             element.addEventListener('click', function () {
//                 // element.preventDefault();
//                 element.classList.toggle('active');
//             });
//         });
//     };
// };

// mobileMenuToggleSubmenu();
// window.addEventListener("resize", mobileMenuToggleSubmenu);




// Меню для ПК
// Раздаем первоначальные классы активности пунктам меню
function addClassActive() {
    const lvl1 = document.querySelector('.main-menu__link');
    lvl1.classList.add('active');
    const lvl2 = document.querySelector('.main-menu__link.active').nextElementSibling.querySelector('.main-menu__submenu-link');
    lvl2.classList.add('active');
};
addClassActive();



// document.querySelector('.main-menu__link').classList.add('active');
// document.querySelector('.main-menu__link.active .main-menu__submenu-link').classList.add('active');

function pcMenuToggle2lvl() {
    if (document.querySelector('.main-menu__link')) {
        const mainMenuLink = document.querySelectorAll('.main-menu__link');

        // document.querySelector('.main-menu__link').classList.add('active');
        // document.querySelector('.main-menu__link.active .main-menu__submenu-link').classList.add('active');

        // Инициализация меню для ПК второго уровня
        const currentInitBox = document.querySelector('.header-bottom__box'); // куда будем записывать при инициализации
        currentInitBox.innerHTML = '';
        const currentInitEl = document.querySelector('.main-menu__link.active').nextElementSibling; // какой элемент копируем
        const newInitEl = currentInitEl.cloneNode(true); // новый элемент, который будем вставлять в панель второго уровня
        currentInitBox.prepend(newInitEl);


        mainMenuLink.forEach(element => {
            // Поменять класс активности у раздела по наведению
            element.addEventListener('mouseenter', function (e) {
                mainMenuLink.forEach(element => {
                    element.classList.remove('active');
                });
                element.classList.toggle('active');


                e.preventDefault();

                e.target.closest('.main-menu__link').nextElementSibling.querySelector('.main-menu__submenu-link').classList.add('active');

                // Склонировать в панель второго уровня .header-bottom__box подпункты активного раздела
                // const currentNode = document.querySelector('.header-bottom__box>.main-menu__submenu'); // куда будем вставлять
                const currentNode = document.querySelector('.header-bottom__box>.main-menu__submenu'); // какой элемент будем перезаписывать
                const oldNode = e.target.closest('.main-menu__link').nextElementSibling; // откуда берем код
                const newNode = oldNode.cloneNode(true); // новый элемент, который будем вставлять в панель второго уровня

                currentNode.parentNode.replaceChild(newNode, currentNode);
            });
        });
    };
};

function pcMenuToggle3lvl() {
    if (document.querySelector('.main-menu__submenu-link')) {

        const mainMenuLink = document.querySelectorAll('.main-menu__submenu-link');

        // Инициализация меню для ПК третьего уровня
        const currentInitBox = document.querySelector('.subsections'); // куда будем записывать при инициализации
        currentInitBox.innerHTML = '';
        const currentInitEl = document.querySelector('.main-menu__submenu-link.active').nextElementSibling; // какой элемент копируем
        const newInitEl = currentInitEl.cloneNode(true); // новый элемент, который будем вставлять в панель второго уровня
        currentInitBox.prepend(newInitEl);



        mainMenuLink.forEach(element => {
            // Поменять класс активности у раздела по наведению
            element.addEventListener('mouseenter', function (e) {
                e.preventDefault();

                mainMenuLink.forEach(element => {
                    element.classList.remove('active');
                });
                element.classList.toggle('active');

                // Склонировать в панель третьего уровня .header-bottom__box подпункты активного раздела
                // const currentNode = document.querySelector('.header-bottom__box>.main-menu__submenu'); // куда будем вставлять
                const currentNode = document.querySelector('.subsections>.subsections__list'); // какой элемент будем перезаписывать
                const oldNode = e.target.closest('.main-menu__submenu-link').nextElementSibling; // откуда берем код
                const newNode = oldNode.cloneNode(true); // новый элемент, который будем вставлять в панель второго уровня

                currentNode.parentNode.replaceChild(newNode, currentNode);
            });
        });
    };
};


pcMenuToggle2lvl();
window.addEventListener("resize", pcMenuToggle2lvl);

pcMenuToggle3lvl();
window.addEventListener("resize", pcMenuToggle3lvl);




// Поменять класс активности у раздела второго уровня по наведению
// Склонировать в панель третьего уровня подпункты активного подраздела