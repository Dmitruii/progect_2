$(document).ready(function () {

    // Header sticky
    const header = document.documentElement.querySelector(".header__main");
    const sticky = header.offsetTop;
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }); 
    
    // Slider
    $('.offers__slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3, 
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
    });

    // Menu burger
    var menuBurgerElem = document.documentElement.querySelector('.header__menu_burger');
    const headerMenuElem = document.documentElement.querySelector('.header__menu');
    const headerMainMenuElem = document.documentElement.querySelector('.header__main');
    const bodyElem = document.body;
    menuBurgerElem.addEventListener('click', function () {
        menuBurgerElem.classList.toggle('active');
        headerMenuElem.classList.toggle('active');
        headerMainMenuElem.classList.toggle('active');
        bodyElem.classList.toggle('lock');
        // if (headerMenuElem.classList[1] == 'active') {
        //     header.classList.remove("sticky");
        // }
    });
});