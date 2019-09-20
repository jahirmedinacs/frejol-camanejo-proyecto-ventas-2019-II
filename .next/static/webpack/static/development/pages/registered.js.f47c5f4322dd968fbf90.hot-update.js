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
        className: "jsx-1650848820",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1650848820" + " " + "nav-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1650848820" + " " + "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1650848820" + " " + "modal-wrapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1650848820" + " " + "modal-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1650848820" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1650848820" + " " + "form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1650848820" + " " + "form-heading-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1650848820",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Registrate")), __jsx("div", {
        className: "jsx-1650848820" + " " + "flex",
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
        className: "jsx-1650848820",
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
        className: "jsx-1650848820",
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
        className: "jsx-1650848820",
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
        className: "jsx-1650848820",
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
        className: "jsx-1650848820",
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
      }, "Acepta Terminos y condiciones ?"), __jsx("br", {
        className: "jsx-1650848820",
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
      }, "Enviar"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1650848820",
        __self: this
      }, "body.jsx-1650848820{padding:0rem;margin:0;font-family:\"Helvetica Neue\",Arial,sans-serif;direction :ltr;}div.jsx-1650848820{display:block;margin:0;border:0;vertical-align:baseline;}.modal-content.jsx-1650848820{background-color:#f4f4f4;margin:0;padding:0;border:0;vertical-align:baseline;}.modal-wrapp.jsx-1650848820{border:0;padding-top:40px;padding-bottom:40px;margin:auto;vertical-align:baseline;object-fit:contain;max-width:550px;}.modal-form.jsx-1650848820{background-color:#fff;margin:0;border:0;vertical-align:baseline;padding:32px 16px;}span.jsx-1650848820{font-size:inherit;margin:0;padding:0;border:0;vertical-align:baseline;display:inline;}.nav-home.jsx-1650848820{background:#fff;border-bottom:1px solid #ececec;height:50px;position:relative;z-index;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR3dCLEFBRzBDLEFBTUMsQUFNVyxBQU9oQixBQVNZLEFBT0gsQUFRRixTQXZCQSxJQW5CUCxDQU1BLEVBcUNzQixFQVJ0QixJQWxDcUMsQUEyQnJDLENBckJBLEVBS0EsQ0FRVyxDQWdCVixJQVBELENBckJlLEVBS2QsR0F3QkQsR0FQZSxJQWhCZixFQU9FLEFBaUJhLEVBTWIsS0E3QmEsR0FOMUIsRUFhMEIsRUF1Qk4sSUFkQSxJQTdCSCxFQXFDQSxPQXZCakIsQ0E4QlMsSUF2QlksQUFTckIsQ0E3QkEsRUFxQ0EsQ0FPQSxlQXZCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Nhcmxvcy9Fc2NyaXRvcmlvL0ZyZWpvbC9mcmVqb2wtY2FtYW5lam8tcHJveWVjdG8tdmVudGFzLTIwMTktSUkvcGFnZXMvcmVnaXN0ZXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cblxuXG5jbGFzcyBSZWdpc3RlcmVkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbGFzdG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgdGVybWlub3M6IGZhbHNlLFxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgPT09IHVuZGVmaW5lZCA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSDExXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgIFxuIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm5hdi1ob21lXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1vZGFsLXdyYXBwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJsb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSBcImZvcm0taGVhZGluZy1oMVwiPjxzcGFuPlJlZ2lzdHJhdGU8L3NwYW4+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMi45LjMvYW50ZC5taW4uY3NzJyAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9ICduYW1lJ1xuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ05vbWJyZXMnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAnbGFzdG5hbWUnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnQXBlbGxpZG9zJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHRoaXMub25DaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAnZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnRW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4gdGhpcy5vbkNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0NvbnRyYXNlw7FhJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHRoaXMub25DaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSAndGVybWlub3MnXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9IHt0aGlzLnN0YXRlLnRlcm1pbm9zfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHRoaXMub25DaGFuZ2UoZSl9PlxuICAgICAgICAgICAgICAgICAgICBBY2VwdGEgVGVybWlub3MgeSBjb25kaWNpb25lcyA/XG4gICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHRoaXMub25TdWJtaXQoKX0gdHlwZSA9J3ByaW1hcnkgJz5FbnZpYXI8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uIDogbHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnR7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLXdyYXBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwtZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1ob21lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9ib2R5PlxuICAgIFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBSZWdpc3RlcmVkXG4gIFxuICAiXX0= */\n/*@ sourceURL=/home/carlos/Escritorio/Frejol/frejol-camanejo-proyecto-ventas-2019-II/pages/registered.js */"));
    }
  }]);

  return Registered;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registered);

/***/ })

})
//# sourceMappingURL=registered.js.f47c5f4322dd968fbf90.hot-update.js.map