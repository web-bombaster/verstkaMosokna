if (document.querySelector('.colors-collection__item')) {
	const colorsCollection = () => {
		let colorsCollectionItem = document.querySelectorAll('.colors-collection__item'); // В этих элементах в дата атрибутах будут храниться названия цветов
		let boxForColorsName = document.querySelector('.collection-card__color'); // Сюда будем записывать название цвета

		// console.log(colorsCollectionItem);

		colorsCollectionItem.forEach(element => {
			// element.addEventListener('click', (e) => {
			element.addEventListener('mouseenter', (e) => {

				colorsCollectionItem.forEach(el => {
					el.classList.remove('active');
				});
				// searchPanel.classList.toggle('active');
				let colorName = element.getAttribute('data-colorName');
				element.classList.add('active');
				boxForColorsName.textContent = colorName;

			});
		});


	};
	
	colorsCollection();
};