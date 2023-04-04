const headerFixed = () => {
    const heightHeader = document.querySelector('.header').offsetHeight; // высота хедера
    document.body.style.paddingTop = heightHeader + 'px';
};

const headerBtnPhone = () => {
    const btnPhone = document.querySelector('.header-btn-phone__icon').firstElementChild; // высота хедера

    if (document.documentElement.clientWidth > 768) {
        btnPhone.setAttribute('xlink:href', 'img/sprite.svg#telephone');
    } else {
        btnPhone.setAttribute('xlink:href', 'img/sprite.svg#telephone-line');
    }





};

headerFixed();
headerBtnPhone();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);
// запускаем headerBtnPhone при ресайзе
window.addEventListener("resize", headerBtnPhone);