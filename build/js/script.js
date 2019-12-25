/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! exports provided: filterEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterEntity\", function() { return filterEntity; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Filter =\n/*#__PURE__*/\nfunction () {\n  function Filter(complex, finishDates, rooms) {\n    var _this = this;\n\n    _classCallCheck(this, Filter);\n\n    this.complex = complex || [];\n    this.finishDates = finishDates || [];\n    this.rooms = rooms || [];\n    this.flatsList = [];\n    this.ready = false;\n    this.startFlatCounterRender = 0;\n    this.currentPagination = 9;\n    this.counterElement = document.querySelector('.obj-filter__results-text') ? document.querySelector('.obj-filter__results-text').querySelector('span') : null;\n    var loadMoreButton = document.querySelector('.load-more');\n\n    if (loadMoreButton) {\n      loadMoreButton.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this.renderFlatsList(true);\n      });\n    }\n  }\n\n  _createClass(Filter, [{\n    key: \"defineComplexName\",\n    value: function defineComplexName(str) {\n      if (str === 'cd') {\n        return 'ЖК Верхний';\n      }\n\n      if (str === 'p') {\n        return 'ЖК Павловский';\n      }\n\n      if (str === 'pr') {\n        return 'ЖК Премьер';\n      }\n\n      return 'МКР Центральный';\n    }\n  }, {\n    key: \"defineFlatType\",\n    value: function defineFlatType(str) {\n      if (str === '1') {\n        return '1-комнатная квартира';\n      }\n\n      if (str === '2') {\n        return '2-комнатная квартира';\n      }\n\n      if (str === '3') {\n        return '3-комнатная квартира';\n      }\n\n      return 'Студия';\n    }\n  }, {\n    key: \"parseJSONMessage\",\n    value: function parseJSONMessage(str) {\n      var result;\n\n      try {\n        result = JSON.parse(str);\n      } catch (e) {\n        console.error('cannot parse json');\n      }\n\n      return result;\n    }\n  }, {\n    key: \"setFilterOption\",\n    value: function setFilterOption(option, value) {\n      this[option] = value;\n      console.log(option, value);\n      var filteredArray = this.filterFlatsList();\n      this.counterElement.innerHTML = filteredArray.length; // if (option === 'ready') {\n      //   this.complex = [];\n      //   this.rooms = [];\n      //   document\n      //     .querySelector('.obj-filter__rooms-wrap')\n      //     .querySelectorAll('input[type=\"checkbox\"]')\n      //     .forEach(function(sel) {\n      //       sel.checked = false;\n      //     });\n      // } else {\n      //   this.ready = false;\n      //   document.querySelector('.obj-filter__build-apartments-btn').style = '';\n      // }\n    }\n  }, {\n    key: \"renderFlatsList\",\n    value: function renderFlatsList(noclear) {\n      var wrapper = document.querySelector('.object__list');\n\n      if (!noclear) {\n        wrapper.innerHTML = '';\n      }\n\n      var listPreparedForRender = this.filterFlatsList();\n\n      for (var i = this.startFlatCounterRender; i < this.currentPagination; i++) {\n        if (listPreparedForRender[i]) {\n          var priceFormatted = listPreparedForRender[i].priceFlat.slice(0, 1) + ' ' + listPreparedForRender[i].priceFlat.slice(1, 4) + ' ' + listPreparedForRender[i].priceFlat.slice(4);\n          wrapper.innerHTML += \"<div class=\\\"object-block__item product-card\\\"><a href=\\\"\".concat(listPreparedForRender[i].link_flats, \"\\\" target=\\\"_blank\\\" class=\\\"product-card__link\\\">\\n        <div class=\\\"product-card__img product-card__img--frame\\\">\\n          <img\\n            src=\\\"\").concat(listPreparedForRender[i].imgLink, \"\\\"\\n            alt=\\\"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435\\\"\\n          />\\n        </div>\\n        <div\\n          class=\\\"product-card__title product-card__title--second-color\\\"\\n        >\\n          <h3>\").concat(this.defineComplexName(listPreparedForRender[i].complex), \"</h3>\\n        </div>\\n        <div class=\\\"product-card__room-value\\\">\\n          <span>\").concat(listPreparedForRender[i].studio ? 'Студия' : this.defineFlatType(listPreparedForRender[i].roomsQuantity), \"</span>\\n        </div>\\n        <div class=\\\"product-card__object-status\\\">\\n          <span>\\u0421\\u0434\\u0430\\u0435\\u0442\\u0441\\u044F</span>\\n        </div>\\n        <div class=\\\"product-card__square\\\">\\n          <span>\\u041F\\u043B\\u043E\\u0449\\u0430\\u0434\\u044C</span>\\n        </div>\\n        <div class=\\\"product-card__square-value\\\">\\n          <span>\").concat(listPreparedForRender[i].fullFlat, \" \\u043C<sup>2</sup></span>\\n        </div>\\n        <div class=\\\"product-card__footer\\\">\\n          <span\\n            >\").concat(priceFormatted, \" &#8381;\\n            <span class=\\\"product-card__arrow\\\">\\u0441\\u0442\\u0440\\u0435\\u043B\\u043A\\u0430</span>\\n          </span>\\n        </div>\\n      </a></div>\");\n        }\n      }\n\n      var loadMoreButton = document.querySelector('.load-more');\n\n      if (listPreparedForRender.length - this.currentPagination > 0) {\n        this.startFlatCounterRender = this.currentPagination;\n        this.currentPagination = this.currentPagination + 9;\n        loadMoreButton.style.display = 'block';\n      } else {\n        loadMoreButton.style.display = 'none';\n      }\n    }\n  }, {\n    key: \"fetchFlatsList\",\n    value: function fetchFlatsList() {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', './new_jsonFlats.json', false);\n      xhr.send();\n\n      if (xhr.status != 200) {\n        console.error(xhr.status + ': ' + xhr.statusText);\n      } else {\n        var flatsObj = this.parseJSONMessage(xhr.responseText);\n        console.log(flatsObj);\n        var one = flatsObj.one,\n            two = flatsObj.two,\n            three = flatsObj.three,\n            studio = flatsObj.studio;\n        this.flatsList = _toConsumableArray(one).concat(_toConsumableArray(two), _toConsumableArray(three), _toConsumableArray(studio.map(function (s) {\n          return _objectSpread({}, s, {\n            studio: true\n          });\n        })));\n        this.counterElement.innerHTML = this.flatsList.length;\n        this.addEventOnSubmit();\n        var complex = window.location.search.split('=')[1];\n\n        if (window.location.pathname.includes('poisk-kvartir') && !complex) {\n          this.renderFlatsList();\n        }\n      }\n    }\n  }, {\n    key: \"addEventOnSubmit\",\n    value: function addEventOnSubmit() {\n      var _this2 = this;\n\n      // const readyFlatsButton = document.querySelector(\n      //   '.obj-filter__build-apartments-btn'\n      // );\n      document.querySelector('.obj-filter__results-btn').addEventListener('click', function (e) {\n        e.preventDefault();\n        _this2.startFlatCounterRender = 0;\n        _this2.currentPagination = 9;\n\n        _this2.renderFlatsList();\n      }); // readyFlatsButton.addEventListener('click', e => {\n      //   e.preventDefault();\n      //   $('.obj-filter__complex-select').val([]);\n      //   $('.obj-filter__complex-select').trigger('change');\n      //   $('.obj-filter__deadline-select').val([]);\n      //   $('.obj-filter__deadline-select').trigger('change');\n      //   this.setFilterOption('ready', true);\n      //   this.startFlatCounterRender = 0;\n      //   this.currentPagination = 9;\n      //   readyFlatsButton.style.backgroundColor = 'rgba(255, 138, 0, 0.25)';\n      //   readyFlatsButton.style.borderColor = '#fff';\n      //   readyFlatsButton.style.color = '#fff';\n      //   this.renderFlatsList();\n      // });\n    }\n  }, {\n    key: \"filterFlatsList\",\n    value: function filterFlatsList() {\n      var _this3 = this;\n\n      var filteredArray = this.flatsList.filter(function (flat) {\n        var isStudioAndStudiosSelected = _this3.rooms.includes('s') && flat.studio;\n\n        if (_this3.ready) {\n          if (Number(flat.delivery) > 2019) {\n            return false;\n          }\n        }\n\n        if (_this3.rooms.length) {\n          if (!_this3.rooms.includes(flat.roomsQuantity) && !flat.studio) {\n            return false;\n          }\n\n          if (flat.studio && _this3.rooms.length && !_this3.rooms.includes('s')) {\n            return false;\n          }\n        }\n\n        if (_this3.finishDates.length) {\n          if (!_this3.finishDates.includes(flat.delivery)) {\n            return false;\n          }\n        }\n\n        if (_this3.complex.length) {\n          if (!_this3.complex.includes(flat.complex)) {\n            return false;\n          }\n        }\n\n        return true;\n      });\n      return filteredArray;\n    }\n  }]);\n\n  return Filter;\n}();\n\nvar filterEntity = new Filter();\n$(document).ready(function () {\n  if (document.querySelector('.obj-filter__complex-select')) {\n    filterEntity.fetchFlatsList();\n    $('.obj-filter__complex-select').on('change', function (e) {\n      filterEntity.setFilterOption('complex', $(e.target).select2('val'));\n    });\n    $('.obj-filter__deadline-select').on('change', function (e) {\n      filterEntity.setFilterOption('finishDates', $(e.target).select2('val'));\n    });\n    var roomsForm = document.querySelector('.obj-filter__rooms-wrap');\n    var roomsCheckboxes = roomsForm.querySelectorAll('input[type=\"checkbox\"]');\n    var readyCheckbox = document.querySelector('#ready');\n    readyCheckbox.addEventListener('change', function (e) {\n      filterEntity.setFilterOption('ready', e.target.checked);\n    });\n    roomsCheckboxes.forEach(function (sel) {\n      sel.addEventListener('change', function (e) {\n        var newRoomsSelection = [];\n        roomsCheckboxes.forEach(function (check) {\n          if (check.checked) newRoomsSelection.push(check.value);\n        });\n        filterEntity.setFilterOption('rooms', newRoomsSelection);\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/filter.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var openModalBlock = document.querySelector('.open-modal');\n  var openModalOnOrderFlat = document.querySelector('.js-order-flat');\n  var modalContentError = document.querySelector('.modal-content__error');\n  if (!openModalBlock) return;\n\n  if (openModalOnOrderFlat) {\n    openModalOnOrderFlat.addEventListener('click', function (e) {\n      e.preventDefault();\n      modalContentError.textContent = '';\n      document.querySelector('.modal').style.display = 'block';\n    });\n  }\n\n  if (openModalBlock) {\n    openModalBlock.addEventListener('click', function () {\n      modalContentError.textContent = '';\n      document.querySelector('.modal').style.display = 'block';\n    });\n  }\n\n  var closeModalBlock = document.querySelector('.modal-header__close');\n  closeModalBlock.addEventListener('click', function () {\n    document.querySelector('.modal').style.display = 'none';\n  });\n  var modalForm = document.querySelector('.modal-content__form');\n  modalForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var phoneValue = document.getElementById('modal-phone').value.replace(/[- )(]/g, '');\n\n    if (phoneValue.length < 11) {\n      console.log(phoneValue);\n      modalContentError.textContent = 'Введите номер в 11-значном формате 81112223344.';\n      return;\n    }\n\n    var _token = $(\"input[name='_token']\").val();\n\n    $.ajax({\n      url: 'http://ksk21.webconcept21.ru/feedback',\n      method: 'POST',\n      data: $('#modal-form').serialize(),\n      beforeSend: function beforeSend(xhr, type) {\n        xhr.setRequestHeader('X-CSRF-Token', _token);\n      },\n      success: function success() {\n        document.querySelector('.modal-success').style.display = 'block';\n        document.querySelector('.modal').style.display = 'none';\n        setTimeout(function () {\n          return document.querySelector('.modal-success').style.display = 'none';\n        }, 3000);\n      },\n      error: function error() {\n        modalContentError.textContent = 'Произошла ошибка при отправке формы. Попробуйте позднее.';\n      }\n    });\n  });\n  $('#modal-phone').mask('0 (000) 000 00 00');\n});\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n\n$(document).ready(function () {\n  // БУРГЕР\n  $('.main-nav__toggle').click(function (e) {\n    e.preventDefault;\n    $('.main-nav__burger').toggleClass('main-nav__burger--active');\n    $('.main-nav__menu').toggleClass('main-nav__menu--active');\n    $('.page-header__offers-button').toggleClass('page-header__offers-button--active');\n  }); // ВЫПАДАЮЩЕЕ МЕНЮ\n\n  $('.main-nav__link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('main-nav__link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.main-nav__link').not(this).removeClass('main-nav__link--active').next().slideUp();\n    }\n  });\n  $('.page-footer__nav-link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('page-footer__nav-link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.page-footer__nav-link').not(this).removeClass('page-footer__nav-link--active').next().slideUp();\n    }\n  });\n  $('.files-accardion__title').click(function () {\n    $(this).toggleClass('files-accardion__title--active').next().slideToggle();\n    $('.files-accardion__title').not(this).removeClass('files-accardion__title--active').next().slideUp();\n  });\n  $('.specification__tab').click(function () {\n    $('.specification__tab').removeClass('specification__tab--active');\n    $(this).addClass('specification__tab--active');\n    $('.specification__show').removeClass('specification__show--on');\n    $('.specification__show').eq($(this).index()).addClass('specification__show--on');\n  }); //АККАРДИОН КОММЕРЧ ПОМЕЩЕНИЙ\n\n  $('.object-block__show-btn').click(function (e) {\n    e.preventDefault();\n    $(this).toggleClass('object-block__show-btn--active').next().slideToggle();\n    $('.object-block__show-btn').not(this).removeClass('object-block__show-btn--active').next().slideUp();\n  }); // ПРОМО СЛАЙДЕР\n\n  $('.promo__slider').slick({\n    infinite: true,\n    autoplay: true,\n    autoplaySpeed: 5000,\n    slidesToShow: 1,\n    adaptiveHeight: true\n  }); // СЛАЙДЕР ОБЪЕКТОВ\n\n  $('.objects__slider').slick({\n    infinite: false,\n    slidesToShow: 4,\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        centerMode: false,\n        infinite: true,\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        centerMode: true,\n        slidesToShow: 1,\n        swipe: true,\n        swipeToSlide: true,\n        centerPadding: '60px'\n      }\n    }]\n  }); // СЛАЙДЕР ОБЩИЙ ВИД\n\n  $('.pictures-slider').on('init', function (event, slick) {\n    var spanBlock = this.parentNode.querySelector('.specification__counts');\n\n    if (spanBlock) {\n      spanBlock.textContent = slick.slideCount;\n    }\n\n    $('.pictures-slider').css('display', 'block');\n  });\n  $('.pictures-slider').slick({\n    slidesToShow: 1,\n    adaptiveHeight: true\n  });\n  var slider = $('.pictures-slider');\n  $('.pictures-slider').on('afterChange', function (event, slick, currentSlide) {\n    var spanBlock = this.parentNode.querySelector('.specification__current-count');\n\n    if (spanBlock) {\n      spanBlock.textContent = currentSlide + 1;\n    }\n  }); // СЛАЙДЕР ПЛАНИРОВОК\n\n  $('.plans-slider').slick({\n    slidesToShow: 1,\n    adaptiveHeight: true\n  });\n\n  if (document.querySelector('.obj-filter__complex-select')) {\n    $('.obj-filter__complex-select').select2({\n      minimumResultsForSearch: Infinity,\n      placeholder: 'Все',\n      width: '270px',\n      closeOnSelect: false,\n      data: [// {\n      //   obj: 'centr',\n      //   text: 'МКР Центральный',\n      //   id: 'c',\n      // },\n      {\n        obj: 'chd',\n        text: 'ЖК Верхний',\n        id: 'cd'\n      }, // {\n      //   obj: 'saray',\n      //   text: 'ЖК Павловский',\n      //   id: 'p',\n      // },\n      {\n        obj: 'premier',\n        text: 'ЖК Премьер',\n        id: 'pr'\n      }]\n    });\n    $('.obj-filter__deadline-select').select2({\n      minimumResultsForSearch: Infinity,\n      placeholder: 'Все',\n      width: '100%',\n      closeOnSelect: false,\n      data: [{\n        text: '2019 год',\n        id: 2019\n      }, {\n        text: '2020 год',\n        id: 2020\n      }, {\n        text: '2021 год',\n        id: 2021\n      }, {\n        text: '2022 год',\n        id: 2022\n      }]\n    });\n    $('.obj-filter__deadline-select').on('select2:opening select2:closing', function (event) {\n      var $searchfield = $(this).parent().find('.select2-search__field');\n      $searchfield.prop('disabled', true);\n    });\n    $('.obj-filter__complex-select').on('select2:opening select2:closing', function (event) {\n      var $searchfield = $(this).parent().find('.select2-search__field');\n      $searchfield.prop('disabled', true);\n    });\n  }\n\n  var searchQuery = window.location.search;\n  var complex = window.location.search.split('=')[1];\n\n  if (complex) {\n    if (complex === 'pavlovsky') {\n      $('.obj-filter__complex-select').val(['p']);\n      $('.obj-filter__complex-select').trigger('change');\n    } else if (complex === 'centralny') {\n      $('.obj-filter__complex-select').val(['c']);\n      $('.obj-filter__complex-select').trigger('change');\n    } else if (complex === 'verhniy') {\n      $('.obj-filter__complex-select').val(['cd']);\n      $('.obj-filter__complex-select').trigger('change');\n    } else if (complex === 'premier') {\n      $('.obj-filter__complex-select').val(['pr']);\n      $('.obj-filter__complex-select').trigger('change');\n    }\n  }\n\n  if (['pavlovsky', 'centralny', 'verhniy', 'premier'].includes(complex)) {\n    _filter__WEBPACK_IMPORTED_MODULE_0__[\"filterEntity\"].renderFlatsList();\n  }\n\n  var linkShaumyana = document.getElementById('linkSh');\n  var linkKoltushi = document.getElementById('linkKoltushi');\n\n  if (linkShaumyana && linkKoltushi) {\n    var mapWrapper = document.querySelector('.contacts-map');\n    linkShaumyana.addEventListener('click', function (e) {\n      e.preventDefault();\n      mapWrapper.innerHTML = '';\n      var newScript = document.createElement('script');\n      newScript.setAttribute('src', 'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=c78mFLUWc5iUcRZkOF8tx_pebi4uUfEX&amp;width=600&amp;height=450');\n      mapWrapper.appendChild(newScript);\n    });\n    linkKoltushi.addEventListener('click', function (e) {\n      e.preventDefault();\n      mapWrapper.innerHTML = '';\n      var newScript = document.createElement('script');\n      newScript.setAttribute('src', 'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=jNIMSSaft1IBOkd8f3K2eeumIur6-QJG&amp;width=600&amp;height=450');\n      mapWrapper.appendChild(newScript);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./src/js/filter.js ./src/js/modal.js ./src/js/script.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Pro\\ksk\\src\\js\\filter.js */\"./src/js/filter.js\");\n__webpack_require__(/*! C:\\Pro\\ksk\\src\\js\\modal.js */\"./src/js/modal.js\");\nmodule.exports = __webpack_require__(/*! C:\\Pro\\ksk\\src\\js\\script.js */\"./src/js/script.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/filter.js_./src/js/modal.js_./src/js/script.js?");

/***/ })

/******/ });