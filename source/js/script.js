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


// jQuery : How To Fix the “$ is not a function” Error Using noConflict
  var $jq = jQuery.noConflict();


// Закрытие попапа fancybox по Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    // $.fancybox.close();
    $jq.fancybox.close();
  }
});

// jQuery : How To Fix the “$ is not a function” Error Using noConflict
$jq(document).ready(function() {

  // Главный слайдер на main.html
  $jq('.presentation__slider-big').slick({
    dots: true,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // variableWidth: true,
    prevArrow: $jq('.presentation__button-slider--left'),
    nextArrow: $jq('.presentation__button-slider--right'),
  });


  // Cлайдер main__about-slider на main.html
  $jq('.main__about-slider').slick({
    dots: true,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // variableWidth: true,
    prevArrow: $jq('.presentation__button-slider--left-1'),
    nextArrow: $jq('.presentation__button-slider--right-1'),
    // appendDots: $jq('.main__about-slider-dots'),
  });


  // Cлайдер product-card-slider на main.html
  $jq('.product-card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left-slider-big-1.svg"></button>',
    // nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right-slider-big-1.svg"></button>',
    prevArrow: $jq('.main-filters__button-slider--left'),
    nextArrow: $jq('.main-filters__button-slider--right'),

    // margin: 140,
    // padding: 100,
    responsive: [{
      breakpoint: 1377,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 1090,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        // variableWidth: true,
        // centerMode: true,
        // centerPadding: '25px',
        // margin: 0,
      }
    }, {
      breakpoint: 661,
      settings: {
        slidesToShow: 2,
        // variableWidth: true,
        centerMode: false,
        // centerPadding: '25px',
        // margin: 0,
      }
    }, {
      breakpoint: 496,
      settings: {
        slidesToShow: 3,
        // variableWidth: true,
        centerMode: false,
        // centerMode: true,
        // centerPadding: '25px',
        // margin: 0,
      }

    }]
  });


  // Cлайдер main__about-slider на main.html
  $jq('.about__qualification-slider').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $jq('.presentation__button-slider--left-2'),
    nextArrow: $jq('.presentation__button-slider--right-2'),

    responsive: [{
      breakpoint: 760,
      settings: {
        dots: true,
        arrows: false,
      }
    }]
  });


// Большой слайдер презентации на card.html
  $jq('.presentation__slider-big-catalog').slick({
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
  $jq('.presentation__slider-small').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".presentation__slider-big-catalog",
    // centerMode: true,
    // centerPadding: '0',
    focusOnSelect: true
  });

});


// $(function () {
$jq(document).ready(function() {

  // Фильтр на main.html
  $jq('.main-filters__button').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('main-filters__button--active');
    $jq('.main-filters__button').not($jq(this)).removeClass('main-filters__button--active');
  });


  // Выпадающее меню "Фильтр" на main.html
  $jq('.main-filters__options-current').click(function(e) {
    e.preventDefault();

    $jq(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $jq('.main-filters__option').click(function(e) {
    e.preventDefault();
    $jq('.main-filters__options-current').removeClass('accordion--active');
    $jq(this).closest('.main-filters__options-list').slideUp(300);

    var text_search = $jq(this).text();
    //console.log(text_search);
    $jq('.main-filters__options-current').text(text_search);
  });


  // Прелоадер на карточке товара
  $jq('.product-card__basket').click(function(e) {
    e.preventDefault();

    $jq(this).toggleClass('product-card__basket--hidden');
    $jq(this).closest('.product-card__basket-box').find('.product-card__preloader').addClass('product-card__preloader--active');
    var xxx = $jq(this);

    // after 0.7 seconds
      setTimeout(function(){
        // console.log(45);
        xxx.closest('.product-card__basket-box').find('.product-card__preloader').removeClass('product-card__preloader--active');
        xxx.closest('.product-card__basket-box').find('.product-card__basket-quantity').addClass('product-card__basket-quantity--active');
      }, 700);

  });


  // Фильтр на catalog.html
  $jq('.catalog__box-button').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('catalog__box-button--active');
    $jq('.catalog__box-button').not($jq(this)).removeClass('catalog__box-button--active');
  });


  // Выпадающее меню сортировки на catalog.html
  $jq('.catalog__box-sort-current').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $jq('.catalog__box-sort-option').click(function(e) {
    e.preventDefault();
    $jq('.catalog__box-sort-current').removeClass('accordion--active');
    $jq(this).closest('.catalog__box-sort-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $jq('.catalog__box-sort-current').text(text_search);
  });


  // Аккордион "Категории" на catalog.html
  $jq('.catalog__accordion-link').click(function(e) {

    if($jq('.catalog__accordion').hasClass('accordion--one')) {
      $jq('.catalog__accordion-link').not($jq(this)).removeClass('accordion--active-1');
      $jq('.accordion__link-list').not($jq(this).next()).slideUp(300);
    }

    $jq(this).toggleClass('accordion--active-1').next().slideToggle(300);

    // $jq(this).removeClass('accordion--active-gray');
    $jq('.catalog__accordion-link').not($jq(this)).addClass('accordion--active-gray');

    // if($jq('.catalog__accordion-link').hasClass('accordion--active')) {
    //   $jq('.catalog__accordion-link').not($jq(this)).removeClass('accordion--active-gray');
    //  }
    // else {
    //     $jq(this).removeClass('accordion--active-gray');
    //     $jq('.catalog__accordion-link').not($jq(this)).addClass('accordion--active-gray');
    //   }

// 1
    // $jq(this).removeClass('accordion--active-gray');
    // $jq('.catalog__accordion-link').not($jq(this)).addClass('accordion--active-gray');

// 2
//     $jq(this).removeClass('accordion--active-gray');
//     $jq('.catalog__accordion-link').not($jq(this)).removeClass('accordion--active-gray');

// 3
//     $jq(this).removeClass('accordion--active-gray');
//     $jq('.catalog__accordion-link').not($jq(this)).addClass('accordion--active-gray');
  });

  $jq('.accordion--active-1').click(function(e) {
    $jq('.catalog__accordion-link').removeClass('accordion--active-gray');

  });

  // Выпадающее меню "Показать все" на catalog.html
  $jq('.form-filters__accordion-item').click(function(e) {
    $jq(this).toggleClass('accordion--active').next().slideToggle(300);

    $jq(this).closest('.form-filters__checkbox-all').toggleClass('accordion--active');
  });


  // Табы ("Характеристики") на catalog-item-1.html
  $jq('.tab-1').click(function(e) {
    e.preventDefault();
    $jq($jq(this).closest('.card__tab').find('li').find('.tab-1')).removeClass('tab--active-1');
    $jq($jq(this).closest('.card__tab').find('.merchandise__content-wr').find('ul')).removeClass('tabs-content--active-1');

    $jq(this).addClass('tab--active-1');
    $jq($jq(this).attr('href')).addClass('tabs-content--active-1');
  });




  // jQuery-плагин для установки курсора в определенной позиции pos (для mask):
  $jq.fn.setCursorPosition = function(pos) {
    if ($jq(this).get(0).setSelectionRange) {
      $jq(this).get(0).setSelectionRange(pos, pos);
    } else if ($jq(this).get(0).createTextRange) {
      var range = $jq(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  // Решение проблемы с кликом по центру(для mask):
  $jq('.input-box__tel-input').click(function(){
    $jq(this).setCursorPosition(3);
    }).mask("+7(999) 999-99-99",{autoclear: false});


// Закрытие попапа "Заявка отправлена" и "Ваша заказ оформлен"" по нажатию на кнопку "Хорошо"
  $jq('.feedback-call__btn-ok').click(function(e) {
    $jq.fancybox.close();
    $jq.fancybox.close();
  });

// Закрытие попапов  по нажатию на крестик
  $jq('.popap-feedback-call-close').click(function(e) {
    $jq.fancybox.close();
    $jq.fancybox.close();
  });

  // Выпадающий текст "Подробнее о заказе"" на попапе catalog.html
  $jq('.popap__accordion-link').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('accordion--active').next().slideToggle(300);
  });

});
