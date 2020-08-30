webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/ChatSection.js":
/*!******************************************!*\
  !*** ./components/layout/ChatSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat */ "./components/chat/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/layout/ChatSection.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // message type = 0 for received messages
// message type = 1 for sent messages

var ChatSection = function ChatSection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    body: "yeah hahaha\n        some other comment\n        why are you so awesome",
    type: 0
  }, {
    body: "Here are the Tailwind Docs",
    type: 1
  }, {
    body: "Does that result in the raw svg being inlined in\n        the DOM?",
    type: 0
  }, {
    body: "This is handy if you don't want to load SVG as a\n        separate file.",
    type: 0
  }, {
    body: "This is handly if You Don't want to load as a\n        separate SVG file",
    type: 1
  }, {
    body: "Exactly the same way as in Vue impulse",
    type: 0
  }, {
    body: "I think it can slow down the page if there's too\n        much bloat in the document.\n        Compared to loading it externally.",
    type: 0
  }, {
    body: "Comparison would be better if it's not also\n        comparing an vector svg to a raster gif, it's a\n        difference in rendering too.",
    type: 0
  }]),
      messages = _useState[0],
      sendMessage = _useState[1];

  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    scrollToBottom();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    scrollToBottom();
  }, [messages.length]);
  return (// <div className=" flex-1 flex justify-between">
    __jsx("div", {
      className: "bg-gray-750 flex-1 flex flex-col justify-between font-chat text-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "text-sm text-gray-400 overflow-y-auto",
      id: "xxx",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, messages.map(function (message, index) {
      return message.type === 0 ? __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["ReceivedMessage"], {
        message: message,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }
      }) : __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["SentMessage"], {
        message: message,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      });
    })), __jsx("div", {
      ref: myRef,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }), __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["ChatInputBox"], {
      messages: messages,
      sendMessage: sendMessage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    })) // </div>

  );
};

_s(ChatSection, "OOg8bRPrRvMvFSsqeQRgnVqD3iE=");

_c = ChatSection;
/* harmony default export */ __webpack_exports__["default"] = (ChatSection);

var scrollToRef = function scrollToRef(ref) {
  window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop
  });
};

var scrollToBottom = function scrollToBottom() {
  react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToBottom({
    duration: 0,
    delay: 0,
    smooth: "easeInOutQuint",
    containerId: "xxx"
  });
};

var _c;

$RefreshReg$(_c, "ChatSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQ2hhdFNlY3Rpb24uanMiXSwibmFtZXMiOlsiQ2hhdFNlY3Rpb24iLCJ1c2VTdGF0ZSIsImJvZHkiLCJ0eXBlIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsIm15UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9Cb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzY3JvbGxUb1JlZiIsInJlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYW5pbWF0ZVNjcm9sbCIsImR1cmF0aW9uIiwiZGVsYXkiLCJzbW9vdGgiLCJjb250YWluZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUNyQztBQUNJQyxRQUFJLDJFQURSO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBRHFDLEVBT3JDO0FBQUVELFFBQUksOEJBQU47QUFBc0NDLFFBQUksRUFBRTtBQUE1QyxHQVBxQyxFQVFyQztBQUNJRCxRQUFJLHNFQURSO0FBR0lDLFFBQUksRUFBRTtBQUhWLEdBUnFDLEVBYXJDO0FBQ0lELFFBQUksNEVBRFI7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FicUMsRUFrQnJDO0FBQ0lELFFBQUksNEVBRFI7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FsQnFDLEVBdUJyQztBQUFFRCxRQUFJLEVBQUUsd0NBQVI7QUFBa0RDLFFBQUksRUFBRTtBQUF4RCxHQXZCcUMsRUF3QnJDO0FBQ0lELFFBQUkscUlBRFI7QUFJSUMsUUFBSSxFQUFFO0FBSlYsR0F4QnFDLEVBOEJyQztBQUNJRCxRQUFJLDhJQURSO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBOUJxQyxDQUFELENBRGxCO0FBQUEsTUFDZkMsUUFEZTtBQUFBLE1BQ0xDLFdBREs7O0FBdUN0QixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsa0JBQWM7QUFDakIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBRCx5REFBUyxDQUFDLFlBQU07QUFDWkMsa0JBQWM7QUFDakIsR0FGUSxFQUVOLENBQUNMLFFBQVEsQ0FBQ00sTUFBVixDQUZNLENBQVQ7QUFJQSxTQUNJO0FBQ0E7QUFBSyxlQUFTLEVBQUMsMEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLHVDQUFmO0FBQXVELFFBQUUsRUFBQyxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tOLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLGFBQ1ZELE9BQU8sQ0FBQ1QsSUFBUixLQUFpQixDQUFqQixHQUNJLE1BQUMscURBQUQ7QUFBaUIsZUFBTyxFQUFFUyxPQUExQjtBQUFtQyxXQUFHLEVBQUVDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixHQUdJLE1BQUMsaURBQUQ7QUFBYSxlQUFPLEVBQUVELE9BQXRCO0FBQStCLFdBQUcsRUFBRUMsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpNO0FBQUEsS0FBYixDQURMLENBREosRUFVSTtBQUFLLFNBQUcsRUFBRVAsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkosRUFXSSxNQUFDLGtEQUFEO0FBQWMsY0FBUSxFQUFFRixRQUF4QjtBQUFrQyxpQkFBVyxFQUFFQyxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEosQ0FGSixDQWVJOztBQWZKO0FBaUJILENBaEVEOztHQUFNTCxXOztLQUFBQSxXO0FBa0VTQSwwRUFBZjs7QUFFQSxJQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDekJDLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxZQUFRLEVBQUUsUUFBWjtBQUFzQkMsT0FBRyxFQUFFSixHQUFHLENBQUNLLE9BQUosQ0FBWUM7QUFBdkMsR0FBaEI7QUFDSCxDQUZEOztBQUlBLElBQU1aLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QmEsNERBQWEsQ0FBQ2IsY0FBZCxDQUE2QjtBQUN6QmMsWUFBUSxFQUFFLENBRGU7QUFFekJDLFNBQUssRUFBRSxDQUZrQjtBQUd6QkMsVUFBTSxFQUFFLGdCQUhpQjtBQUl6QkMsZUFBVyxFQUFFO0FBSlksR0FBN0I7QUFNSCxDQVBEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0MWI2YWI3OTYzNzM1NWNhZWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYXRJbnB1dEJveCwgUmVjZWl2ZWRNZXNzYWdlLCBTZW50TWVzc2FnZSB9IGZyb20gXCIuLi9jaGF0XCI7XG5cbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbi8vIG1lc3NhZ2UgdHlwZSA9IDAgZm9yIHJlY2VpdmVkIG1lc3NhZ2VzXG4vLyBtZXNzYWdlIHR5cGUgPSAxIGZvciBzZW50IG1lc3NhZ2VzXG5cbmNvbnN0IENoYXRTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2VuZE1lc3NhZ2VdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBgeWVhaCBoYWhhaGFcbiAgICAgICAgc29tZSBvdGhlciBjb21tZW50XG4gICAgICAgIHdoeSBhcmUgeW91IHNvIGF3ZXNvbWVgLFxuICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBib2R5OiBgSGVyZSBhcmUgdGhlIFRhaWx3aW5kIERvY3NgLCB0eXBlOiAxIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvZHk6IGBEb2VzIHRoYXQgcmVzdWx0IGluIHRoZSByYXcgc3ZnIGJlaW5nIGlubGluZWQgaW5cbiAgICAgICAgdGhlIERPTT9gLFxuICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm9keTogYFRoaXMgaXMgaGFuZHkgaWYgeW91IGRvbid0IHdhbnQgdG8gbG9hZCBTVkcgYXMgYVxuICAgICAgICBzZXBhcmF0ZSBmaWxlLmAsXG4gICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBgVGhpcyBpcyBoYW5kbHkgaWYgWW91IERvbid0IHdhbnQgdG8gbG9hZCBhcyBhXG4gICAgICAgIHNlcGFyYXRlIFNWRyBmaWxlYCxcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHsgYm9keTogXCJFeGFjdGx5IHRoZSBzYW1lIHdheSBhcyBpbiBWdWUgaW1wdWxzZVwiLCB0eXBlOiAwIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvZHk6IGBJIHRoaW5rIGl0IGNhbiBzbG93IGRvd24gdGhlIHBhZ2UgaWYgdGhlcmUncyB0b29cbiAgICAgICAgbXVjaCBibG9hdCBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgIENvbXBhcmVkIHRvIGxvYWRpbmcgaXQgZXh0ZXJuYWxseS5gLFxuICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm9keTogYENvbXBhcmlzb24gd291bGQgYmUgYmV0dGVyIGlmIGl0J3Mgbm90IGFsc29cbiAgICAgICAgY29tcGFyaW5nIGFuIHZlY3RvciBzdmcgdG8gYSByYXN0ZXIgZ2lmLCBpdCdzIGFcbiAgICAgICAgZGlmZmVyZW5jZSBpbiByZW5kZXJpbmcgdG9vLmAsXG4gICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICB9LFxuICAgIF0pO1xuXG4gICAgY29uc3QgbXlSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9LCBbbWVzc2FnZXMubGVuZ3RoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LTEgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTc1MCBmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZm9udC1jaGF0IHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXktYXV0b1wiIGlkPVwieHh4XCI+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlaXZlZE1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZW50TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e215UmVmfT48L2Rpdj5cbiAgICAgICAgICAgIDxDaGF0SW5wdXRCb3ggbWVzc2FnZXM9e21lc3NhZ2VzfSBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNlY3Rpb247XG5cbmNvbnN0IHNjcm9sbFRvUmVmID0gKHJlZikgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCB0b3A6IHJlZi5jdXJyZW50Lm9mZnNldFRvcCB9KTtcbn07XG5cbmNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG9Cb3R0b20oe1xuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIHNtb290aDogXCJlYXNlSW5PdXRRdWludFwiLFxuICAgICAgICBjb250YWluZXJJZDogXCJ4eHhcIixcbiAgICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9