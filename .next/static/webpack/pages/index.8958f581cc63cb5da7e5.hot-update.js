webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chat/ChatInputBox.js":
/*!*****************************************!*\
  !*** ./components/chat/ChatInputBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/chat/ChatInputBox.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ChatInputBox = function ChatInputBox(_ref) {
  _s();

  var messages = _ref.messages,
      sendMessage = _ref.sendMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      inputMsg = _useState[0],
      setInputMsg = _useState[1];

  var onSubmit = function onSubmit() {
    sendMessage([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [{
      body: inputMsg,
      type: 1
    }]));
  };

  var handleKeyPress = function handleKeyPress(e) {};

  return __jsx("div", {
    className: "bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "px-2 py-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 496 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    className: "w-full text-sm h-10 px-2 py -2 bg-gray-700 text-gray-200 focus:outline-none",
    value: inputMsg,
    onChange: function onChange(e) {
      return setInputMsg(e.target.value);
    },
    onKeyPress: handleKeyPress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "px-2 py-2 bg-gray-700 rounded-r flex items-center h-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white",
    onClick: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "paper-plane",
    className: "w-4 h-4 svg-inline--fa fa-paper-plane fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }))), __jsx("button", {
    className: "h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })))));
};

_s(ChatInputBox, "LhHPYVM8sdwAWIzilEkDWxtDoUA=");

_c = ChatInputBox;
/* harmony default export */ __webpack_exports__["default"] = (ChatInputBox);

var _c;

$RefreshReg$(_c, "ChatInputBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0L0NoYXRJbnB1dEJveC5qcyJdLCJuYW1lcyI6WyJDaGF0SW5wdXRCb3giLCJtZXNzYWdlcyIsInNlbmRNZXNzYWdlIiwidXNlU3RhdGUiLCJpbnB1dE1zZyIsInNldElucHV0TXNnIiwib25TdWJtaXQiLCJib2R5IiwidHlwZSIsImhhbmRsZUtleVByZXNzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsRUFBRCxDQURRO0FBQUEsTUFDekNDLFFBRHlDO0FBQUEsTUFDL0JDLFdBRCtCOztBQUdoRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CSixlQUFXLHdHQUFLRCxRQUFMLElBQWU7QUFBRU0sVUFBSSxFQUFFSCxRQUFSO0FBQWtCSSxVQUFJLEVBQUU7QUFBeEIsS0FBZixHQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTyxDQUU3QixDQUZEOztBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsa0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLDhGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsU0FEZDtBQUVJLFFBQUksRUFBQyxjQUZUO0FBR0ksV0FBTyxFQUFDLGFBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQU0sS0FBQyxFQUFDLG9ZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKLENBREosRUFVSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksYUFBUyxFQUFDLDZFQUZkO0FBR0ksU0FBSyxFQUFFTixRQUhYO0FBSUksWUFBUSxFQUFFLGtCQUFDTSxDQUFEO0FBQUEsYUFBT0wsV0FBVyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLEtBSmQ7QUFLSSxjQUFVLEVBQUVILGNBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLEVBbUJJO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQywyREFEZDtBQUVJLFdBQU8sRUFBRUgsUUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFDSSxtQkFBWSxNQURoQjtBQUVJLGFBQVMsRUFBQyxPQUZkO0FBR0ksbUJBQVksS0FIaEI7QUFJSSxpQkFBVSxhQUpkO0FBS0ksYUFBUyxFQUFDLCtDQUxkO0FBTUksUUFBSSxFQUFDLEtBTlQ7QUFPSSxTQUFLLEVBQUMsNEJBUFY7QUFRSSxXQUFPLEVBQUMsYUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUk7QUFDSSxRQUFJLEVBQUMsY0FEVDtBQUVJLEtBQUMsRUFBQyx1TkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0FKSixDQURKLEVBcUJJO0FBQVEsYUFBUyxFQUFDLGdFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsU0FEZDtBQUVJLFFBQUksRUFBQyxjQUZUO0FBR0ksU0FBSyxFQUFDLDRCQUhWO0FBSUksU0FBSyxFQUFDLElBSlY7QUFLSSxVQUFNLEVBQUMsSUFMWDtBQU1JLFdBQU8sRUFBQyxXQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUFNLEtBQUMsRUFBQyxpTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFNLEtBQUMsRUFBQyxlQUFSO0FBQXdCLFFBQUksRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESixDQXJCSixDQW5CSixDQURKO0FBeURILENBcEVEOztHQUFNTixZOztLQUFBQSxZO0FBc0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OTU4ZjU4MWNjNjNjYjVkYTdlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDaGF0SW5wdXRCb3ggPSAoeyBtZXNzYWdlcywgc2VuZE1lc3NhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IFtpbnB1dE1zZywgc2V0SW5wdXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc2VuZE1lc3NhZ2UoWy4uLm1lc3NhZ2VzLCB7IGJvZHk6IGlucHV0TXNnLCB0eXBlOiAxIH1dKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTc1MCBoLTI0IGZsZXggaXRlbXMtY2VudGVyIG14LTMgYm9yZGVyLXQgYm9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTIgcHktMiBoLTEwIGJnLWdyYXktNzAwIHJvdW5kZWQtbCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLXIgYm9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDk2IDUxMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0OCA4QzExMSA4IDAgMTE5IDAgMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzg1IDggMjQ4IDh6bTgwIDE2OGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMi0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzJ6bS0xNjAgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMi0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzJ6bTE5NC44IDE3MC4yQzMzNC4zIDM4MC40IDI5Mi41IDQwMCAyNDggNDAwcy04Ni4zLTE5LjYtMTE0LjgtNTMuOGMtMTMuNi0xNi4zIDExLTM2LjcgMjQuNi0yMC41IDIyLjQgMjYuOSA1NS4yIDQyLjIgOTAuMiA0Mi4yczY3LjgtMTUuNCA5MC4yLTQyLjJjMTMuNC0xNi4yIDM4LjEgNC4yIDI0LjYgMjAuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gaC0xMCBweC0yIHB5IC0yIGJnLWdyYXktNzAwIHRleHQtZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0TXNnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0TXNnKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTIgYmctZ3JheS03MDAgcm91bmRlZC1yIGZsZXggaXRlbXMtY2VudGVyIGgtMTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgYmctZ3JheS03MDAgcm91bmRlZC1sIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cInBhcGVyLXBsYW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgc3ZnLWlubGluZS0tZmEgZmEtcGFwZXItcGxhbmUgZmEtdy0xNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ3NiAzLjJMMTIuNSAyNzAuNmMtMTguMSAxMC40LTE1LjggMzUuNiAyLjIgNDMuMkwxMjEgMzU4LjRsMjg3LjMtMjUzLjJjNS41LTQuOSAxMy4zIDIuNiA4LjYgOC4zTDE3NiA0MDd2ODAuNWMwIDIzLjYgMjguNSAzMi45IDQyLjUgMTUuOEwyODIgNDI2bDEyNC42IDUyLjJjMTQuMiA2IDMwLjQtMi45IDMzLTE4LjJsNzItNDMyQzUxNSA3LjggNDkzLjMtNi44IDQ3NiAzLjJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaC0xMCBiZy1ncmF5LTcwMCByb3VuZGVkLWwgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIG1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxNGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA1YzAtMS42Ni0xLjM0LTMtMy0zUzkgMy4zNCA5IDV2NmMwIDEuNjYgMS4zNCAzIDMgM3ptNS4zLTNjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDE0IDYuNyAxMUg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIxaDJ2LTMuMjhjMy4yOC0uNDggNi0zLjMgNi02LjcyaC0xLjd6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRJbnB1dEJveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=