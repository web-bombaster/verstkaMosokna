const showText = () => {
	let showText = document.querySelectorAll('.show-text');	

	showText.forEach(element => {
		const hiddenText = element.previousElementSibling;
		// console.dir(hiddenText);

		if (hiddenText.className == 'hidden-text') {
			element.addEventListener("click", (e) => {
				e.preventDefault();
				hiddenText.classList.toggle('active');
				// console.log(hiddenText.classList.value);
				// console.log(typeof(e));
				console.dir(e);
				if (hiddenText.classList.value === 'hidden-text') {
					e.innerHTML = "Показать больше"; // не работает
					// console.log('текст скрыт');
				} else {
					e.innerHTML = "Показать меньше"; // не работает
					// console.log('текст показан');
				};
			});
		};
	});
};

showText();