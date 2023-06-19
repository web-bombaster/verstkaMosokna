// по щелчку на кнопку с выбором типа .options-type__current появляется выпадашка с вариантами
let optionsToggle = function() {

    if (document.querySelector('.options-type__current')) {
        let optionsTypeCurrent = document.querySelectorAll('.options-type__current');
        optionsTypeCurrent.forEach(function(element, index) {
            element.addEventListener('click', function() {
                this.parentElement.classList.toggle('toggle');
            });
        });
    };
};

optionsToggle();


// раздаем классы toggle первым элементам внутри родительских, предварительно почистив их у других элементов
let initClassToggleItem = function(parentElement, childElement) {
    if (document.querySelector(parentElement)) {
        const parents = document.querySelectorAll(parentElement);
        parents.forEach(function(element, index) {
            let childrens = parents[index].querySelectorAll(childElement);
            childrens.forEach(function(element, index) {
                childrens[index].classList.remove('toggle');
            });

            parents[index].querySelector(childElement).classList.add('toggle');
        });
    };
};

initClassToggleItem('.options-btn', '.options-btn__item'); // инициализация кнопок табов для опций
initClassToggleItem('.options-descr', '.options-descr__item'); // инициализация описаний табов для опций

initClassToggleItem('.options-type__variants', '.variants-item'); // инициализация вариантов
initClassToggleItem('.left-tabs', '.left-tabs__item'); // инициализация левых айтемов
initClassToggleItem('.right-tabs', '.right-tabs__item'); // инициализация правых айтемов

// инициализация начальных активных элементов для привью и больших картинок
let initClassToggle = function() {
    initClassToggleItem('.options-thumb', '.options-thumb__item');
    initClassToggleItem('.options__img-box', '.option-img__item');
};

initClassToggle();


// выбор варианта
let optionsSelect = function() {

    let btnVariants = document.querySelectorAll('.variants-item');
    let variantTitle;

    // по клику на вариант у всех убираем .toggle, а у активного добавляем его
    btnVariants.forEach(function(element, index) {
        element.addEventListener('click', function() {
            // Инициализация класса toggle для элементов эскизов и больших картинок при смене варианта
            initClassToggle();

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


tabsToggle('.options-btn__item', '.options-descr__item'); // По щелчку на кнопку таба изменяем описание таба
tabsToggle('.cover .variants-item', '.cover__box'); // По щелчку на вариант в блоке cover показываем нужный блок
tabsToggle('.options .variants-item', '.left-tabs__item'); // По щелчку на вариант в блоке options показываем нужный блок слева
tabsToggle('.options .variants-item', '.right-tabs__item'); // По щелчку на вариант в блоке options показываем нужный блок справа

tabsToggle('.options-thumb__item', '.option-img__item'); // По щелчку на миниатюру изменяем большую картинку





