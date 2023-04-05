

const openSearchPanel = () => {
	let btnSearch = document.querySelector('.header-middle__btn--search');
	let searchPanel = document.querySelector('.search');
	let searchClose = document.querySelector('.search-close');
	
	btnSearch.addEventListener('click', (e) => {
		e.preventDefault();
		searchPanel.classList.toggle('active');
	});

	searchClose.addEventListener('click', (e) => {
		e.preventDefault();
		searchPanel.classList.toggle('active');
	});
};

openSearchPanel();
