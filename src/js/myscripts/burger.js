if (document.querySelector('.js-burger')) {

    const btnBurger = document.querySelectorAll('.js-burger');

    // Открыть / закрыть бургер по клику на него
    function btnBurgerToggle(e) {
        e.target.classList.toggle('toggle');
    }

    // При ресайзе возвращаем кнопки в исходное состояние
    // function btnBurgerToggleClassRemove() {
    //     btnBurger.forEach(element => {
    //         element.classList.remove('toggle');
    //     });
    // }

    btnBurger.forEach(element => {
        element.addEventListener("click", btnBurgerToggle);
        // window.addEventListener("resize", btnBurgerToggleClassRemove);
    });
}

// по клику на .js-catalog-open-btn открываем / закрываем меню с категориями каталога
if (document.querySelector('.js-catalog-open-btn')) {
    const catalogOpenBtn = document.querySelectorAll('.js-catalog-open-btn');

    // Открыть / закрыть подменю по клику на .js-catalog-open-btn
    function toggleOpen(e) {

        const toggleBtn = (this.closest('.js-catalog-open-btn'));
        const toggleBody = toggleBtn.nextElementSibling;

        toggleBody.classList.toggle('toggle');
    }

    catalogOpenBtn.forEach(element => {
        element.addEventListener("click", toggleOpen);
        // window.addEventListener("resize", btnBurgerToggleClassRemove);
    });
}



