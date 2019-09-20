webpackHotUpdate("static/development/pages/registered.js",{

/***/ "./pages/registered.js":
/*!*****************************!*\
  !*** ./pages/registered.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");







var _jsxFileName = "/home/carlos/Escritorio/Frejol/frejol-camanejo-proyecto-ventas-2019-II/pages/registered.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Registered =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Registered, _Component);

  function Registered() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Registered);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Registered)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      name: '',
      lastname: '',
      email: '',
      password: '',
      terminos: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value === undefined ? e.target.checked : e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function () {
      console.log("H11");
      console.log(_this.state);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Registered, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-2910271399" + " " + "example-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd-with-locales.min.js",
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "name",
        maxLength: 25,
        placeholder: "Nombres",
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "lastname",
        maxLength: 25,
        placeholder: "Apellidos",
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "email",
        maxLength: 25,
        placeholder: "Email",
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        name: "password",
        maxLength: 25,
        placeholder: "Contrase\xF1a",
        type: "password",
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
        name: "terminos",
        checked: this.state.terminos,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Acepta Terminos y condiciones ?"), __jsx("br", {
        className: "jsx-2910271399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: function onClick() {
          return _this2.onSubmit();
        },
        type: "primary ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Enviar"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2910271399",
        __self: this
      }, ".example-input.jsx-2910271399 .ant-input.jsx-2910271399{width:200px;margin:0 8px 8px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RTRCLEFBR3FELFlBQ08sbUJBQ25DIiwiZmlsZSI6Ii9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cblxuXG5jbGFzcyBSZWdpc3RlcmVkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbGFzdG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgdGVybWlub3M6IGZhbHNlLFxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgPT09IHVuZGVmaW5lZCA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSDExXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgIFxuIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMjMuMy9hbnRkLXdpdGgtbG9jYWxlcy5taW4uanMnIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ25hbWUnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnTm9tYnJlcydcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICdsYXN0bmFtZSdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdBcGVsbGlkb3MnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnQ29udHJhc2XDsWEnXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICd0ZXJtaW5vcydcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD0ge3RoaXMuc3RhdGUudGVybWlub3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0+XG4gICAgICAgICAgICAgICAgICAgIEFjZXB0YSBUZXJtaW5vcyB5IGNvbmRpY2lvbmVzID9cbiAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gdGhpcy5vblN1Ym1pdCgpfSB0eXBlID0ncHJpbWFyeSAnPkVudmlhcjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4YW1wbGUtaW5wdXQgLmFudC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHggOHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyZWRcbiAgXG4gICJdfQ== */\n/*@ sourceURL=/home/carlos/Escritorio/Frejol/frejol-camanejo-proyecto-ventas-2019-II/pages/registered.js */"));
    }
  }]);

  return Registered;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registered);

/***/ })

})
//# sourceMappingURL=registered.js.5290a128c6fdb1c687c4.hot-update.js.map