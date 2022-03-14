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


  // Cлайдер product-card-slider на main.html
  $('.product-card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // margin: 20,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 835,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
        // centerPadding: '25px',
        // margin: 0,
      }
    }]
  });


  // Cлайдер main__about-slider на main.html
  $('.about__qualification-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [{
      breakpoint: 760,
      settings: {
        dots: true,
        arrows: false,
      }
    }]
  });


  // Фильтр на main.html
  $('.main-filters__button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('main-filters__button--active');
    $('.main-filters__button').not($(this)).removeClass('main-filters__button--active');
  });


  // Выпадающее меню "Фильтр" на main.html
  $('.main-filters__options-current').click(function(e) {
    e.preventDefault();

    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.main-filters__option').click(function(e) {
    e.preventDefault();
    $('.main-filters__options-current').removeClass('accordion--active');
    $(this).closest('.main-filters__options-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.main-filters__options-current').text(text_search);
  });


  // Прелоадер на карточке товара
  $('.product-card__basket').click(function(e) {
    e.preventDefault();

    $(this).toggleClass('product-card__basket--hidden');
    $(this).closest('.product-card__basket-box').find('.product-card__preloader').addClass('product-card__preloader--active');
    var xxx = $(this);

    // after 4 seconds
      setTimeout(function(){
        // console.log(45);
        xxx.closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
        xxx.closest('.product-card__basket-box').find('.product-card__basket-quantity').addClass('product-card__basket-quantity--active');
      }, 1000);

  });


  // Фильтр на catalog.html
  $('.catalog__box-button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('catalog__box-button--active');
    $('.catalog__box-button').not($(this)).removeClass('catalog__box-button--active');
  });


  // Выпадающее меню сортировки на catalog.html
  $('.catalog__box-sort-current').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.catalog__box-sort-option').click(function(e) {
    e.preventDefault();
    $('.catalog__box-sort-current').removeClass('accordion--active');
    $(this).closest('.catalog__box-sort-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.catalog__box-sort-current').text(text_search);
  });


});
