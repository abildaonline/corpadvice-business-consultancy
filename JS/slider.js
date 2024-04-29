$(document).ready(function () {
    $('.main').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.prev-btn').click(function () {
        $('.main').slick('slickPrev');
    });

    $('.next-btn').click(function () {
        $('.main').slick('slickNext');
    });
});





$('.main_item8').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: false
});




