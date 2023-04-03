// Паттерны для валидации форм
// при помощи модификатора "i" укажем, что наш шаблон будет регистронезависимым
var mail_pattern = /^[\.a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,8}$/i;
var tel_pattern = /^[\+0-9- \(\)]{5,25}$/;
var text_pattern = /^[\a-zа-я0-9- \n\*\+\=\@\.\,\;\:\"\«\»\!\?\(\)\№\%]+$/i;

// Валидация поля по паттерну с помощью маски для телефонов
$('.jsFormPhone').blur(function() {
	// console.log('Тег для $(this)  > ' + $(this).get(0).tagName); // Тег для $(this)
	if ($(this).val() != '') {
		// Если поле заполнено
		if ($(this).val().search(tel_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes').removeClass('error');
		} else {
			// Если не удовлетворяет паттерну
			$(this).parent().addClass('error').removeClass('succes');
		}
	} else {
		$(this).parent().addClass('error').removeClass('succes');
		// $('.form .submit').attr('disabled', true);
	}
});

// Валидация поля по паттерну с помощью маски для мейлов
$('.jsFormMail').blur(function() {
	if ($(this).val() != '') {
		// Если поле заполнено
		if ($(this).val().search(mail_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes').removeClass('error');
		} else {
			// Если не удовлетворяет паттерну
			$(this).parent().addClass('error').removeClass('succes');
		}
	} else {
		// Если поле пустое
		$(this).parent().addClass('error').removeClass('succes');
	}
});

// Валидация поля по паттерну с помощью маски для текста
$('.jsFormText').blur(function() {
	if ($(this).val() != '') {
		// Если поле заполнено
		if ($(this).val().search(text_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes').removeClass('error');
			// console.log('succes - удовлетворяет паттерну, заполнено : ' + $(this).val());
		} else {
			// Если не удовлетворяет паттерну
			$(this).removeClass('succes').addClass('error').parent().addClass('error');
			// console.log('error - не удовлетворяет паттерну, заполнено : ' + $(this).val());
		}
	} else {
		// Если поле пустое
		$(this).removeClass('succes').addClass('error').parent().addClass('error');
		// console.log('error - pusto' + $(this).val());
	}
});

// Проверяем наличие незаполненных обязательных полей по клику на .submit
$(function() {
	$('.submit').click(function() {
		// Определяем обязательные поля
		var required_input = $(this).closest('.form').children('.before').children('input[required]');
		// Определяем обязательные чекбоксы
		var required_checkbox = $(this).closest('.form').find('input[type="checkbox"][required]');

		// Для каждого найденного пустого обязательнього инпута
		$(required_input).each(function() {
			if ($(this).val() == '') {
				$(this).addClass('error').parent().addClass('error');
			}
		});

		// Для незаполненного обязательного чекбокса политики
		$(required_checkbox).each(function() {
			if (required_checkbox.prop('checked') == false) {
				$(this).addClass('error').parent('').addClass('error');
			} else {
				$(this).removeClass('error').addClass('succes').parent('').removeClass('error');
			}
		});
	});
});

// Раздаем класс succes обязательным заполненным чекбоксам
$(function() {
	// Раздаем класс succes обязательным заполненным чекбоксам
	var required_checkbox = $('input[type="checkbox"][required]');
	$(required_checkbox).change(function() {
		// отслеживаем изменение чекбокса
		if ($(this).prop('checked') == false) {
			$(this).removeClass('succes').addClass('error').parent('').addClass('error');
		} else {
			$(this).addClass('succes').removeClass('error').parent('').removeClass('error'); // Для заполненного чекбокса
		}
	});
});

// Убираем классы error у элементов в фокусе
$('input, textarea').focus(function() {
	$(this).removeClass('error').parent().removeClass('error');
});

// Проверка, возможна ли отправка. Если возможна, даем кнопке отправки класс submit
function form_succes() {
	var proveryaemye_polya = $('.form input[required], .jsFormPhone, .jsFormMail, .jsFormText');
	var form_succes = 5;
	// var btn_submit;

	// При потере фокуса с проверяемых полей проверяем форму на наличие классов error. Если они есть, запрещаем отправку формы
	$(proveryaemye_polya).blur(function() {
		// console.log('form input[required] > ' + $(this));
		// console.log('form_succes > ' + form_succes);

		// Если нет классов error разрешить отправку формы
		if ($(this).closest('.form').find('.error').length > 0) {
			form_succes = 0;
			// console.log('form_succes > ' + form_succes);
		} else {
			form_succes = 1;
			// console.log('form_succes > ' + form_succes);
		}

		// Если у проверяемых полей нет классов succes запретить отправку формы
		// $('.form input[required]').each(function() { - неправильный вариант, т.к. он проверял поля всех форм, а не текущей
		$(this).each(function() {
			if ($(this).hasClass('succes')) {
			} else {
				form_succes = 0;
			}
		});

		// Даем кнопке отправки класс submit если отправка разрешена
		var btn_submit = $(this).closest('.form').find('.submit');
		//console.log('btn_submit tag > ' + btn_submit.get(0).tagName);
		if (form_succes == 1) {
			//console.log('Отправка разрешена, делаем submit  > ' + $(this).get(0).tagName);
			btn_submit.attr('type', 'submit');
			// btn_submit.attr('style', 'background-color: #29ec3a;');
			// console.log('Отправка разрешена, делаем submit  > ' + $(this).closest('.form').find('.submit').prop('type'));
			// console.log($(this).closest('.form').find('.submit').attr('type'));
		} else {
			//console.log('Отправка не разрешена, делаем button  > ' + $(this).get(0).tagName);
			btn_submit.attr('type', 'button');
			// btn_submit.attr('style', 'background-color: #d23939;');
			// console.log('Отправка не разрешена, делаем button  > ' +
			// 		$(this).closest('.form').find('.submit').prop('type')
			// );
		}
	});
}

form_succes(); // Вызов проверки возможности отправки формы

//Отправка формы для заказа звонка #zayavka
$('#zayavka').submit(function() {
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: $(this).serialize()
	}).done(function() {
		// выполнить после успешной отправки
		$(this).find('input').val('');
		// alert("Спасибо за заявку! Скоро мы с вами свяжемся."); // Сообщение в виде стандартного алерта
		$('#zayavka').trigger('reset');

		$.magnificPopup.close(); // Закрыть открытые попапы
		// Создать попап со своим инлайновым содержимым
		$.magnificPopup.open(
			{
				items: {
					src: '<div class="white-popup-block">Заявка успешно отправлена.<br>Скоро мы с вами свяжемся.</div>'
				},
				removalDelay: 3000,
				showCloseBtn: true,
				type: 'inline'
			},
			0
		);
		$.magnificPopup.close();
	});
	return false;
});

//Отправка формы обратной связи #zayavka2
$('#zayavka2').submit(function() {
	$.ajax({
		type: 'POST',
		url: 'mail2.php',
		data: $(this).serialize()
	}).done(function() {
		// выполнить после успешной отправки
		$(this).find('input').val('');
		// alert("Спасибо за заявку! Скоро мы с вами свяжемся."); // Сообщение в виде стандартного алерта
		$('#zayavka2').trigger('reset');

		$.magnificPopup.close(); // Закрыть открытые попапы
		// Создать попап со своим инлайновым содержимым
		$.magnificPopup.open(
			{
				items: {
					src: '<div class="white-popup-block">Письмо успешно отправлено.<br>Спасибо за заявку!</div>'
				},
				removalDelay: 3000,
				showCloseBtn: true,
				type: 'inline'
			},
			0
		);
		$.magnificPopup.close();
	});
	return false;
});

//Отправка формы обратной связи #zayavka3
// $('#zayavka3').submit(function() {
// 	$.ajax({
// 		type: 'POST',
// 		url: 'mail3.php',
// 		data: $(this).serialize()
// 	}).done(function() {
// 		// выполнить после успешной отправки
// 		$(this).find('input').val('');
// 		// alert("Спасибо за заявку! Скоро мы с вами свяжемся."); // Сообщение в виде стандартного алерта
// 		$('#zayavka3').trigger('reset');

// 		$.magnificPopup.close(); // Закрыть открытые попапы
// 		// Создать попап со своим инлайновым содержимым
// 		$.magnificPopup.open(
// 			{
// 				items: {
// 					src: '<div class="white-popup-block">Заявка успешно отправлена.<br>Скоро мы с вами свяжемся.</div>'
// 				},
// 				removalDelay: 3000,
// 				showCloseBtn: true,
// 				type: 'inline'
// 			},
// 			0
// 		);
// 		$.magnificPopup.close();
// 	});
// 	return false;
// });
