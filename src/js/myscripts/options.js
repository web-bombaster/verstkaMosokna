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

    // по клику на вариант у всех убираем .toggle, а у активного добавляем его
    btnVariants.forEach(function(element, index) {
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

            // console.log(index);
            // console.log(document.querySelectorAll('.left-tabs__item')[index]);

            // Инициализация класса toggle для элементов эскизов и больших картинок при смене варианта
            let activeLeftTab = document.querySelectorAll('.left-tabs__item')[index];
            let activeRightTab = document.querySelectorAll('.right-tabs__item')[index];
            activeLeftTab.querySelector('.options-thumb__item').classList.add('toggle');
            activeRightTab.querySelector('.option-img__item').classList.add('toggle');
        });
    });

};

optionsSelect();


tabsToggle('.options-btn__item', '.options-descr__item'); // табы для опций
tabsToggle('.variants-item', '.left-tabs__item');
tabsToggle('.variants-item', '.right-tabs__item');

// tabsToggle('.options-thumb__item', '.option-img__item'); // По щелчку на миниатюру изменяем большую картинку


// инициализация первого таба
const optionsImgInit = function() {

    if (document.querySelector('.left-tabs__item')) {
        document.querySelector('.left-tabs__item').classList.add('toggle');
        document.querySelector('.left-tabs__item.toggle .options-thumb__item').classList.add('toggle');
        document.querySelector('.right-tabs__item').classList.add('toggle');
        document.querySelector('.right-tabs__item.toggle .option-img__item').classList.add('toggle');
    };

};

optionsImgInit();





const optionsImgToggle = function(thumb, img) {

    const thumbBtn = thumb;
    const bigImg = img;

    // console.log('tabBtnClass' + document.querySelector(tabBtnClass));
    // console.log('tabsToggle');

    if (document.querySelector('.options-thumb__item')) {

        const tabsBtn = Array.from(document.getElementsByClassName(thumbBtn)); // все кнопки табов

        const tabsContent = Array.from(document.getElementsByClassName(bigImg)); // все содержимое табов


        // Перебираем кнопки табов, по которым можем щелкнуть
        tabsBtn.forEach(function(btn, index) {

            // Вешаем событие клика на каждую кнопку
            btn.addEventListener('click', function () {

                // у всех кнопок убрать класс активности
                tabsBtn.forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у кнопки, по которой щелкнули, добавить класс активности
                tabsBtn[index].classList.add('toggle');

                // у каждого содержимого одного родителя удалить класс активности
                tabsContent.forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у содержимого с этим индексом добавить класс активности
                tabsContent[index].classList.add('toggle');

            });

        });

    };

};

optionsImgToggle('options-thumb__item', 'option-img__item'); // По щелчку на миниатюру изменяем большую картинку