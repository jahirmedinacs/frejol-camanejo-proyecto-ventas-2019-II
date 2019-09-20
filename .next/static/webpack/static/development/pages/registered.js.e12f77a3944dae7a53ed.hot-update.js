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
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-20746850" + " " + "nav-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-20746850" + " " + "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-20746850" + " " + "modal-wrapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-20746850" + " " + "modal-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-20746850" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-20746850" + " " + "form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-20746850" + " " + "form-heading-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Registrate")), __jsx("div", {
        className: "jsx-20746850" + " " + "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css",
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 53
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
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
          lineNumber: 59
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 66
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 73
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
          lineNumber: 81
        },
        __self: this
      }, "Acepto los terminos y condiciones del formulario de este registro."), __jsx("br", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: function onClick() {
          return _this2.onSubmit();
        },
        type: "primary ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Enviar"))))), __jsx("div", {
        className: "jsx-20746850" + " " + "create-account",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\xBFYa tiene una cuenta en Frejolito? "), __jsx("a", {
        href: "/login",
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-20746850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Iniciar sesion.")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "20746850",
        __self: this
      }, "body.jsx-20746850{padding:0rem;margin:0;font-family:\"Helvetica Neue\",Arial,sans-serif;direction :ltr;}div.jsx-20746850{display:block;margin:0;border:0;vertical-align:baseline;}.modal-content.jsx-20746850{background-color:#f4f4f4;margin:0;padding:0;border:0;vertical-align:baseline;}.modal-wrapp.jsx-20746850{border:0;padding-top:40px;padding-bottom:40px;margin:auto;vertical-align:baseline;object-fit:contain;max-width:550px;}.modal-form.jsx-20746850{background-color:#fff;margin:0;border:0;vertical-align:baseline;padding:32px 16px;}span.jsx-20746850{font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;display:inline;}.nav-home.jsx-20746850{background:#fff;border-bottom:1px solid #ececec;height:50px;position:relative;z-index;}a.jsx-20746850{color :#1268fb;-webkit-transition:.3s color;transition:.3s color;-webkit-text-decoration:none;text-decoration:none;font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R3dCLEFBRzBDLEFBTUMsQUFNVyxBQU9oQixBQVNZLEFBT0gsQUFRRixBQU9ELFNBOUJDLElBbkJQLENBTUEsQ0E0Q1ksQ0FQVSxFQVJ0QixJQWxDcUMsQUEyQnJDLENBckJBLEVBS0EsQ0FRVyxDQWdCVixJQVBELENBckJlLEVBS2QsR0F3QkQsR0FQZSxJQWhCZixFQU9FLEFBaUJhLEVBTWIsS0E3QmEsR0FOMUIsRUFhMEIsRUF1Qk4sSUFkQSxDQW9CRyxHQWpETixFQXFDQSxPQXZCakIsQ0E4QlMsSUF2QlksQUFTckIsQ0E3QkEsRUFxQ0EsQ0FPQSxlQXZCa0IsY0E0QkUsRUEzQnBCLGdCQTRCVyxTQUNDLFVBQ0QsU0FDZSx3QkFDVCxlQUNqQiIsImZpbGUiOiIvaG9tZS9jYXJsb3MvRXNjcml0b3Jpby9GcmVqb2wvZnJlam9sLWNhbWFuZWpvLXByb3llY3RvLXZlbnRhcy0yMDE5LUlJL3BhZ2VzL3JlZ2lzdGVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5cblxuY2xhc3MgUmVnaXN0ZXJlZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGxhc3RuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHRlcm1pbm9zOiBmYWxzZSxcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlID09PSB1bmRlZmluZWQgPyBlLnRhcmdldC5jaGVja2VkIDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkgxMVwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICBcbiBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJuYXYtaG9tZVwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtb2RhbC13cmFwcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJmb3JtLWhlYWRpbmctaDFcIj48c3Bhbj5SZWdpc3RyYXRlPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzIuOS4zL2FudGQubWluLmNzcycgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAnbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdOb21icmVzJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHRoaXMub25DaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ2xhc3RuYW1lJ1xuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0FwZWxsaWRvcydcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHRoaXMub25DaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdDb250cmFzZcOxYSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgIDxDaGVja2JveCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ3Rlcm1pbm9zJ1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPSB7dGhpcy5zdGF0ZS50ZXJtaW5vc31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiB0aGlzLm9uQ2hhbmdlKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgQWNlcHRvIGxvcyB0ZXJtaW5vcyB5IGNvbmRpY2lvbmVzIGRlbCBmb3JtdWxhcmlvIGRlIGVzdGUgcmVnaXN0cm8uXG4gICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHRoaXMub25TdWJtaXQoKX0gdHlwZSA9J3ByaW1hcnkgJz5FbnZpYXI8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjcmVhdGUtYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+wr9ZYSB0aWVuZSB1bmEgY3VlbnRhIGVuIEZyZWpvbGl0bz8gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW5pY2lhciBzZXNpb24uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uIDogbHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnR7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLXdyYXBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwtZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1ob21lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogIzEyNjhmYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyZWRcbiAgXG4gICJdfQ== */\n/*@ sourceURL=/home/carlos/Escritorio/Frejol/frejol-camanejo-proyecto-ventas-2019-II/pages/registered.js */"));
    }
  }]);

  return Registered;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registered);

/***/ })

})
//# sourceMappingURL=registered.js.e12f77a3944dae7a53ed.hot-update.js.map