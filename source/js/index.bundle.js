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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isHeaderShrink = false;\nvar firstScreen = document.querySelector('.first-screen');\nvar header = document.querySelector('.header-wrapper');\nvar menuBar = document.querySelector('.menu-bar');\nvar mobileMenu = document.querySelector('.mobile-menu');\nvar isMobileMenuHidden = true;\n\nwindow.addEventListener('scroll', function (ev) {\n    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);\n    var limit = firstScreen ? window.innerHeight / 2 : 0;\n    if (firstScreen && scrollTop < window.innerHeight) {\n        firstScreen.style.webkitTransform = 'translateY(' + -scrollTop / 4 + 'px)';\n        firstScreen.style.MozTransform = 'translateY(' + -scrollTop / 4 + 'px)';\n        firstScreen.style.msTransform = 'translateY(' + -scrollTop / 4 + 'px)';\n        firstScreen.style.transform = 'translateY(' + -scrollTop / 4 + 'px)';\n    }\n    if (!isHeaderShrink && scrollTop > limit) {\n        isHeaderShrink = true;\n        header.classList.add('header-wrapper--shrink');\n    } else if (isHeaderShrink && scrollTop <= 50) {\n        isHeaderShrink = false;\n        header.classList.remove('header-wrapper--shrink');\n    }\n});\n\nmenuBar.addEventListener('click', function (ev) {\n    if (isMobileMenuHidden) {\n        isMobileMenuHidden = false;\n        mobileMenu.classList.add('mobile-menu--show');\n    } else {\n        isMobileMenuHidden = true;\n        mobileMenu.classList.remove('mobile-menu--show');\n    }\n});\n\nfunction throttle(fn, wait) {\n    var that = this;\n    var args = arguments;\n    var prev = void 0;\n    var isFirst = true;\n    return function () {\n        var now = +new Date();\n        if (isFirst) {\n            fn.apply(that, args);\n            isFirst = false;\n            prev = +new Date();\n            return;\n        }\n        if (now - prev > wait) {\n            fn.apply(that, args);\n            prev = now;\n        }\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzgzOWEiXSwibmFtZXMiOlsiaXNIZWFkZXJTaHJpbmsiLCJmaXJzdFNjcmVlbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsIm1lbnVCYXIiLCJtb2JpbGVNZW51IiwiaXNNb2JpbGVNZW51SGlkZGVuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2Iiwic2Nyb2xsVG9wIiwiTWF0aCIsIm1heCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJsaW1pdCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJNb3pUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRocm90dGxlIiwiZm4iLCJ3YWl0IiwidGhhdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJwcmV2IiwiaXNGaXJzdCIsIm5vdyIsIkRhdGUiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsS0FBckI7QUFDQSxJQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsSUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBYjtBQUNBLElBQUlFLFVBQVVILFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZDtBQUNBLElBQUlHLGFBQWFKLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxJQUFJSSxxQkFBcUIsSUFBekI7O0FBRUFDLE9BQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQVNDLEVBQVQsRUFBYTtBQUMzQyxRQUFJQyxZQUFZQyxLQUFLQyxHQUFMLENBQVNYLFNBQVNZLElBQVQsQ0FBY0gsU0FBdkIsRUFBa0NULFNBQVNhLGVBQVQsQ0FBeUJKLFNBQTNELENBQWhCO0FBQ0EsUUFBSUssUUFBUWYsY0FBY08sT0FBT1MsV0FBUCxHQUFxQixDQUFuQyxHQUF1QyxDQUFuRDtBQUNBLFFBQUloQixlQUFlVSxZQUFZSCxPQUFPUyxXQUF0QyxFQUFtRDtBQUMvQ2hCLG9CQUFZaUIsS0FBWixDQUFrQkMsZUFBbEIsbUJBQWtELENBQUVSLFNBQUYsR0FBYyxDQUFoRTtBQUNBVixvQkFBWWlCLEtBQVosQ0FBa0JFLFlBQWxCLG1CQUErQyxDQUFFVCxTQUFGLEdBQWMsQ0FBN0Q7QUFDQVYsb0JBQVlpQixLQUFaLENBQWtCRyxXQUFsQixtQkFBOEMsQ0FBRVYsU0FBRixHQUFjLENBQTVEO0FBQ0FWLG9CQUFZaUIsS0FBWixDQUFrQkksU0FBbEIsbUJBQTRDLENBQUVYLFNBQUYsR0FBYyxDQUExRDtBQUNIO0FBQ0QsUUFBSSxDQUFDWCxjQUFELElBQW1CVyxZQUFZSyxLQUFuQyxFQUEwQztBQUN0Q2hCLHlCQUFpQixJQUFqQjtBQUNBSSxlQUFPbUIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsd0JBQXJCO0FBQ0gsS0FIRCxNQUdPLElBQUl4QixrQkFBa0JXLGFBQVksRUFBbEMsRUFBc0M7QUFDekNYLHlCQUFpQixLQUFqQjtBQUNBSSxlQUFPbUIsU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0Isd0JBQXhCO0FBQ0g7QUFDSixDQWhCRDs7QUFrQkFwQixRQUFRSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxFQUFWLEVBQWM7QUFDNUMsUUFBSUgsa0JBQUosRUFBd0I7QUFDcEJBLDZCQUFxQixLQUFyQjtBQUNBRCxtQkFBV2lCLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLG1CQUF6QjtBQUNILEtBSEQsTUFHTztBQUNIakIsNkJBQXFCLElBQXJCO0FBQ0FELG1CQUFXaUIsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsbUJBQTVCO0FBQ0g7QUFDSixDQVJEOztBQVVBLFNBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QixRQUFJQyxPQUFPLElBQVg7QUFDQSxRQUFJQyxPQUFPQyxTQUFYO0FBQ0EsUUFBSUMsYUFBSjtBQUNBLFFBQUlDLFVBQVUsSUFBZDtBQUNBLFdBQU8sWUFBWTtBQUNmLFlBQUlDLE1BQU0sQ0FBQyxJQUFJQyxJQUFKLEVBQVg7QUFDQSxZQUFJRixPQUFKLEVBQWE7QUFDVE4sZUFBR1MsS0FBSCxDQUFTUCxJQUFULEVBQWVDLElBQWY7QUFDQUcsc0JBQVUsS0FBVjtBQUNBRCxtQkFBTyxDQUFDLElBQUlHLElBQUosRUFBUjtBQUNBO0FBQ0g7QUFDRCxZQUFJRCxNQUFNRixJQUFOLEdBQWFKLElBQWpCLEVBQXVCO0FBQ25CRCxlQUFHUyxLQUFILENBQVNQLElBQVQsRUFBZUMsSUFBZjtBQUNBRSxtQkFBT0UsR0FBUDtBQUNIO0FBQ0osS0FaRDtBQWFIIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNIZWFkZXJTaHJpbmsgPSBmYWxzZTtcbnZhciBmaXJzdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1zY3JlZW4nKTtcbnZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXdyYXBwZXInKTtcbnZhciBtZW51QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmFyJyk7XG52YXIgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudScpO1xudmFyIGlzTW9iaWxlTWVudUhpZGRlbiA9IHRydWU7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihldikge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIGxpbWl0ID0gZmlyc3RTY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIDogMDtcbiAgICBpZiAoZmlyc3RTY3JlZW4gJiYgc2Nyb2xsVG9wIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIGZpcnN0U2NyZWVuLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LSBzY3JvbGxUb3AgLyA0fXB4KWA7XG4gICAgICAgIGZpcnN0U2NyZWVuLnN0eWxlLk1velRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LSBzY3JvbGxUb3AgLyA0fXB4KWA7XG4gICAgICAgIGZpcnN0U2NyZWVuLnN0eWxlLm1zVHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstIHNjcm9sbFRvcCAvIDR9cHgpYDtcbiAgICAgICAgZmlyc3RTY3JlZW4uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstIHNjcm9sbFRvcCAvIDR9cHgpYDtcbiAgICB9XG4gICAgaWYgKCFpc0hlYWRlclNocmluayAmJiBzY3JvbGxUb3AgPiBsaW1pdCkge1xuICAgICAgICBpc0hlYWRlclNocmluayA9IHRydWU7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItd3JhcHBlci0tc2hyaW5rJyk7XG4gICAgfSBlbHNlIGlmIChpc0hlYWRlclNocmluayAmJiBzY3JvbGxUb3AgPD01MCkge1xuICAgICAgICBpc0hlYWRlclNocmluayA9IGZhbHNlO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLXdyYXBwZXItLXNocmluaycpO1xuICAgIH1cbn0pO1xuXG5tZW51QmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKGlzTW9iaWxlTWVudUhpZGRlbikge1xuICAgICAgICBpc01vYmlsZU1lbnVIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbWVudS0tc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzTW9iaWxlTWVudUhpZGRlbiA9IHRydWU7XG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW1lbnUtLXNob3cnKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHByZXY7XG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSArbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldiA9ICtuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub3cgLSBwcmV2ID4gd2FpdCkge1xuICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gICAgICAgICAgICBwcmV2ID0gbm93O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tbW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2UuY3NzPzEyZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2Jhc2UuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzPzM3YTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2dpdGh1Yi1oaWdobGlnaHQuY3NzPzQ3NTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2dpdGh1Yi1oaWdobGlnaHQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3M/ZDc4NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvZ2l0aHViLW1hcmtkb3duLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3ByZXYtbmV4dC5jc3M/ODkyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvcHJldi1uZXh0LmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * the long shadow of name in the first-screen\n */\nfunction getLongShadow() {\n    var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '212,213,213';\n    var shadowLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n    var ratioX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n    var ratioY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n\n    var textShadow = '';\n    var alpha = void 0;\n    var color = void 0;\n    var seperator = ',';\n\n    for (var i = 0.5; i <= shadowLength; i = i + 0.5) {\n        alpha = (1 - (i - 0.5) / shadowLength) * 0.6;\n        color = 'rgba(' + startColor + ', ' + alpha + ')';\n        if (i === shadowLength) {\n            seperator = '';\n        }\n        textShadow += i * ratioX + 'px ' + i * ratioY + 'px ' + color + seperator;\n    }\n    return textShadow;\n}\n\n/**\n * dynamic long shadow\n */\nif (name) {\n    name.style.textShadow = getLongShadow('212,213,213', 8);\n    var rect = name.getBoundingClientRect();\n    var focus = { x: rect.left, y: rect.top };\n    var mouse = { x: 0, y: 0 };\n    var width = (window.innerWidth - focus.x) * 3 / 4;\n    var height = (window.innerHeight - focus.y) * 3 / 4;\n    var ratioX = void 0;\n    var ratioY = void 0;\n    firstScreen.addEventListener('mousemove', function (ev) {\n        mouse.x = ev.clientX;\n        mouse.y = ev.clientY;\n        ratioX = (mouse.x - focus.x) / width;\n        ratioY = (mouse.y - focus.y) / height;\n        name.style.textShadow = getLongShadow('212,213,213', 10, ratioX, ratioY);\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9tZS5qcz9hMWFkIl0sIm5hbWVzIjpbImdldExvbmdTaGFkb3ciLCJzdGFydENvbG9yIiwic2hhZG93TGVuZ3RoIiwicmF0aW9YIiwicmF0aW9ZIiwidGV4dFNoYWRvdyIsImFscGhhIiwiY29sb3IiLCJzZXBlcmF0b3IiLCJpIiwibmFtZSIsInN0eWxlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZvY3VzIiwieCIsImxlZnQiLCJ5IiwidG9wIiwibW91c2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImZpcnN0U2NyZWVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiI7O0FBQUE7OztBQUdBLFNBQVNBLGFBQVQsR0FBNkY7QUFBQSxRQUF0RUMsVUFBc0UsdUVBQXpELGFBQXlEO0FBQUEsUUFBMUNDLFlBQTBDLHVFQUEzQixDQUEyQjtBQUFBLFFBQXhCQyxNQUF3Qix1RUFBZixDQUFlO0FBQUEsUUFBWkMsTUFBWSx1RUFBSCxDQUFHOztBQUN6RixRQUFJQyxhQUFhLEVBQWpCO0FBQ0EsUUFBSUMsY0FBSjtBQUNBLFFBQUlDLGNBQUo7QUFDQSxRQUFJQyxZQUFZLEdBQWhCOztBQUVBLFNBQUssSUFBSUMsSUFBSSxHQUFiLEVBQWtCQSxLQUFLUCxZQUF2QixFQUFxQ08sSUFBRUEsSUFBRSxHQUF6QyxFQUE4QztBQUMxQ0gsZ0JBQVEsQ0FBQyxJQUFJLENBQUNHLElBQUksR0FBTCxJQUFZUCxZQUFqQixJQUFpQyxHQUF6QztBQUNBSywwQkFBZ0JOLFVBQWhCLFVBQStCSyxLQUEvQjtBQUNBLFlBQUlHLE1BQU1QLFlBQVYsRUFBd0I7QUFDcEJNLHdCQUFZLEVBQVo7QUFDSDtBQUNESCxzQkFBaUJJLElBQUlOLE1BQXJCLFdBQWlDTSxJQUFJTCxNQUFyQyxXQUFpREcsS0FBakQsR0FBeURDLFNBQXpEO0FBQ0g7QUFDRCxXQUFPSCxVQUFQO0FBQ0g7O0FBRUQ7OztBQUdBLElBQUlLLElBQUosRUFBVTtBQUNOQSxTQUFLQyxLQUFMLENBQVdOLFVBQVgsR0FBd0JMLGNBQWMsYUFBZCxFQUE2QixDQUE3QixDQUF4QjtBQUNBLFFBQUlZLE9BQU9GLEtBQUtHLHFCQUFMLEVBQVg7QUFDQSxRQUFJQyxRQUFRLEVBQUVDLEdBQUdILEtBQUtJLElBQVYsRUFBZ0JDLEdBQUdMLEtBQUtNLEdBQXhCLEVBQVo7QUFDQSxRQUFJQyxRQUFRLEVBQUVKLEdBQUcsQ0FBTCxFQUFRRSxHQUFHLENBQVgsRUFBWjtBQUNBLFFBQUlHLFFBQVEsQ0FBQ0MsT0FBT0MsVUFBUCxHQUFvQlIsTUFBTUMsQ0FBM0IsSUFBZ0MsQ0FBaEMsR0FBb0MsQ0FBaEQ7QUFDQSxRQUFJUSxTQUFTLENBQUNGLE9BQU9HLFdBQVAsR0FBcUJWLE1BQU1HLENBQTVCLElBQWlDLENBQWpDLEdBQXFDLENBQWxEO0FBQ0EsUUFBSWQsZUFBSjtBQUNBLFFBQUlDLGVBQUo7QUFDQXFCLGdCQUFZQyxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFVQyxFQUFWLEVBQWM7QUFDcERSLGNBQU1KLENBQU4sR0FBVVksR0FBR0MsT0FBYjtBQUNBVCxjQUFNRixDQUFOLEdBQVVVLEdBQUdFLE9BQWI7QUFDQTFCLGlCQUFTLENBQUNnQixNQUFNSixDQUFOLEdBQVVELE1BQU1DLENBQWpCLElBQXNCSyxLQUEvQjtBQUNBaEIsaUJBQVMsQ0FBQ2UsTUFBTUYsQ0FBTixHQUFVSCxNQUFNRyxDQUFqQixJQUFzQk0sTUFBL0I7QUFDQWIsYUFBS0MsS0FBTCxDQUFXTixVQUFYLEdBQXdCTCxjQUFjLGFBQWQsRUFBNkIsRUFBN0IsRUFBaUNHLE1BQWpDLEVBQXlDQyxNQUF6QyxDQUF4QjtBQUNILEtBTkQ7QUFPSCIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB0aGUgbG9uZyBzaGFkb3cgb2YgbmFtZSBpbiB0aGUgZmlyc3Qtc2NyZWVuXG4gKi9cbmZ1bmN0aW9uIGdldExvbmdTaGFkb3coc3RhcnRDb2xvciA9ICcyMTIsMjEzLDIxMycsIHNoYWRvd0xlbmd0aCA9IDgsIHJhdGlvWCA9IDEsIHJhdGlvWSA9IDEpIHtcbiAgICBsZXQgdGV4dFNoYWRvdyA9ICcnO1xuICAgIGxldCBhbHBoYTtcbiAgICBsZXQgY29sb3I7XG4gICAgbGV0IHNlcGVyYXRvciA9ICcsJztcblxuICAgIGZvciAobGV0IGkgPSAwLjU7IGkgPD0gc2hhZG93TGVuZ3RoOyBpPWkrMC41KSB7XG4gICAgICAgIGFscGhhID0gKDEgLSAoaSAtIDAuNSkgLyBzaGFkb3dMZW5ndGgpICogMC42O1xuICAgICAgICBjb2xvciA9IGByZ2JhKCR7c3RhcnRDb2xvcn0sICR7YWxwaGF9KWA7XG4gICAgICAgIGlmIChpID09PSBzaGFkb3dMZW5ndGgpIHtcbiAgICAgICAgICAgIHNlcGVyYXRvciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRleHRTaGFkb3cgKz0gYCR7aSAqIHJhdGlvWH1weCAke2kgKiByYXRpb1l9cHggJHtjb2xvcn0ke3NlcGVyYXRvcn1gO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dFNoYWRvdztcbn1cblxuLyoqXG4gKiBkeW5hbWljIGxvbmcgc2hhZG93XG4gKi9cbmlmIChuYW1lKSB7XG4gICAgbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gZ2V0TG9uZ1NoYWRvdygnMjEyLDIxMywyMTMnLCA4KTtcbiAgICBsZXQgcmVjdCA9IG5hbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGZvY3VzID0geyB4OiByZWN0LmxlZnQsIHk6IHJlY3QudG9wIH07XG4gICAgbGV0IG1vdXNlID0geyB4OiAwLCB5OiAwIH07XG4gICAgbGV0IHdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gZm9jdXMueCkgKiAzIC8gNDtcbiAgICBsZXQgaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGZvY3VzLnkpICogMyAvIDQ7XG4gICAgbGV0IHJhdGlvWDtcbiAgICBsZXQgcmF0aW9ZO1xuICAgIGZpcnN0U2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBtb3VzZS54ID0gZXYuY2xpZW50WDtcbiAgICAgICAgbW91c2UueSA9IGV2LmNsaWVudFk7XG4gICAgICAgIHJhdGlvWCA9IChtb3VzZS54IC0gZm9jdXMueCkgLyB3aWR0aDtcbiAgICAgICAgcmF0aW9ZID0gKG1vdXNlLnkgLSBmb2N1cy55KSAvIGhlaWdodDtcbiAgICAgICAgbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gZ2V0TG9uZ1NoYWRvdygnMjEyLDIxMywyMTMnLCAxMCwgcmF0aW9YLCByYXRpb1kpO1xuICAgIH0pO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaG9tZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2ZpcnN0LXNjcmVlbi5jc3M/OTI5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvZmlyc3Qtc2NyZWVuLmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\n__webpack_require__(5);\n\n__webpack_require__(4);\n\n__webpack_require__(1);\n\n__webpack_require__(9);\n\n__webpack_require__(6);\n\n__webpack_require__(0);\n\n__webpack_require__(7);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9naXRodWItaGlnaGxpZ2h0LmNzcyc7XG5pbXBvcnQgJy4vY3NzL2Jhc2UuY3NzJztcbmltcG9ydCAnLi9jc3MvZmlyc3Qtc2NyZWVuLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3ByZXYtbmV4dC5jc3MnO1xuXG5pbXBvcnQgJy4vanMvY29tbW9uLmpzJztcbmltcG9ydCAnLi9qcy9ob21lLmpzJztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ })
/******/ ]);