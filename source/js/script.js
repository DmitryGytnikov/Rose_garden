'use strict';

// Бургер
let burger = document.querySelector(`.header-middle__btn`);
let headerBottomMenu = document.querySelector(`.header-burger-menu`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-middle__btn--active`);
  headerBottomMenu.classList.toggle(`header-burger-menu--active`);
});


// Появление меню "Фильтры" (мобильная версия) на catalog.html
let filtersButton = document.querySelector(`.catalog__filters-button`);
let filtersMenu = document.querySelector(`.catalog__filters-inner`);
let filtersButtonSubmit = document.querySelector(`.form-filters__submit-btn`);

if (filtersButton && filtersMenu && filtersButtonSubmit) {
  filtersButton.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    filtersMenu.classList.toggle(`catalog__filters-inner--active`);
  });

  filtersButtonSubmit.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    filtersMenu.classList.toggle(`catalog__filters-inner--active`);
  });
}


//Ссылки "delivery__links" для прокручивания к нужному тегу на delivery.html
let hiddenElement1 = document.getElementById("myElementToScroll-1");
let btn1 = document.querySelector('.delivery__link-1');
if (hiddenElement1 && btn1) {
  function handleButtonClick1() {
    hiddenElement1.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn1.addEventListener('click', handleButtonClick1);
}

let hiddenElement2 = document.getElementById("myElementToScroll-2");
let btn2 = document.querySelector('.delivery__link-2');
if (hiddenElement2 && btn2) {
  function handleButtonClick2() {
    hiddenElement2.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn2.addEventListener('click', handleButtonClick2);
}

let hiddenElement3 = document.getElementById("myElementToScroll-3");
let btn3 = document.querySelector('.delivery__link-3');
if (hiddenElement3 && btn3) {
  function handleButtonClick3() {
    hiddenElement3.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn3.addEventListener('click', handleButtonClick3);
}

let hiddenElement4 = document.getElementById("myElementToScroll-4");
let btn4 = document.querySelector('.delivery__link-4');
if (hiddenElement4 && btn4) {
  function handleButtonClick4() {
    hiddenElement4.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn4.addEventListener('click', handleButtonClick4);
}

let hiddenElement5 = document.getElementById("myElementToScroll-5");
let btn5 = document.querySelector('.delivery__link-5');
if (hiddenElement5 && btn5) {
  function handleButtonClick5() {
    hiddenElement5.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn5.addEventListener('click', handleButtonClick5);
}


//Ссылка "Все характеристики"" для прокручивания к нужному тегу на catalog-item-1.html
let hiddenElement6 = document.getElementById("myElementToScroll-6");
let btn6 = document.querySelector('.info-link');
if (hiddenElement6 && btn6) {
  function handleButtonClick6() {
    hiddenElement6.scrollIntoView({block: "start", behavior: "smooth"});
  }
  btn6.addEventListener('click', handleButtonClick6);
}


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


  // Аккордион "Категории" на catalog.html
  $('.catalog__accordion-link').click(function(e) {

    if($('.catalog__accordion').hasClass('accordion--one')) {
      $('.catalog__accordion-link').not($(this)).removeClass('accordion--active');
      $('.accordion__link-list').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active').next().slideToggle(300);

  });


  // Выпадающее меню "Показать все" на catalog.html
  $('.form-filters__accordion-item').click(function(e) {
    $(this).toggleClass('accordion--active').next().slideToggle(300);

    $(this).closest('.form-filters__checkbox-all').toggleClass('accordion--active');
  });


  // Табы ("Характеристики") на catalog-item-1.html
  $('.tab-1').click(function(e) {
    e.preventDefault();
    $($(this).closest('.card__tab').find('li').find('.tab-1')).removeClass('tab--active-1');
    $($(this).closest('.card__tab').find('.merchandise__content-wr').find('ul')).removeClass('tabs-content--active-1');

    $(this).addClass('tab--active-1');
    $($(this).attr('href')).addClass('tabs-content--active-1');
  });


// Большой слайдер презентации на card.html
  $('.presentation__slider-big-catalog').slick({
    dots: false,
    fade: true,
    arrows: false,
    asNavFor: ".presentation__slider-small",

    responsive: [{
      breakpoint: 581,
      settings: {
        dots: true
      }
    }]
  });


// Маленький слайдер презентации на card.html
  $('.presentation__slider-small').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".presentation__slider-big-catalog",
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true
  });

});
