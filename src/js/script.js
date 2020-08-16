import { filterEntity } from './filter';

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

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });

    $('.back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
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
    infinite: false,
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

  $('.pictures-slider').on('init', function(event, slick) {
    const spanBlock = this.parentNode.querySelector('.specification__counts');
    if (spanBlock) {
      spanBlock.textContent = slick.slideCount;
    }
    $('.pictures-slider').css('display', 'block');
  });

  $('.pictures-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  let slider = $('.pictures-slider');

  $('.pictures-slider').on('afterChange', function(event, slick, currentSlide) {
    const spanBlock = this.parentNode.querySelector(
      '.specification__current-count'
    );
    if (spanBlock) {
      spanBlock.textContent = currentSlide + 1;
    }
  });

  // СЛАЙДЕР ПЛАНИРОВОК
  $('.plans-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  const searchQuery = window.location.search;
  const complex = window.location.search.split('=')[1];
  if (complex) {
    // if (complex === 'pavlovsky') {
    //   $('.obj-filter__complex-select').val(['p']);
    //   $('.obj-filter__complex-select').trigger('change');
    // } else if (complex === 'centralny') {
    //   $('.obj-filter__complex-select').val(['c']);
    //   $('.obj-filter__complex-select').trigger('change');
    // } else
    if (complex === 'verhniy') {
      $('.obj-filter__complex-select').val(['cd']);
      $('.obj-filter__complex-select').trigger('change');
    } else if (complex === 'premier') {
      $('.obj-filter__complex-select').val(['pr']);
      $('.obj-filter__complex-select').trigger('change');
    }
  }

  if (['verhniy', 'premier'].includes(complex)) {
    const complexCheckboxes = document.querySelectorAll('.js-complex')
    let newComplexSelection;
    console.log('complex', complex)
    complexCheckboxes.forEach(function(comp) {
        if(complex === 'verhniy' && comp.value === 'cd'){
          comp.setAttribute('checked', true)
          newComplexSelection = 'cd'
        } else if(complex === 'premier' && comp.value === 'pr') {
          comp.setAttribute('checked', true)
          newComplexSelection = 'pr'
        }
        });
        filterEntity.setFilterOption('complex', newComplexSelection);
        filterEntity.renderFlatsList();
  }

  const linkShaumyana = document.getElementById('linkSh');
  const linkKoltushi = document.getElementById('linkKoltushi');

  if (linkShaumyana && linkKoltushi) {
    const mapWrapper = document.querySelector('.contacts-map');
    linkShaumyana.addEventListener('click', function(e) {
      e.preventDefault();
      mapWrapper.innerHTML = '';
      const newScript = document.createElement('script');
      newScript.setAttribute(
        'src',
        'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=c78mFLUWc5iUcRZkOF8tx_pebi4uUfEX&amp;width=600&amp;height=450'
      );
      mapWrapper.appendChild(newScript);
    });

    linkKoltushi.addEventListener('click', function(e) {
      e.preventDefault();
      mapWrapper.innerHTML = '';
      const newScript = document.createElement('script');
      newScript.setAttribute(
        'src',
        'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=jNIMSSaft1IBOkd8f3K2eeumIur6-QJG&amp;width=600&amp;height=450'
      );
      mapWrapper.appendChild(newScript);
    });
  }
});
