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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  // БУРГЕР\n  $('.main-nav__toggle').click(function (e) {\n    e.preventDefault;\n    $('.main-nav__burger').toggleClass('main-nav__burger--active');\n    $('.main-nav__menu').toggleClass('main-nav__menu--active');\n    $('.page-header__offers-button').toggleClass('page-header__offers-button--active');\n  }); // ВЫПАДАЮЩЕЕ МЕНЮ\n\n  $('.main-nav__link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('main-nav__link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.main-nav__link').not(this).removeClass('main-nav__link--active').next().slideUp();\n    }\n  });\n  $('.page-footer__nav-link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('page-footer__nav-link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.page-footer__nav-link').not(this).removeClass('page-footer__nav-link--active').next().slideUp();\n    }\n  });\n  $('.files-accardion__title').click(function () {\n    $(this).toggleClass('files-accardion__title--active').next().slideToggle();\n    $('.files-accardion__title').not(this).removeClass('files-accardion__title--active').next().slideUp();\n  });\n  $('.specification__tab').click(function () {\n    $('.specification__tab').removeClass('specification__tab--active');\n    $(this).addClass('specification__tab--active');\n    $('.specification__show').removeClass('specification__show--on');\n    $('.specification__show').eq($(this).index()).addClass('specification__show--on');\n  }); // ПРОМО СЛАЙДЕР\n\n  $('.promo__slider').slick({\n    infinite: true,\n    autoplay: true,\n    autoplaySpeed: 5000,\n    slidesToShow: 1,\n    adaptiveHeight: true\n  }); // СЛАЙДЕР ОБЪЕКТОВ\n\n  $('.objects__slider').slick({\n    infinite: true,\n    slidesToShow: 4,\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        centerMode: false,\n        infinite: true,\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        centerMode: true,\n        slidesToShow: 1,\n        swipe: true,\n        swipeToSlide: true,\n        centerPadding: '60px'\n      }\n    }]\n  }); // СЛАЙДЕР ОБЩИЙ ВИД\n\n  $('.pictures-slider').slick({\n    slidesToShow: 1,\n    adaptiveHeight: true\n  });\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });