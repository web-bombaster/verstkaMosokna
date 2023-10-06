if (document.querySelector('.footer_col__title') && document.querySelector('.footer_col__links')) {
    const footerColTitle = document.querySelectorAll('.footer_col__title'); // все кнопки

    footerColTitle.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        });
    });
};