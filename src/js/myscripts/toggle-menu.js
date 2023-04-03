//
function toggleMenu() {

    // Перебираем кнопки .jsToggleSubMenuBtn , вешаем на них по клику функцию открытия меню
    if (document.querySelector('.jsToggleSubMenuBtn')) {
        const toggleBtn = document.querySelectorAll('.jsToggleSubMenuBtn');
        const toggleLink = document.querySelectorAll('.jsToggleSubMenuBtn > a');

        if (toggleLink) {
            toggleLink.forEach(element => {
                element.addEventListener("click", function (e) {
                    e.preventDefault();
                });
            });
        }

        toggleBtn.forEach(element => {
            element.addEventListener("click", toggleOpen);
        });
    };

    // Открыть / закрыть подменю по клику на .jsToggleSubMenuBtn'
    function toggleOpen(e) {
        const toggleMenuBtn = this.closest('.jsToggleSubMenuBtn');
        // const toggleCheck = (toggleMenuBtn.classList.contains('toggle'));
        const toggleBody = toggleMenuBtn.querySelector('.jsToggleBody');

        toggleMenuBtn.classList.toggle('toggle');
        toggleBody.classList.toggle('toggle');
    }
};

toggleMenu();


