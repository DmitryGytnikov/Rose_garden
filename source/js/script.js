'use strict';

// Бургер
let burger = document.querySelector(`.header-middle__btn`);
let headerBottomMenu = document.querySelector(`.header-burger-menu`);
let bodyVisible = document.querySelector(`body`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-middle__btn--active`);
  headerBottomMenu.classList.toggle(`header-burger-menu--active`);

  let bodyOverflowHidden = document.querySelector(`.hidden`);
  let activeFilterMenu = document.querySelector(`.catalog__filters-inner--active`);

  if (bodyOverflowHidden) {
    console.log("есть hidden");
    bodyOverflowHidden.classList.remove(`hidden`);
    activeFilterMenu.classList.remove(`catalog__filters-inner--active`);
  }
});


//Появление кнопок соцсетей только в пределах статьи (десктоп)
let socialButton = document.querySelector(`.social__list--hidden-desktop`);

if (document.querySelector(`.article__box`)) {
  let topPos = document.querySelector(`.article__box`).getBoundingClientRect().y;
  console.log(topPos);
}

if (document.documentElement.clientWidth > 1060) {
  if (socialButton && topPos) {
    window.onscroll = function () {
      if (window.pageYOffset > 700 && window.pageYOffset < 3900) {
      // if (topPos > 700 ) {

        socialButton.classList.add(`shown`);
      } else {
        socialButton.classList.remove(`shown`);
      }
    };
  }
}


// Появление кнопок соцсетей только в пределах статьи (моб. версия)
let socialButtonMob = document.querySelector(`.social__list--hidden-mobile`);

if (document.documentElement.clientWidth <= 1060) {
  if (socialButtonMob) {
    window.onscroll = function () {
      if (window.pageYOffset > 940 && window.pageYOffset < 3600) {
        socialButtonMob.classList.add(`shown`);
      } else {
        socialButtonMob.classList.remove(`shown`);
      }
    };
  }
}


// Появление меню "Фильтры" (мобильная версия) на catalog.html
let filtersButton = document.querySelector(`.catalog__filters-button`);
let filtersMenu = document.querySelector(`.catalog__filters-inner`);
let filtersButtonSubmit = document.querySelector(`.form-filters__submit-btn`);
let body = document.querySelector(`.page`);

if (filtersButton && filtersMenu && filtersButtonSubmit) {
  filtersButton.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    filtersMenu.classList.toggle(`catalog__filters-inner--active`);
    window.scrollTo(0, 0);
    body.classList.add(`hidden`);
  });

  filtersButtonSubmit.addEventListener(`click`, function (evt) {
    // evt.preventDefault();
    filtersMenu.classList.toggle(`catalog__filters-inner--active`);
    body.classList.remove(`hidden`);
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
  let slider1 = document.querySelector(`.presentation__slider-big`);
  if (slider1) {
    $jq('.presentation__slider-big').slick({
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      prevArrow: $jq('.presentation__button-slider--left'),
      nextArrow: $jq('.presentation__button-slider--right'),
    });
  }


  // Cлайдер main__about-slider на main.html
  let slider2 = document.querySelector(`.main__about-slider`);
  if (slider2) {
    $jq('.main__about-slider').slick({
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      prevArrow: $jq('.presentation__button-slider--left-1'),
      nextArrow: $jq('.presentation__button-slider--right-1'),
    });
  }


  // Cлайдер product-card-slider на main.html
  let slider3 = document.querySelector(`.product-card-slider`);
  if (slider3) {
    $jq('.product-card-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $jq('.main-filters__button-slider--left'),
      nextArrow: $jq('.main-filters__button-slider--right'),

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
        }
      }, {
        breakpoint: 661,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }, {
        breakpoint: 496,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        }
      }]
    });
  }


  // Cлайдер main__about-slider на main.html
  let slider4 = document.querySelector(`.about__qualification-slider`);
  if (slider4) {
    $jq('.about__qualification-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
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
  }


// Большой слайдер презентации на card.html
  let slider5 = document.querySelector(`.presentation__slider-big-catalog`);
  if (slider5) {
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
  }


// Маленький слайдер презентации на card.html
  let slider6 = document.querySelector(`.presentation__slider-small`);
  if (slider6) {
    $jq('.presentation__slider-small').slick({
      dots: false,
      slidesToShow: 6.4,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      asNavFor: ".presentation__slider-big-catalog",
      // centerMode: true,
      // centerPadding: '0',
      focusOnSelect: true
    });
  }


// Слайдер на catalog.html
  let slider7 = document.querySelector(`.clearfix-slider`);
  if (slider7) {
    $jq('.clearfix-slider').slick({
      dots: false,
      slidesToShow: 5.2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      prevArrow: $jq('.clearfix-slider__button--left'),
      nextArrow: $jq('.clearfix-slider__button--right'),

      responsive: [{
        breakpoint: 1346,
        settings: {
          slidesToShow: 4.8,
        }
      }, {
        breakpoint: 1252,
        settings: {
          slidesToShow: 4.4,
        }
      }, {
        breakpoint: 1136,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 1037,
        settings: {
          slidesToShow: 3.6,
        }
      }, {
        breakpoint: 938,
        settings: {
          slidesToShow: 3.3,
        }
      }, {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 787,
        settings: {
          slidesToShow: 2.7,
        }
      }, {
        breakpoint: 716,
        settings: {
          slidesToShow: 2.4,
        }

      }]
    });
  }
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

    var text_search = $jq(this).text();
    //console.log(text_search);
    $jq('.catalog__box-sort-current').text(text_search);
  });


  // Аккордион "Категории" на catalog.html
  $jq('.catalog__accordion-link').click(function(e) {
    e.preventDefault();

    if($jq(this).hasClass('accordion--active-gray')) {
      if($jq(this).hasClass('accordion--active-1')) {
        // console.log('есть accordion--active-gray и accordion--active-1');
      } else {
          $jq('.catalog__accordion-link').not($jq(this)).toggleClass('accordion--active-gray');
          $jq(this).toggleClass('accordion--active-gray');
        }
        // console.log('есть accordion--active-gray');
    }

    if($jq('.catalog__accordion').hasClass('accordion--one')) {
      $jq('.catalog__accordion-link').not($jq(this)).removeClass('accordion--active-1');
      $jq('.accordion__link-list').not($jq(this).next()).slideUp(300);
    }

    $jq(this).toggleClass('accordion--active-1').next().slideToggle(300);

    $jq('.catalog__accordion-link').not($jq(this)).toggleClass('accordion--active-gray');
    $jq(this).toggleClass('accordion--active-gray');
  });


  // Выпадающее меню "Показать все" на catalog.html
  $jq('.form-filters__accordion-item').click(function(e) {
    $jq(this).toggleClass('accordion--active');
    $jq($jq(this).closest('.form-filters__checkbox-all').find('.form-filters__accordion__content')).toggleClass('form-filters__accordion__content--active');
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


  // Закрытие попапа fancybox по Esc (для кастомного крестика)
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      $jq.fancybox.close();
    }
  });


  // Выпадающий текст "Подробнее о заказе"" на попапе catalog.html
  $jq('.popap__accordion-link').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('accordion--active').next().slideToggle(300);
  });


  // Кнопка "Подробнее" на catalog-item-1.html
  $jq('.merchandise__content-item-button').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('accordion--active');
    $jq($jq(this).closest('.merchandise__content-item').find('p').find('.merchandise__content-list-text-hidden')).toggleClass('merchandise__content-list-text-hidden--active');
  });


  // Кнопка "Все характеристики" (моб.версия)  на catalog-item-1.html
  $jq('.merchandise__content-item-button-1').click(function(e) {
    e.preventDefault();
    $jq(this).toggleClass('accordion--active');
    $jq($jq(this).closest('.merchandise__content-item').find('.merchandise__content-item-table').find('.table-item')).toggleClass('table-item--active');
  });


  // Кнопка "Соц. сетей"  на article.html
  $jq('.social__item-box-link').click(function(e) {
    e.preventDefault();

    $jq(this).toggleClass('social__item-box-link--active');
    $jq($jq(this).closest('.social__list').find('.social__item--hidden')).toggleClass('social__item--hidden-active');
    $jq($jq(this).closest('.social__list')).toggleClass('social__list--active');
  });
});
