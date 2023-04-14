

const openSearchPanel = () => {
	let btnSearch = document.querySelector('.header-middle__btn--search');
	let searchClose = document.querySelector('.search-close');
	let searchPanel = document.querySelector('.search');

	btnSearch.addEventListener('click', (e) => {
		const heightSearchPanel = document.querySelector('.header-bottom').offsetHeight;
		const topSearchPanel = document.querySelector('.header-bottom').getBoundingClientRect().top; // верхний край


		if (heightSearchPanel > 60) {
			searchPanel.style.minHeight = heightSearchPanel + 'px';
		};
		searchPanel.style.top = topSearchPanel + 'px';

		e.preventDefault();
		searchPanel.classList.toggle('active');
		if (searchPanel.classList.contains('active')) {
			document.querySelector('.header').style.overflow = 'initial';
		} else {
			document.querySelector('.header').style.overflow = 'hidden';
		}
	});

	searchClose.addEventListener('click', (e) => {
		e.preventDefault();
		searchPanel.classList.toggle('active');
		document.querySelector('.header').style.overflow = 'hidden';
	});
};

openSearchPanel();
