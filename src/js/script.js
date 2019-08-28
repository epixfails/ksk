$(document).ready(function() {
  // БУРГЕР
  $('.main-nav__toggle').click(function(e) {
    e.preventDefault;
    $('.main-nav__burger').toggleClass('main-nav__burger--active');
    $('.main-nav__menu').toggleClass('main-nav__menu--active');
    $('.page-header__offers-button').toggleClass(
      'page-header__offers-button--active'
    );
  });

  // ВЫПАДАЮЩЕЕ МЕНЮ
  $('.main-nav__link').click(function() {
    var width = $(window).width();

    $(this)
      .toggleClass('main-nav__link--active')
      .next()
      .slideToggle();

    if (width >= 1200) {
      $('.main-nav__link')
        .not(this)
        .removeClass('main-nav__link--active')
        .next()
        .slideUp();
    }
  });

  $('.page-footer__nav-link').click(function() {
    var width = $(window).width();

    $(this)
      .toggleClass('page-footer__nav-link--active')
      .next()
      .slideToggle();

    if (width >= 1200) {
      $('.page-footer__nav-link')
        .not(this)
        .removeClass('page-footer__nav-link--active')
        .next()
        .slideUp();
    }
  });

  $('.files-accardion__title').click(function() {
    $(this)
      .toggleClass('files-accardion__title--active')
      .next()
      .slideToggle();
    $('.files-accardion__title')
      .not(this)
      .removeClass('files-accardion__title--active')
      .next()
      .slideUp();
  });

  $('.specification__tab').click(function() {
    $('.specification__tab').removeClass('specification__tab--active');
    $(this).addClass('specification__tab--active');
    $('.specification__show').removeClass('specification__show--on');
    $('.specification__show')
      .eq($(this).index())
      .addClass('specification__show--on');
  });

  //АККАРДИОН КОММЕРЧ ПОМЕЩЕНИЙ
  $('.object-block__show-btn').click(function(e) {
    e.preventDefault();

    $(this)
      .toggleClass('object-block__show-btn--active')
      .next()
      .slideToggle();
    $('.object-block__show-btn')
      .not(this)
      .removeClass('object-block__show-btn--active')
      .next()
      .slideUp();
  });

  // ПРОМО СЛАЙДЕР
  $('.promo__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  // СЛАЙДЕР ОБЪЕКТОВ
  $('.objects__slider').slick({
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          swipe: true,
          swipeToSlide: true,
          centerPadding: '60px',
        },
      },
    ],
  });

  // СЛАЙДЕР ОБЩИЙ ВИД
  $('.pictures-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  // СЛАЙДЕР ПЛАНИРОВОК
  $('.plans-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  //СЕЛЕКТ ФОРМЫ
  $('.obj-filter__complex-select').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Все',
    width: '270px',
    closeOnSelect: false,
  });

  $('.obj-filter__deadline-select').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Все',
    width: '100%',
    closeOnSelect: false,
  });

  $('.obj-filter__rooms-sel-select').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Все',
    width: '270px',
    closeOnSelect: false,
  });

  // disable search

  $('.obj-filter__rooms-sel-select').on(
    'select2:opening select2:closing',
    function(event) {
      var $searchfield = $(this)
        .parent()
        .find('.select2-search__field');
      $searchfield.prop('disabled', true);
    }
  );

  $('.obj-filter__deadline-select').on(
    'select2:opening select2:closing',
    function(event) {
      var $searchfield = $(this)
        .parent()
        .find('.select2-search__field');
      $searchfield.prop('disabled', true);
    }
  );

  $('.obj-filter__complex-select').on(
    'select2:opening select2:closing',
    function(event) {
      var $searchfield = $(this)
        .parent()
        .find('.select2-search__field');
      $searchfield.prop('disabled', true);
    }
  );
});
