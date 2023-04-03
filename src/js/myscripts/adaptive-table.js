// Если ширина таблицы больше доступной области отображения, то ширину эмулируемой полосы прокрутки делаем равной ширине таблицы. Иначе скрываем эмулируемую полосу прокрутки сверху

function adaptive_table() {
	var table = $('table');
	var scroll_wrapper = $('.scroll-wrapper');
	var adaptive_table_wrapper = $('.adaptive-table-wrapper');

	scroll_wrapper.on('scroll', function(e) {
		$(adaptive_table_wrapper).scrollLeft(scroll_wrapper.scrollLeft());
	});
	$(adaptive_table_wrapper).on('scroll', function(e) {
		scroll_wrapper.scrollLeft($(adaptive_table_wrapper).scrollLeft());
	});

	table.each(function() {
		var width_table = $(this).width(); // ширина таблицы

		var scroll_wrapper = $(this).closest(adaptive_table_wrapper).prev(scroll_wrapper); // выбираем обертку эмулиремой полосы прокрутки
		//console.log('width_table > ' + width_table);
		var scroll_inner = $(this).closest(adaptive_table_wrapper).prev(scroll_wrapper).find('.scroll-inner');

		// console.log('width_table = ' + width_table); // выводим ширину таблицы

		if (width_table > scroll_inner.width()) {
			scroll_inner.width(width_table);
		} else {
			$(this).closest(adaptive_table_wrapper).prev(scroll_wrapper).css('display', 'none');
		}
		//console.log('width_scroll_inner > ' + scroll_inner.width());
	});
}

adaptive_table(); // Вызов проверки возможности отправки формы

// Повторный вызов проверки для отрисовки верхней полосы прокрутки при ресайзе окна
$(window).resize(function() {
	adaptive_table();
});
