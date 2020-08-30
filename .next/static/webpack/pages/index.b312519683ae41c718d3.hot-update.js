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
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "text-sm text-gray-400 overflow-y-auto",
      id: "scrollTo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, messages.map(function (message, index) {
      return message.type === 0 ? __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["ReceivedMessage"], {
        message: message,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      }) : __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["SentMessage"], {
        message: message,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      });
    })), __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["ChatInputBox"], {
      messages: messages,
      sendMessage: sendMessage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    })) // </div>

  );
};

_s(ChatSection, "1ZVqLsJQLvf+MIChytEjs+f+wTk=");

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
    duration: 500,
    delay: 0,
    smooth: "easeInOutQuint",
    containerId: "scrollTo"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQ2hhdFNlY3Rpb24uanMiXSwibmFtZXMiOlsiQ2hhdFNlY3Rpb24iLCJ1c2VTdGF0ZSIsImJvZHkiLCJ0eXBlIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInVzZUVmZmVjdCIsInNjcm9sbFRvQm90dG9tIiwibGVuZ3RoIiwibWFwIiwibWVzc2FnZSIsImluZGV4Iiwic2Nyb2xsVG9SZWYiLCJyZWYiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImFuaW1hdGVTY3JvbGwiLCJkdXJhdGlvbiIsImRlbGF5Iiwic21vb3RoIiwiY29udGFpbmVySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsQ0FDckM7QUFDSUMsUUFBSSwyRUFEUjtBQUlJQyxRQUFJLEVBQUU7QUFKVixHQURxQyxFQU9yQztBQUFFRCxRQUFJLDhCQUFOO0FBQXNDQyxRQUFJLEVBQUU7QUFBNUMsR0FQcUMsRUFRckM7QUFDSUQsUUFBSSxzRUFEUjtBQUdJQyxRQUFJLEVBQUU7QUFIVixHQVJxQyxFQWFyQztBQUNJRCxRQUFJLDRFQURSO0FBR0lDLFFBQUksRUFBRTtBQUhWLEdBYnFDLEVBa0JyQztBQUNJRCxRQUFJLDRFQURSO0FBR0lDLFFBQUksRUFBRTtBQUhWLEdBbEJxQyxFQXVCckM7QUFBRUQsUUFBSSxFQUFFLHdDQUFSO0FBQWtEQyxRQUFJLEVBQUU7QUFBeEQsR0F2QnFDLEVBd0JyQztBQUNJRCxRQUFJLHFJQURSO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBeEJxQyxFQThCckM7QUFDSUQsUUFBSSw4SUFEUjtBQUlJQyxRQUFJLEVBQUU7QUFKVixHQTlCcUMsQ0FBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQXVDdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxrQkFBYztBQUNqQixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FELHlEQUFTLENBQUMsWUFBTTtBQUNaQyxrQkFBYztBQUNqQixHQUZRLEVBRU4sQ0FBQ0gsUUFBUSxDQUFDSSxNQUFWLENBRk0sQ0FBVDtBQUlBLFNBQ0k7QUFDQTtBQUFLLGVBQVMsRUFBQywwRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBdUQsUUFBRSxFQUFDLFVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsYUFDVkQsT0FBTyxDQUFDUCxJQUFSLEtBQWlCLENBQWpCLEdBQ0ksTUFBQyxxREFBRDtBQUFpQixlQUFPLEVBQUVPLE9BQTFCO0FBQW1DLFdBQUcsRUFBRUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEdBR0ksTUFBQyxpREFBRDtBQUFhLGVBQU8sRUFBRUQsT0FBdEI7QUFBK0IsV0FBRyxFQUFFQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSk07QUFBQSxLQUFiLENBREwsQ0FESixFQVVJLE1BQUMsa0RBQUQ7QUFBYyxjQUFRLEVBQUVQLFFBQXhCO0FBQWtDLGlCQUFXLEVBQUVDLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWSixDQUZKLENBY0k7O0FBZEo7QUFnQkgsQ0E5REQ7O0dBQU1MLFc7O0tBQUFBLFc7QUFnRVNBLDBFQUFmOztBQUVBLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztBQUN6QkMsUUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQUVDLFlBQVEsRUFBRSxRQUFaO0FBQXNCQyxPQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZQztBQUF2QyxHQUFoQjtBQUNILENBRkQ7O0FBSUEsSUFBTVosY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCYSw0REFBYSxDQUFDYixjQUFkLENBQTZCO0FBQ3pCYyxZQUFRLEVBQUUsR0FEZTtBQUV6QkMsU0FBSyxFQUFFLENBRmtCO0FBR3pCQyxVQUFNLEVBQUUsZ0JBSGlCO0FBSXpCQyxlQUFXLEVBQUU7QUFKWSxHQUE3QjtBQU1ILENBUEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjMxMjUxOTY4M2FlNDFjNzE4ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hhdElucHV0Qm94LCBSZWNlaXZlZE1lc3NhZ2UsIFNlbnRNZXNzYWdlIH0gZnJvbSBcIi4uL2NoYXRcIjtcblxuaW1wb3J0IHsgYW5pbWF0ZVNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuLy8gbWVzc2FnZSB0eXBlID0gMCBmb3IgcmVjZWl2ZWQgbWVzc2FnZXNcbi8vIG1lc3NhZ2UgdHlwZSA9IDEgZm9yIHNlbnQgbWVzc2FnZXNcblxuY29uc3QgQ2hhdFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZW5kTWVzc2FnZV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvZHk6IGB5ZWFoIGhhaGFoYVxuICAgICAgICBzb21lIG90aGVyIGNvbW1lbnRcbiAgICAgICAgd2h5IGFyZSB5b3Ugc28gYXdlc29tZWAsXG4gICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7IGJvZHk6IGBIZXJlIGFyZSB0aGUgVGFpbHdpbmQgRG9jc2AsIHR5cGU6IDEgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm9keTogYERvZXMgdGhhdCByZXN1bHQgaW4gdGhlIHJhdyBzdmcgYmVpbmcgaW5saW5lZCBpblxuICAgICAgICB0aGUgRE9NP2AsXG4gICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBgVGhpcyBpcyBoYW5keSBpZiB5b3UgZG9uJ3Qgd2FudCB0byBsb2FkIFNWRyBhcyBhXG4gICAgICAgIHNlcGFyYXRlIGZpbGUuYCxcbiAgICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvZHk6IGBUaGlzIGlzIGhhbmRseSBpZiBZb3UgRG9uJ3Qgd2FudCB0byBsb2FkIGFzIGFcbiAgICAgICAgc2VwYXJhdGUgU1ZHIGZpbGVgLFxuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBib2R5OiBcIkV4YWN0bHkgdGhlIHNhbWUgd2F5IGFzIGluIFZ1ZSBpbXB1bHNlXCIsIHR5cGU6IDAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm9keTogYEkgdGhpbmsgaXQgY2FuIHNsb3cgZG93biB0aGUgcGFnZSBpZiB0aGVyZSdzIHRvb1xuICAgICAgICBtdWNoIGJsb2F0IGluIHRoZSBkb2N1bWVudC5cbiAgICAgICAgQ29tcGFyZWQgdG8gbG9hZGluZyBpdCBleHRlcm5hbGx5LmAsXG4gICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBgQ29tcGFyaXNvbiB3b3VsZCBiZSBiZXR0ZXIgaWYgaXQncyBub3QgYWxzb1xuICAgICAgICBjb21wYXJpbmcgYW4gdmVjdG9yIHN2ZyB0byBhIHJhc3RlciBnaWYsIGl0J3MgYVxuICAgICAgICBkaWZmZXJlbmNlIGluIHJlbmRlcmluZyB0b28uYCxcbiAgICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICAgIH0sIFttZXNzYWdlcy5sZW5ndGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNzUwIGZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBmb250LWNoYXQgdGV4dC1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgb3ZlcmZsb3cteS1hdXRvXCIgaWQ9XCJzY3JvbGxUb1wiPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnR5cGUgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVjZWl2ZWRNZXNzYWdlIG1lc3NhZ2U9e21lc3NhZ2V9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VudE1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDaGF0SW5wdXRCb3ggbWVzc2FnZXM9e21lc3NhZ2VzfSBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNlY3Rpb247XG5cbmNvbnN0IHNjcm9sbFRvUmVmID0gKHJlZikgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCB0b3A6IHJlZi5jdXJyZW50Lm9mZnNldFRvcCB9KTtcbn07XG5cbmNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG9Cb3R0b20oe1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgc21vb3RoOiBcImVhc2VJbk91dFF1aW50XCIsXG4gICAgICAgIGNvbnRhaW5lcklkOiBcInNjcm9sbFRvXCIsXG4gICAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==