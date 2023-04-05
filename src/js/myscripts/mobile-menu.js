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

// Сделать инициализацию третьего уровня

function pcMenuToggle2lvl() {
    if (document.querySelector('.main-menu__link')) {
        const mainMenuLink = document.querySelectorAll('.main-menu__link');

        const currentInitBox = document.querySelector('.header-bottom__box'); // куда будем записывать при инициализации
        const currentInitEl = document.querySelector('.main-menu__link.active').nextElementSibling; // какой элемент копируем
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

pcMenuToggle2lvl();
window.addEventListener("resize", pcMenuToggle2lvl);


// function pcMenuToggle3lvl() {
//     if (document.querySelector('.main-menu__submenu-item')) {
//         const mainMenuLink = document.querySelectorAll('.main-menu__submenu-item');

//         mainMenuLink.forEach(element => {
//             // Поменять класс активности у подраздела по наведению
//             element.addEventListener('mouseenter', function (e) {
//                 e.preventDefault();

//                 mainMenuLink.forEach(element => {
//                     element.classList.remove('active');
//                 });
//                 element.classList.toggle('active');

//                 // Склонировать в панель третьего уровня .header-bottom__box подпункты активного раздела
//                 const currentNode = document.querySelector('.header-bottom__box>.main-menu__submenu'); // куда будем вставлять
//                 const oldNode = e.target.closest('.main-menu__link').nextElementSibling; // откуда берем код
//                 const newNode = oldNode.cloneNode(true); // новый элемент, который будем вставлять в панель второго уровня

//                 currentNode.parentNode.replaceChild(newNode, currentNode);
//             });
//         });
//     };
// };

// pcMenuToggle3lvl();
// window.addEventListener("resize", pcMenuToggle3lvl);




// Поменять класс активности у раздела второго уровня по наведению
// Склонировать в панель третьего уровня подпункты активного подраздела