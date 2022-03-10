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
  // function openBasketQuantity(){
  //   $(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
  //   $(this).closest('.product-card__basket-box').find('.product-card__basket-quantity').addClass('product-card__basket-quantity--active');
  // }

  // function multiply(x,y) {
  //   return x * y;
  // }

  $('.product-card__basket').click(function(e) {
    e.preventDefault();

    $(this).toggleClass('product-card__basket--hidden');
    $(this).closest('.product-card__basket-box').find('.product-card__preloader').addClass('product-card__preloader--active');

    // setTimeout(function(){$(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('active')}, 3000)



    // setTimeout(function (){

    //   console.log(10);

    // }, 2000);

    // $(document).ready(function() {
    //   setTimeout(console.log(10), 10000);
    // });

// $( document ).ready(function() {
// setTimeout(function() {

//   $('.product-card__basket').click(function(e) {
//     e.preventDefault();
//     $(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
//   });

// console.log(10);
// }, 2000);
// });

    // $(this).closest('.product-card__basket-box').find('.product-card__preloader').addClass('product-card__preloader--active').delay(2000).removeClass('product-card__preloader--active');

    // setTimeout(openBasketQuantity, 2000);

    // setTimeout(
    //  $(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active')
    //     , 4000 );

    //hide a div after 4 seconds
      // setTimeout(function(){
      //   // jQuery("#div1").hide();
      //   $(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
      //   $(this).closest('.product-card__basket-box').find('.product-card__basket-quantity').addClass('product-card__basket-quantity--active');
      // }, 4000);


// .delay( 800 )
      // $(this).closest('.product-card__basket-box').find('.product-card__preloader').delay(2000).removeClass('product-card__preloader--active');
      // $(this).closest('.product-card__basket-box').find('.product-card__basket-quantity').delay(2000).addClass('product-card__basket-quantity--active');


    // setTimeout(function(){
    //   $(this).closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
    //   $(this).closest('.product-card__basket-box').find('.product-card__basket-quantity').addClass('product-card__basket-quantity--active');
    // }, 2000);

  });

});
