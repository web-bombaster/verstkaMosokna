tabsToggle('.options-btn__item', '.options-descr__item'); // табы для опций
tabsToggle('.options-thumb__item', '.option-img__item'); // По щелчку на миниатюру изменяем большую картинку

// по щелчку на кнопку с выбором типа появляется выпадашка с вариантами
let optionsToggle = function() {
    let optionsTypeCurrent = document.querySelector('.options-type__current');

    if (document.querySelector('.options-type')) {

        optionsTypeCurrent.addEventListener('click', function(e) {
            this.parentElement.classList.toggle('toggle');
        });

    };
};

optionsToggle();

// выбор варианта
let optionsSelect = function() {
    let btnVariants = document.querySelectorAll('.variants-item');

    let variantTitle;
    // по клику на вариант сортировки у всех убираем .toggle, а у активного добавляем его
    btnVariants.forEach(function(element) {
        element.addEventListener('click', function() {
            btnVariants.forEach(function(element) {
                element.classList.remove('toggle');
            });
            this.classList.toggle('toggle');

            // Текст выбраного варианта в кнопку
            variantTitle = this.innerText;
            this.parentElement.previousElementSibling.querySelector('.title').innerText = variantTitle;
            this.parentElement.classList.remove('toggle');
            this.closest('.options-type').classList.remove('toggle');
        });
    });

};

optionsSelect();