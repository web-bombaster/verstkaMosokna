document.querySelector('body').addEventListener("click", function (e) {
    // добавление в избранное
    if (e.target.closest('.bookmark'))  {
        e.preventDefault();
        // e.target.closest('.bookmark').firstElementChild.classList.toggle('isSent');

        const btn = e.target.closest('.bookmark').firstElementChild;
        btn.classList.toggle('isSent');

        if (btn.classList.contains('isSent')) {
            btn.setAttribute('title', 'Удалить из избранного');
            btn.firstElementChild.firstElementChild.setAttribute('xlink:href', 'img/sprite.svg#shop-favourites-fill');
        } else {
            btn.setAttribute('title', 'Добавить в избранное');
            btn.firstElementChild.firstElementChild.setAttribute('xlink:href', 'img/sprite.svg#shop-favourites');
        }
    }

    // добавление в корзину
    if (e.target.closest('.buy')) {
        e.preventDefault();

        const btn = e.target.closest('.buy').firstElementChild;
        btn.classList.toggle('isSent');

        if (btn.classList.contains('isSent')) {
            btn.setAttribute('title', 'Добавлено в корзину');
            btn.firstElementChild.firstElementChild.setAttribute('xlink:href', 'img/sprite.svg#check');
        } else {
            btn.setAttribute('title', 'Добавить в корзину');
            btn.firstElementChild.firstElementChild.setAttribute('xlink:href', 'img/sprite.svg#shop-cart');
        }
    }

    // добавление в сравнение
    if (e.target.closest('.compare')) {
        e.preventDefault();
        e.target.closest('.compare').firstElementChild.classList.toggle('isSent');
    }
});

