// Инициализация Inputmask
// https://github.com/RobinHerbots/Inputmask

function initInputMask() {
	let formPhone = document.querySelectorAll('.form__phone');
	formPhone.forEach(element => {
		Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(element);
	});
}

initInputMask();

// Инициализация just-validate
// https://github.com/horprogs/Just-validate
// https://just-validate.dev/

function initJustValidatHelpForme() {
	const validation = new JustValidate('.help__form');

	validation
		.addField('.form__phone', [
			{
				rule: 'required',
				errorMessage: 'Введите телефон!',
			},
		])
		.addField('.form__agreement', [
			{
				rule: 'required',
				errorMessage: 'Подтвердите согласие на обработку персональных данных!',
			},
		])
		.addField('.form__email', [
			{
				rule: 'required',
				errorMessage: 'Email обязателен!',
			},
			{
				rule: 'email',
				errorMessage: 'Email не корректен!',
			},
		])
}

if (document.querySelector('.help__form')) {
	initJustValidatHelpForme();
}

function initJustValidatRegistrationForm() {
	const validation = new JustValidate('.registration__form');

	validation
		// .addField('.form__name', [
		// 	{
		// 		rule: 'required',
		// 		errorMessage: 'Введите имя!',
		// 	},
		// 	{
		// 		rule: 'minLength',
		// 		value: 3,
		// 		errorMessage: 'Минимум 3 символа',
		// 	},
		// 	{
		// 		rule: 'maxLength',
		// 		value: 30,
		// 		errorMessage: 'Максимум 30 символов',
		// 	},
		// ])
		.addField('.form__name', [
			{
				rule: 'required',
				errorMessage: 'Введите имя!',
			},
		])
		.addField('.form__phone', [
			{
				rule: 'required',
				errorMessage: 'Введите телефон!',
			},
		])
		.addField('.form__agreement', [
			{
				rule: 'required',
				errorMessage: 'Подтвердите согласие на обработку персональных данных!',
			},
		])
		.addField('.form__email', [
			{
				rule: 'required',
				errorMessage: 'Email обязателен!',
			},
			{
				rule: 'email',
				errorMessage: 'Email не корректен!',
			},
		])
	// .onSuccess((event) => {

	// 	// sentForm();
	// 	// Когда валидация прошла, отправляем форму
	// 	let element = event.target;
	// 	let formData = new FormData(element);
	// 	let xhr = new XMLHttpRequest();
	// 	xhr.onreadystatechange = function () {
	// 		if (xhr.readyState === 4) {
	// 			if (xhr.status === 200) {
	// 				console.log('Отправлено');
	// 				// Закрываем модалку
	// 				element.closest('.modal').classList.remove('show');
	// 				// Показываем другую модалку с ссобщением об успещной отправке
	// 				document.getElementById('modal-05').classList.add('show');
	// 			}
	// 		}
	// 	}

	// 	xhr.open('POST', 'mail.php', true);
	// 	xhr.send(formData);

	// 	element.reset();

	// });
}

if (document.querySelector('.registration__form')) {
	initJustValidatRegistrationForm();
}

function initJustValidatGoodDeal() {
	const validation = new JustValidate('.good-deal__form');

	validation
		.addField('.form__phone', [
			{
				rule: 'required',
				errorMessage: 'Введите телефон!',
			},
		])
		.addField('.form__agreement', [
			{
				rule: 'required',
				errorMessage: 'Подтвердите согласие на обработку персональных данных!',
			},
		])
}

if (document.querySelector('.good-deal__form')) {
	initJustValidatGoodDeal();
}