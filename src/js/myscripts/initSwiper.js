// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.js-services-list')) {
		const servicesList = new Swiper('.js-services-list', {
			spaceBetween: 16,
			slidesPerView: 1.3,
			lazy: true,
			loop: true,
			breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 16,
					loop: true,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
					loop: true,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".services-list__next",
				prevEl: ".services-list__prev",
			},
		});
	};

	// if (document.querySelector('.js-bubbles-list')) {
	// 	if (document.documentElement.clientWidth <= 767) {
	// 		const bubblesList = new Swiper('.js-bubbles-list', {
	// 			spaceBetween: 0,
	// 			slidesPerView: "auto",
	// 			// loop: true,
	// 			enabled: true,
	// 			freeMode: true,
	// 			breakpoints: {
	// 				768: {
	// 					enabled: false,
	// 				},
	// 			},
	// 			grid: {
	// 				rows: 2,
	// 			},
	// 			navigation: {
	// 				nextEl: ".bubbles-list__next",
	// 				prevEl: ".bubbles-list__prev",
	// 			},
	// 		});
	// 	};
	// };



	if (document.querySelector('.jsBrandsList')) {
		const brandsList = new Swiper('.jsBrandsList', {
			// slidesPerView: 5,
			loop: true,
			spaceBetween: 20,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.brands__button-next',
				prevEl: '.brands__button-prev',
			},

			breakpoints: {
				319: {
					slidesPerView: 2,
				},

				767: {
					slidesPerView: 3,
				},

				991: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 5,
				},
			},
		});
	};
};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();


