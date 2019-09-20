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

      return __jsx("body", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-371576133" + " " + "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-371576133" + " " + "modal-wrapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-371576133" + " " + "modal-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-371576133" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-371576133" + " " + "form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-371576133" + " " + "form-heading-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Registrate")), __jsx("div", {
        className: "jsx-371576133" + " " + "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css",
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
          lineNumber: 50
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 56
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 63
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
          lineNumber: 70
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 78
        },
        __self: this
      }, "Acepta Terminos y condiciones ?"), __jsx("br", {
        className: "jsx-371576133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: function onClick() {
          return _this2.onSubmit();
        },
        type: "primary ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Enviar"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "371576133",
        __self: this
      }, ".example-input.jsx-371576133 .ant-input.jsx-371576133{width:200px;margin:0 8px 8px 0;}body.jsx-371576133{padding:0rem;margin:0;font-family:\"Helvetica Neue\",Arial,sans-serif;direction :ltr;}div.jsx-371576133{display:block;margin:0;border:0;vertical-align:baseline;}.modal-content.jsx-371576133{background-color:#f4f4f4;margin:0;padding:0;border:0;vertical-align:baseline;}.modal-wrapp.jsx-371576133{border:0;padding-top:40px;padding-bottom:40px;margin:auto;vertical-align:baseline;object-fit:contain;max-width:550px;}.modal-form.jsx-371576133{background-color:#fff;margin:0;border:0;vertical-align:baseline;padding:32px 16px;}span.jsx-371576133{font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RndCLEFBR3FELEFBTVgsQUFNQyxBQU1XLEFBT2hCLEFBU1ksQUFPSCxTQWZGLEdBekJlLENBTXRCLENBTUEsSUE2QkEsSUFsQ3FDLEFBMkJyQyxDQXJCQSxFQUtBLENBUVcsQ0FnQlYsSUF4Q2QsQUFpQ2EsQ0FyQmUsRUFLZCxHQXdCRCxHQVBlLElBaEJmLEVBT0UsQUFpQmEsT0F2QkEsR0FOMUIsRUFhMEIsTUFTTixJQTdCSCxFQXFDQSxPQXZCakIsS0FPcUIsQUFTckIsQ0E3QkEsRUFxQ0EsZ0JBaEJrQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvY2FybG9zL0VzY3JpdG9yaW8vRnJlam9sL2ZyZWpvbC1jYW1hbmVqby1wcm95ZWN0by12ZW50YXMtMjAxOS1JSS9wYWdlcy9yZWdpc3RlcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuXG5cbmNsYXNzIFJlZ2lzdGVyZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBsYXN0bmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICB0ZXJtaW5vczogZmFsc2UsXG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSA9PT0gdW5kZWZpbmVkID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIMTFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgXG4gXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibW9kYWwtd3JhcHBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwiZm9ybS1oZWFkaW5nLWgxXCI+PHNwYW4+UmVnaXN0cmF0ZTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8yLjkuMy9hbnRkLm1pbi5jc3MnIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ25hbWUnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnTm9tYnJlcydcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICdsYXN0bmFtZSdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdBcGVsbGlkb3MnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnQ29udHJhc2XDsWEnXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICd0ZXJtaW5vcydcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD0ge3RoaXMuc3RhdGUudGVybWlub3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0+XG4gICAgICAgICAgICAgICAgICAgIEFjZXB0YSBUZXJtaW5vcyB5IGNvbmRpY2lvbmVzID9cbiAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gdGhpcy5vblN1Ym1pdCgpfSB0eXBlID0ncHJpbWFyeSAnPkVudmlhcjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leGFtcGxlLWlucHV0IC5hbnQtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDhweCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gOiBsdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwtY29udGVudHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwtd3JhcHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzJweCAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYm9keT5cbiAgICBcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJlZFxuICBcbiAgIl19 */\n/*@ sourceURL=/home/carlos/Escritorio/Frejol/frejol-camanejo-proyecto-ventas-2019-II/pages/registered.js */"));
    }
  }]);

  return Registered;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registered);

/***/ })

})
//# sourceMappingURL=registered.js.db9ef5be783637f5cff4.hot-update.js.map