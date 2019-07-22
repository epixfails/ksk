
$( document ).ready(function() {
  
  // БУРГЕР
  $('.main-nav__toggle').click(function(e) {
    e.preventDefault;
    $('.main-nav__burger').toggleClass('main-nav__burger--active');
    $('.main-nav__menu').toggleClass('main-nav__menu--active');
    $('.page-header__offers-button').toggleClass('page-header__offers-button--active');
  });

  // ВЫПАДАЮЩЕЕ МЕНЮ
  $('.main-nav__link').click(function(){
    var width = $(window).width();

    $(this).toggleClass('main-nav__link--active').next().slideToggle();
    
    if (width >= 1200) {
      $('.main-nav__link').not(this).removeClass('main-nav__link--active').next().slideUp();
    }
  });

  // ПРОМО СЛАЙДЕР
  $('.promo__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // СЛАЙДЕР ОБЪЕКТОВ
  $('.objects__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: Infinity,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          swipe: true,
          swipeToSlide: true,
          centerPadding: '60px',
        }
      }
    ]
  });
});