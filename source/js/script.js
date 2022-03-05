'use strict';

// Бургер
let burger = document.querySelector(`.header-middle__btn`);
let headerBottomMenu = document.querySelector(`.header-burger-menu`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-middle__btn--active`);
  headerBottomMenu.classList.toggle(`header-burger-menu--active`);
});


$(function () {

  // Главный слайдер на main.html
  $('.presentation__slider-big').slick({
    // prevArrow: $('.main-slider_arrow.left'),
    // nextArrow: $('.main-slider_arrow.right'),
    // appendDots: $('.main-slider_dots'),
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });


});
