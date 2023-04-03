// Если уже есть мобильное меню, удаляем его, чтобы не плодить дубли
const navMobileCheck = () => {
	const navMobileCheck = document.querySelector('.nav__list--mobile');
	if (navMobileCheck) {
		navMobileCheck.remove();
	};
};



// Обертки - создаем нужные дивы для правильной разметки меню в десктопе
// в десктопе для a.nav__link.nav__link--open-panel(href="#") внутри li.nav__item все следующие элементы ul.col.nav__col засунуть в одну обертку .nav__panel .container .row.nav__row
const wrappersForMenu = () => {
	const widthViewport = document.documentElement.clientWidth; // ширина вьюпорта
	// Если это десктопное меню, 992 - когда скрываем десктопное меню
	// if (widthViewport > 992) {
	if ((widthViewport > 992) && (!document.querySelector('.nav__panel'))) {

		const navLinkOpenPanel = document.querySelectorAll('.nav__link--open-panel'); // Все кнопки (ссылки) открытия панели в меню

		navLinkOpenPanel.forEach(panel => {

			// создаем wrapperForPanel , потом будем сюда складывать .col.nav__col
			const wrapperForPanel = document.createElement('div');
			wrapperForPanel.setAttribute("class", "nav__panel");

			// найдем всех соседей .col.nav__col
			const colInPanel = panel.parentElement.querySelectorAll('.col.nav__col'); // от кнопки идем к родителю и от него ищем .col.nav__col

			// проходим по .col.nav__col, складываем их во wrapperForPanel.
			colInPanel.forEach(element => {
				const item = element.cloneNode(true);
				wrapperForPanel.append(item);
				element.remove();
			});

			// для wrapperForPanel делаем нужные обертки
			wrapperForPanel.innerHTML = "<div class='container'><div class='row nav__row'>" + wrapperForPanel.innerHTML + "</div></div>";

			// wrapperForPanel вставляем после ссылки открытия меню
			panel.after(wrapperForPanel);

		});

	}
};
wrappersForMenu();
// запускаем wrappersForMenu при ресайзе
window.addEventListener("resize", wrappersForMenu);



// Открытие - закрытие панели для десктопного меню
const openMenuPanel = () => {
	let widthViewport = document.documentElement.clientWidth; // ширина вьюпорта

	if (widthViewport > 992) {

		// Кнопки открытия меню
		let navLinkOpenPanel = document.querySelectorAll('.nav__link--open-panel');
		//  Панели меню
		let navPanel = document.querySelectorAll('.nav__panel');

		// Если в обертке уже есть мобильное меню, удаляем его, чтобы не плодить дубли
		// navMobileCheck();

		// Перебираем открывающие панель ссылки
		navLinkOpenPanel.forEach(element => {

			// По наведению
			element.addEventListener('mouseenter', (e) => {

				// Закрываем открытые панели
				navPanel.forEach(element => {
					if (element.classList.contains('active')) {
						element.classList.toggle('active');
					}

					// высота меню, на которую сдвинем панель вниз
					const hMenu = document.querySelector('.nav__list').offsetHeight;
					element.style.top = hMenu + 'px';
				});

				// Открываем нужную панель
				e.preventDefault();
				element.nextElementSibling.classList.toggle('active'); // следующий

			});

			// Покидаем открывающий пункт (li) или его потомков, закрываем панель
			const navItem = element.parentNode;
			navItem.addEventListener('mouseleave', (e) => {
				// element.nextElementSibling.classList.toggle('active');
				element.nextElementSibling.classList.remove('active');
			});

		});

	};

};
openMenuPanel();
// запускаем openMenuPanel при ресайзе
window.addEventListener("resize", openMenuPanel);



// Если не десктоп, клонируем меню, меняем клону классы для дальнейшего преобразования в мобильное меню
const mobileMenu = () => {
	const widthViewport = document.documentElement.clientWidth; // ширина вьюпорта
	const navList = '.nav__list'; // будем клонировать этот элемент

	if (widthViewport <= 992) {
		navMobileCheck(); // Если в обертке уже есть мобильное меню, удаляем его, чтобы не плодить дубли
		const newMenu = document.querySelector(navList).cloneNode(true); // клонируем меню
		// newMenu.classList.remove('nav__list');

		let wrapper = document.createElement('div'); // Делаем нужную обертку div
		wrapper.classList.add('nav__list--mobile'); // задаем класс nav__list--mobile
		wrapper.id = 'mobile-menu'; // задаем айдишник
		wrapper.prepend(newMenu); // оборачиваем меню в div.nav__list--mobile
		document.querySelector('.header').after(wrapper); // после .header вставляем получившееся меню

		// initMobileMenu(); // Инициализация mmenu.js
	} else {
		navMobileCheck(); // Если уже есть мобильное меню, удаляем его, чтобы не плодить дубли
	};
};
mobileMenu();
// запускаем mobileMenu при ресайзе
window.addEventListener("resize", mobileMenu);



// высота оверлея меню
function heightMenuOverlay() {
	const widthViewport = document.documentElement.clientWidth; // ширина вьюпорта

	if (widthViewport <= 992) {
		const heightViewport = document.documentElement.clientHeight; // высота вьюпорта
		const heightHeader = document.querySelector('.header').offsetHeight; // высота хедера
		const heightMenuOverlay = heightViewport - heightHeader; // высота оверлея меню
		const menuActive = document.querySelector('.nav__list--mobile');

		menuActive.style.height = heightMenuOverlay + 'px';
		menuActive.style.top = heightHeader + 'px';
	}
}
heightMenuOverlay();
// запускаем heightMenuOverlay при ресайзе
window.addEventListener("resize", heightMenuOverlay);



// Показать / скрыть мобильное меню
function menuToggle() {
	const menuBtn = document.querySelector('.header__menu-btn');
	const body = document.querySelector('body');
	const menu = document.querySelector('.nav__list--mobile');

	if (!menuBtn.classList.contains('toggle')) {
		menuBtn.classList.add('toggle');
		menu.classList.add('toggle');
		body.classList.add('toggle');
	} else {
		menuBtn.classList.remove('toggle');
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

// Показать / скрыть меню по клику на кнопку
document.querySelector('.header__menu-btn').addEventListener("click", menuToggle);


// Показать / скрыть в мобильном меню подменю
function subMenuToggle(element) {
	const subMenuBtn = document.querySelectorAll('.nav__list--mobile .nav__link--open-panel'); // ссылка для открытия подменю
	const navListMobile = document.querySelector('.nav__list--mobile'); // сюда будем складывать обертки подменюшек
	let zIndexValue = 100;


	// По клику на кнопку для субменю будем формировать и показывать подменю
	const subBtnClick = (e) => {

		// Формируем обертку для подменю
		const subMenuWrapper = document.createElement('div');
		zIndexValue++;
		subMenuWrapper.classList.add('nav__list'); // обертка для подменю
		subMenuWrapper.classList.add('z-index'); // обертка для подменю
		subMenuWrapper.classList.add('z-index-' + zIndexValue); // обертка для подменю
		// subMenuWrapper.classList.remove('nav__list');
		navListMobile.append(subMenuWrapper); // добавляем обртку к основному меню
		subMenuWrapper.style.zIndex = zIndexValue; // задаем z-index для слоя с подменю

		// Формируем хедер для подменю с кнопкой назад
		const subMenuHeader = document.createElement('div');
		subMenuHeader.classList.add('submenu__header'); // обертка для кноки назад
		const textForPrevLink = e.srcElement.textContent; // текст для кноки назад
		subMenuHeader.textContent = textForPrevLink;
		subMenuWrapper.append(subMenuHeader);

		// Формируем подменю
		// const newSubMenu = e.target.parentNode.cloneNode(true);
		let newSubMenu = document.createElement('div');
		let parentSubmenuList;
		if (zIndexValue == 101) {
			parentSubmenuList = '.nav__col';
		}
		if (zIndexValue == 102) {
			parentSubmenuList = '.submenu__item';
		}
		// const newSubMenuItem = e.target.parentNode.querySelectorAll('.nav__col');
		const newSubMenuItem = e.target.parentNode.querySelectorAll(parentSubmenuList);
		newSubMenuItem.forEach(element => {
			const temp = element.cloneNode(true);
			newSubMenu.append(temp);
			// newSubMenu.append(element);
		});
		subMenuWrapper.append(newSubMenu);

		// Закрываем подменю для возврата к родителю
		subMenuHeader.addEventListener("click", () => {
			setTimeout(() => { subMenuWrapper.classList.toggle('active'); }, 100); // класс, чтобы выдвигать меню
			setTimeout(() => { subMenuWrapper.remove(); }, 500); // удаляем подменю, чтобы не пложить копии
			zIndexValue--;
		});

		// subMenuWrapper.style.top = 60 + 'px'; // добавляем отступ
		// класс, чтобы выдвигать меню
		setTimeout(() => { subMenuWrapper.classList.add('active'); }, 100); // класс, чтобы выдвигать меню
	};

	// Для каждой кноппки, открывающей панель подменю, отслеживаем клик - для показа подменю второго уровня
	subMenuBtn.forEach(element => {
		element.addEventListener("click", subBtnClick);
	});

	// Для каждой кноппки, открывающей подменю, отслеживаем клик - для показа подменю третьего уровня
	let submenu3Level = document.querySelectorAll('.nav__list--mobile .nav__item--title .nav__submenu');
	submenu3Level.forEach(element => {
		let titleSubmenu3Level = element.previousElementSibling;
		// console.log(titleSubmenu3Level);
		titleSubmenu3Level.addEventListener("click", subBtnClick);
		titleSubmenu3Level.addEventListener("click", () => {
			// console.log('titleSubmenu3Level');
		});
	});


	// subMenuBtn.forEach(element => {
	// 	element.addEventListener("click", subBtnClick);
	// });
}

subMenuToggle();
window.addEventListener("resize", subMenuToggle);




// document.querySelectorAll('.nav__list--mobile .nav__link--open-panel').addEventListener("click", subMenuToggle);

// Инициализация mmenu.js
// const initMobileMenu = () => {
// 	new Mmenu("#mobile-menu",
// 		{
// 			// slidingSubmenus: false
// 		},
// 		{
// 			// configuration
// 			offCanvas: {
// 				page: {
// 					selector: "#page"
// 				}
// 			}
// 		});
// };
// запускаем initMobileMenu при ресайзе
// window.addEventListener("resize", initMobileMenu);



