module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/william/Escritorio/UNT/frontend-ventas/frejol-camanejo-proyecto-ventas-2019-II/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("body", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "nav-home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      role: "banner",
      "aria-label": "FREJOL",
      className: "jsx-2099197269" + " " + "scene",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      href: "./",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      src: "/static/chicharo.png",
      alt: "image logo",
      width: "50",
      height: "15",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }))))))), __jsx("div", {
      className: "jsx-2099197269" + " " + "modal-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "modal-wrapp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "modal-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2099197269" + " " + "form-heading-h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Iniciar sesi\xF3n")), __jsx("div", {
      className: "jsx-2099197269" + " " + "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("label", {
      for: "username",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Usuario: ")), __jsx("input", {
      type: "Text",
      className: "jsx-2099197269" + " " + "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("label", {
      for: "password",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Contrase\xF1a: "), __jsx("input", {
      type: "Text",
      className: "jsx-2099197269" + " " + "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("button", {
      id: "enter-button",
      type: "submit",
      className: "jsx-2099197269" + " " + "enter-button-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Ingrese")))), __jsx("div", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2099197269" + " " + "alternative-nospacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2099197269" + " " + "create-account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\xBFNo tiene cuenta? "), __jsx("a", {
      href: "",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, " Crear una cuenta."))))))), __jsx("div", {
      role: "region",
      className: "jsx-2099197269" + " " + "help-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "\xBFNecesita ayuda? "), __jsx("a", {
      target: "_blank",
      rel: "help",
      href: "",
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2099197269",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " Contactar con el centro de atenci\xF3n al cliente."))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2099197269",
      __self: this
    }, ".nav-home.jsx-2099197269{background:#fff;border-bottom:1px solid #ececec;height:50px;position:relative;z-index;}.scene.jsx-2099197269{margin:0;width:135px;height:90px;}.box.jsx-2099197269{width:100%;height:100%;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all 0.5s ease-out;transition:all 0.5s ease-out;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;}li.jsx-2099197269 a.jsx-2099197269:hover{cursor:pointer;background-color:#0062ff;border-color :#0062ff;outline-color :#0062ff;}ul.jsx-2099197269{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#fff;}li.jsx-2099197269 a.jsx-2099197269{display:block;width:100px;padding:14px 18px;-webkit-text-decoration:none;text-decoration:none;color:black;}#home.jsx-2099197269 a.jsx-2099197269:before{color:#000;font-size:60px;line-height:65;text-indent:0;top:10px;}body.jsx-2099197269{padding:0rem;margin:0;font-family:\"Helvetica Neue\",Arial,sans-serif;direction :ltr;}h1.jsx-2099197269{font-weight:400;font-family:\"Helvetica Neue\",Arial,sans-serif;}div.jsx-2099197269{display:block;margin:0;border:0;vertical-align:baseline;}#universal-nav.jsx-2099197269{background:#fff;border-bottom:1px solid #ececec;height:50px;position:relative;z-index:2;}.modal-content.jsx-2099197269{background-color:#f4f4f4;margin:0;padding:0;border:0;vertical-align:baseline;}.modal-wrapp.jsx-2099197269{border:0;padding-top:40px;padding-bottom:40px;margin:auto;vertical-align:baseline;object-fit:contain;max-width:550px;}.modal-form.jsx-2099197269{background-color:#fff;margin:0;border:0;vertical-align:baseline;padding:32px 16px;}a.jsx-2099197269{color :#1268fb;-webkit-transition:.3s color;transition:.3s color;-webkit-text-decoration:none;text-decoration:none;font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;cursor:pointer;}span.jsx-2099197269{font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;display:inline;}p.jsx-2099197269{font-size:1rem;line-height:1.625rem;padding:0 0 15px;}input.jsx-2099197269{color:#323232;font-size:1rem;-webkit-writing-mode:horizontal-tb!important;text-rendering:auto;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;cursor:text;text-align:start;display:inline-block;padding:1px 0px;}.enter-button-login.jsx-2099197269{background-color:#0062ff;border-color :#0062ff;outline-color :#0062ff;width:190px;max-width:100%;min-width:160px;text-align:left;color:white;outline:3px solid;margin:8px 0 8px 3px;border:1px solid;font-size:16px;line-height:20px;box-sizing :border-box;cursor:pointer;padding:11px 18px;}.help-section.jsx-2099197269{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGxpYW0vRXNjcml0b3Jpby9VTlQvZnJvbnRlbmQtdmVudGFzL2ZyZWpvbC1jYW1hbmVqby1wcm95ZWN0by12ZW50YXMtMjAxOS1JSS9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXdCLEFBR21DLEFBT1IsQUFLRyxBQU9JLEFBTU0sQUFPUCxBQU9ILEFBT0UsQUFNRyxBQUlGLEFBUUUsQUFRUSxBQU9oQixBQVNZLEFBT04sQUFXRyxBQVFILEFBS0QsQUFhVyxBQWtCUCxTQTlJTCxBQXdFRyxFQW5FSCxBQTJCRyxFQU9OLENBZEcsQUF3QkgsQUErREssQ0FwR1csQUE0RUwsQUFtQkEsQ0FsSFcsQUFvRGMsQUFZZCxFQTBDdkIsQUE0Q1gsR0E5SWMsQUFpQkYsQ0FzQnFDLEFBeUN0QyxDQTNFb0IsQUE0Q25CLEVBZUQsQUE0RGEsQ0FuR0gsQUFPSCxBQXdDSSxDQTJCVixFQWFtQyxDQTlGbEMsQ0ErREYsQ0EvQmdCLENBakQxQixDQWdFVyxFQTBDTyxDQVBSLEdBeEZjLEFBT1AsQUErRFEsQ0FqRFQsR0FQTyxBQXdDYixFQU9FLEFBNEJhLENBd0JELENBcElYLEFBZ0VBLEtBVVksQUF5QzFCLEVBMUVZLENBZGEsQUErQnhCLEVBdUJ5QixFQWhGTCxBQWdFRCxFQTdDTSxBQWdDekIsRUFWQSxBQWdEbUIsQ0FLRyxHQWhETCxFQThERCxBQXdCSCxJQWJRLEdBN0N0QixDQXpFVSxBQTBCVCxBQXNDVyxJQWdCUyxBQVNyQixBQTJDaUIsQ0F0RmhCLEVBM0JBLEFBeUZELENBM0dDLEVBaUVELE1BbENlLEFBdUZTLEdBY04sSUFwREEsS0FoRGpCLE9BcUdpQixFQXhDRSxFQVpwQixFQXZFZ0MsVUE0SGxCLElBeENILFFBeUNTLENBeENSLFVBQ0QsT0F3Q1ksRUF2Q0csbUJBd0NQLEtBOUhLLEFBdUZQLFlBd0NBLEVBbkJLLENBcEJ0QixZQXdDbUIsT0FuQkcsVUFvQkcsVUFuQlgsWUFDSyxDQW1CRixRQWpJaEIsT0FrSW1CLENBbkJHLGlCQW9CdkIsSUFuQmtCLGdCQUNsQiIsImZpbGUiOiIvaG9tZS93aWxsaWFtL0VzY3JpdG9yaW8vVU5UL2Zyb250ZW5kLXZlbnRhcy9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwibmF2LWhvbWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2NlbmVcIiByb2xlID0gXCJiYW5uZXJcIiBhcmlhLWxhYmVsID0gXCJGUkVKT0xcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYyA9XCIvc3RhdGljL2NoaWNoYXJvLnBuZ1wiIGFsdD1cImltYWdlIGxvZ29cIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMTVcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm1vZGFsLXdyYXBwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwiZm9ybS1oZWFkaW5nLWgxXCI+PHNwYW4+SW5pY2lhciBzZXNpw7NuPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwidXNlcm5hbWVcIj48c3Bhbj5Vc3VhcmlvOiA8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSBcIlRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJuYW1lXCIgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3IgPSBcInBhc3N3b3JkXCI+Q29udHJhc2XDsWE6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0gXCJUZXh0XCIgY2xhc3NOYW1lID0gXCJwYXNzd29yZFwiID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZW50ZXItYnV0dG9uXCIgdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJlbnRlci1idXR0b24tbG9naW5cIj48c3Bhbj5JbmdyZXNlPC9zcGFuPjwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhbHRlcm5hdGl2ZS1ub3NwYWNpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY3JlYXRlLWFjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPsK/Tm8gdGllbmUgY3VlbnRhPyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQ3JlYXIgdW5hIGN1ZW50YS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImhlbHAtc2VjdGlvblwiIHJvbGUgPSBcInJlZ2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+wr9OZWNlc2l0YSBheXVkYT8gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0ID0gXCJfYmxhbmtcIiByZWw9IFwiaGVscFwiIGhyZWYgPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDb250YWN0YXIgY29uIGVsIGNlbnRybyBkZSBhdGVuY2nDs24gYWwgY2xpZW50ZS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5uYXYtaG9tZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjZW5lIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjkwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJmZjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciA6ICMwMDYyZmY7XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yIDogIzAwNjJmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIGF7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMThweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2hvbWUgYTpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uIDogbHRyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdiB7IFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN1bml2ZXJzYWwtbmF2IHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OjI7XG5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9kYWwtY29udGVudHsgXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAubW9kYWwtd3JhcHAge1xuICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjQwcHg7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgLm1vZGFsLWZvcm0ge1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICBjb2xvciA6ICMxMjY4ZmI7XG4gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBjb2xvcjtcbiAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHNwYW4geyBcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42MjVyZW07XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICBjb2xvcjogIzMyMzIzMjtcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDBweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5lbnRlci1idXR0b24tbG9naW4ge1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmZmO1xuICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgOiAjMDA2MmZmO1xuICAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yIDogIzAwNjJmZjtcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgb3V0bGluZTogM3B4IHNvbGlkO1xuICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDhweCAzcHg7XG4gICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAuaGVscC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/home/william/Escritorio/UNT/frontend-ventas/frejol-camanejo-proyecto-ventas-2019-II/pages/login.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/william/Escritorio/UNT/frontend-ventas/frejol-camanejo-proyecto-ventas-2019-II/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map