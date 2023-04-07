

const openSearchPanel = () => {
	const heightSearchPanel = document.querySelector('.header-bottom').offsetHeight;
	const topSearchPanel = document.querySelector('.header-bottom').getBoundingClientRect().top;

	// console.log('topSearchPanel - ' + topSearchPanel);
	// console.log('heightSearchPanel - ' + heightSearchPanel);

	let btnSearch = document.querySelector('.header-middle__btn--search');
	let searchPanel = document.querySelector('.search');
	let searchClose = document.querySelector('.search-close');

	searchPanel.style.minHeight = heightSearchPanel + 'px';
	searchPanel.style.top = topSearchPanel + 'px';

	btnSearch.addEventListener('click', (e) => {
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
