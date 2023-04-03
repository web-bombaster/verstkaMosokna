const accordeonItems = document.querySelectorAll('.accordeon__title'); // Все заголовки элементов аккордиона, по которым щелкаем для открытия / закрытия контента выбранного элемента
const accordeonItemsContent = document.querySelectorAll('.accordeon__content'); // Контент всех элементов аккордиона, который открывается, закрывается

// Перебираем заголовки аккордеона, по которым можем щелкнуть
accordeonItems.forEach((element, index) => {
	// Вешаем событие клика на каждый заголовок аккордеона
	element.addEventListener('click', function () {

		// Если у элемента, по которому щелкнули, нет класса активности,
		// if (!accordeonItems[index].classList.contains('accordeon__title--active')) {

		// 	// Пробегаемся по заголовкам элементов аккордеона
		// 	accordeonItems.forEach(element => {
		// 		// удаляем класс активности
		// 		element.classList.remove('accordeon__title--active');
		// 	});

		// 	// Перебираем контент для айтемов аккордиона и скрываем.
		// 	accordeonItemsContent.forEach(element => {
		// 		element.classList.add('accordeon__content--hidden');
		// 	});
		// };

		// Переключаем класс активности элемента, по которому щелкнули
		accordeonItems[index].classList.toggle('accordeon__title--active');

		// Делаем тоггл для контета элемента, по которому щелкнули
		accordeonItemsContent[index].classList.toggle('accordeon__content--hidden');

	});
});