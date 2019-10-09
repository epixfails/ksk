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

  if (document.querySelector('.obj-filter__complex-select')) {
    $('.obj-filter__complex-select').select2({
      minimumResultsForSearch: Infinity,
      placeholder: 'Все',
      width: '270px',
      closeOnSelect: false,
      data: [
        // {
        //   obj: 'centr',
        //   text: 'МКР Центральный',
        //   id: 'c',
        // },
        {
          obj: 'chd',
          text: 'ЖК Верхний',
          id: 'cd',
        },
        // {
        //   obj: 'saray',
        //   text: 'ЖК Павловский',
        //   id: 'p',
        // },
        {
          obj: 'premier',
          text: 'ЖК Премьер',
          id: 'pr',
        },
      ],
    });

    $('.obj-filter__deadline-select').select2({
      minimumResultsForSearch: Infinity,
      placeholder: 'Все',
      width: '100%',
      closeOnSelect: false,
      data: [
        {
          text: '2019 год',
          id: 2019,
        },
        {
          text: '2020 год',
          id: 2020,
        },
        {
          text: '2021 год',
          id: 2021,
        },
        {
          text: '2022 год',
          id: 2022,
        },
      ],
    });

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
  }

  const searchQuery = window.location.search;
  const complex = window.location.search.split('=')[1];
  if (complex) {
    if (complex === 'pavlovsky') {
      $('.obj-filter__complex-select').val(['p']);
      $('.obj-filter__complex-select').trigger('change');
    } else if (complex === 'centralny') {
      $('.obj-filter__complex-select').val(['c']);
      $('.obj-filter__complex-select').trigger('change');
    } else if (complex === 'verhniy') {
      $('.obj-filter__complex-select').val(['cd']);
      $('.obj-filter__complex-select').trigger('change');
    } else if (complex === 'premier') {
      $('.obj-filter__complex-select').val(['pr']);
      $('.obj-filter__complex-select').trigger('change');
    }
  }

  if (['pavlovsky', 'centralny', 'verhniy', 'premier'].includes(complex)) {
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
