// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.jsHeroSlider')) {
		const prodSliderInner = new Swiper('.jsHeroSlider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".hero-slider__pagination",
			},
			navigation: {
				nextEl: ".hero-slider__next",
				prevEl: ".hero-slider__prev",
			},
		});
	};

	if (document.querySelector('.jsProductsListSlider')) {
		const prodSliderInner = new Swiper('.jsProductsListSlider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				1401: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".products-list__next",
				prevEl: ".products-list__prev",
			},
		});
	};

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


