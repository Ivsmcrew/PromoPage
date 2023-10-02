$(document).ready(function(){
    //slider
    $('.slider').slick({
        infinite: false,
        dots: true,
        arrows: false,
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });

    //mobile-menu
    $('.burger, .backLayer').click(()=>{
        $('.nav').toggleClass('main__nav_hidden');
        $('.backLayer').toggleClass('backLayer_active');
        $('.burger').toggleClass('header__burgerIcon_active');
    })
});