if (document.querySelector('.catalog-menu__list')) {
    const catalogMenuList = document.querySelector('.catalog-menu__list'); // что клонируем
    const catalogMmenu = document.querySelector('.catalog-menu'); // куда клонируем

    const newBlock = catalogMenuList.cloneNode(true);
    catalogMmenu.append(newBlock);
}