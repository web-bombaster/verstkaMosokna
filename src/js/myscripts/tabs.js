// Структура табов:
// .tabs - обертка для табов
// .tabs-btns - обертка для кнопок табов .tabs-btn__item
// .tabs-descr - обертка для содержимого табов .tabs-descr__item

// переключение табов - в качестве параметров функции будут передаваться классы для кнопок табов и содержимого табов
const tabsToggle = function(tabBtn, tabContent) {
    const tabBtnClass = tabBtn; // задаем селектор кнопки таба

    // console.log('tabBtnClass' + document.querySelector(tabBtnClass));
    // console.log('tabsToggle');

    if (document.querySelector(tabBtnClass)) {

        const tabContentClass = tabContent; // задаем селектор содержимого таба

        const tabsBtn = document.querySelectorAll(tabBtnClass); // все кнопки табов

        const tabsContent = document.querySelectorAll(tabContentClass); // все содержимое табов


        // Перебираем кнопки табов, по которым можем щелкнуть
        tabsBtn.forEach(function(btn, index) {

            // Вешаем событие клика на каждую кнопку
            btn.addEventListener('click', function () {

                // у всех кнопок одного родителя убрать класс активности
                tabsBtn[index].parentNode.querySelectorAll(tabBtnClass).forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у кнопки, по которой щелкнули, добавить класс активности
                tabsBtn[index].classList.add('toggle');

                // у каждого содержимого одного родителя удалить класс активности
                tabsContent[index].parentNode.querySelectorAll(tabContentClass).forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у содержимого с этим индексом добавить класс активности
                tabsContent[index].classList.add('toggle');

            });

        });

    };
};

// tabsToggle();