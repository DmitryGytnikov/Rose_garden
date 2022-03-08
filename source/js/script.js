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
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // variableWidth: true,
  });


  // Cлайдер main__about-slider на main.html
  $('.main__about-slider').slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // variableWidth: true,
  });


});
