const headerFixed = () => {
    if (document.documentElement.clientWidth <= 992) {
        const heightHeader = document.querySelector('.header').offsetHeight; // высота хедера
        document.body.style.paddingTop = heightHeader + 'px';
    } else {
        document.body.style.paddingTop = 0;
    }
};

headerFixed();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);