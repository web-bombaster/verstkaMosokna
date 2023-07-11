// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.compare-products-js')) {
		const servicesList = new Swiper('.compare-products-js', {
			spaceBetween: 10,
			slidesPerView: 1,
			lazy: true,
			loop: true,
			breakpoints: {
				600: {
					slidesPerView: 1.8,
					loop: true,
				},
				768: {
					slidesPerView: 2.3,
					loop: true,
				},
				992: {
					slidesPerView: 4,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".compare-products__next",
				prevEl: ".compare-products__prev",
			},
		});
	};

	if (document.querySelector('.js-types-windows-list')) {
		const servicesList = new Swiper('.js-types-windows-list', {
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
					slidesPerView: 4,
					spaceBetween: 24,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".types-windows__next",
				prevEl: ".types-windows__prev",
			},
		});
	};

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

	if (document.querySelector('.js-types-work-list')) {
		const servicesList = new Swiper('.js-types-work-list', {
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
					slidesPerView: 4,
					spaceBetween: 24,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".types-work__next",
				prevEl: ".types-work__prev",
			},
		});
	};

	if (document.querySelector('.js-features-list')) {
		const featuresList = new Swiper('.js-features-list', {
			spaceBetween: 16,
			slidesPerView: 1.3,
			lazy: true,
			loop: true,
			autoHeight: false,
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
				nextEl: ".features-list__next",
				prevEl: ".features-list__prev",
			},
		});
	};

	if (document.querySelector('.js-examples-works-list')) {
		const servicesList = new Swiper('.js-examples-works-list', {
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
					slidesPerView: 2,
					spaceBetween: 16,
					loop: true,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 24,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".examples-works-list__next",
				prevEl: ".examples-works-list__prev",
			},
		});
	};

	if (document.querySelector('.js-bubbles-list')) {
		let bubblesList;
		const sliderInit = () => {
			bubblesList = new Swiper('.js-bubbles-list', {
				spaceBetween: 16,
				// slidesPerView: 1,
				slidesPerView: "auto",
				loop: true,
				enabled: true,


				navigation: {
					nextEl: ".bubbles-list__next",
					prevEl: ".bubbles-list__prev",
				},
			});
		};

		if (document.documentElement.clientWidth <= 768) {
			sliderInit();
		} else {
			if (bubblesList) {
				bubblesList.destroy();
			};
		};
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
});

initSwiper();

// Переключаем класс активности на стрелках сладера .slider-btn
function sliderBtnActiveClassToggle(className) {
	if (document.querySelector(className)) {
		let sliderBtn = document.querySelectorAll(className);
		sliderBtn.forEach(function(element) {
			element.addEventListener('click', function(e) {
				// У соседей удаляем класс активности
				const adjacentNtns = this.parentNode.querySelectorAll(className);
				adjacentNtns.forEach(function(element) {
					element.classList.remove('active');
				});
				this.classList.add('active');
			});
		});
	};
};

sliderBtnActiveClassToggle('.slider-btn');