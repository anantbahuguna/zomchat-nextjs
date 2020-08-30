module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chat/ChatInputBox.js":
/*!*****************************************!*\
  !*** ./components/chat/ChatInputBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/chat/ChatInputBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ChatInputBox = () => {
  return __jsx("div", {
    className: "bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "px-2 py-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 496 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    className: "w-full text-sm h-10 px-2 py -2 bg-gray-700 text-gray-200 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "px-2 py-2 bg-gray-700 rounded-r flex items-center h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }))), __jsx("button", {
    className: "h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatInputBox);

/***/ }),

/***/ "./components/chat/index.js":
/*!**********************************!*\
  !*** ./components/chat/index.js ***!
  \**********************************/
/*! exports provided: ChatInputBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatInputBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatInputBox */ "./components/chat/ChatInputBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatInputBox", function() { return _ChatInputBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/layout/ChatSection.js":
/*!******************************************!*\
  !*** ./components/layout/ChatSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat */ "./components/chat/index.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/layout/ChatSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ChatSection = () => {
  return (// <div className=" flex-1 flex justify-between">
    __jsx("div", {
      className: "bg-gray-750 flex-1 flex flex-col justify-between font-chat text-gray-200",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "text-sm text-gray-400 overflow-y-auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex mx-6 my-3 py-4  border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, "yeah hahaha"), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, "some other comment"), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, "why are you so awesome")))), __jsx("div", {
      className: "flex flex-row-reverse mx-6 my-3 py-4  border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none ml-5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: " px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, "Here are the Tailwind Docs")))), __jsx("div", {
      className: "flex mx-6 my-3 py-4 border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, "Does that result in the raw svg being inlined in the DOM?")))), __jsx("div", {
      className: "flex mx-6 my-3 py-4 border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, "This is handy if you don't want to load SVG as a separate file.")))), __jsx("div", {
      className: "flex flex-row-reverse mx-6 my-3 py-4  border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none ml-5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: " px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, "This is handly if You Don't want to load as a separate SVG file")))), __jsx("div", {
      className: "flex mx-6 my-3 py-4 border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }, "Exactly the same way as in Vue impulse")))), __jsx("div", {
      className: "flex mx-6 my-3 py-4 border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 29
      }
    }, "I think it can slow down the page if there's too much bloat in the document."), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 29
      }
    }, "Compared to loading it externally.")))), __jsx("div", {
      className: "flex mx-6 my-3 py-4 border-t border-gray-700",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "# ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/dp1.jpg",
      alt: "avatar",
      className: "w-10 h-10 rounded-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 29
      }
    }, "Comparison would be better if it's not also comparing an vector svg to a raster gif, it's a difference in rendering too."))))), __jsx(_chat__WEBPACK_IMPORTED_MODULE_1__["ChatInputBox"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    })) // </div>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (ChatSection);

/***/ }),

/***/ "./components/layout/LeftSidebar.js":
/*!******************************************!*\
  !*** ./components/layout/LeftSidebar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./components/user/index.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/layout/LeftSidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LeftSidebar = () => {
  return __jsx("div", {
    className: "bg-gray-800 w-56 flex-none flex-col justify-between hidden md:flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_1__["UserSearchBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "overflow-y-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_1__["UserList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "bg-gray-850 px-2 py-2 flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "# ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_1__["UserImage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "text-xs ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "johndoe"), __jsx("div", {
    className: "text-gray-500 text-xxs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "View Profile"))), __jsx("div", {
    className: "flex items-center text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "# ",
    className: "ml-3 hover:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    opacity: ".1",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }))), __jsx("a", {
    href: "# ",
    className: "ml-3 hover:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSidebar);

/***/ }),

/***/ "./components/layout/MainBody.js":
/*!***************************************!*\
  !*** ./components/layout/MainBody.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftSidebar */ "./components/layout/LeftSidebar.js");
/* harmony import */ var _ChatSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatSection */ "./components/layout/ChatSection.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/layout/MainBody.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MainBody = () => {
  return __jsx("div", {
    className: "flex-1 flex overflow-y-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(_LeftSidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " flex-1 flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(_ChatSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainBody);

/***/ }),

/***/ "./components/layout/TopBar.js":
/*!*************************************!*\
  !*** ./components/layout/TopBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./components/user/index.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/layout/TopBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopBar = () => {
  return __jsx("div", {
    className: "flex text-white h-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-gray-800 w-56 flex-none flex items-center justify-between border-b border-gray-900 px-3 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "ZOMCHAT"), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, " ", __jsx("svg", {
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("path", {
    className: "heroicon-ui",
    d: "M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "bg-gray-750 flex-1 flex items-center justify-between border-b border-gray-900 px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_1__["UserModal"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "border-l pl-3 ml-3 border-gray-600 text-sm text-gray-400 hidden md:inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Johny Doe")), __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "# ",
    className: "ml-4 hidden md:inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "video",
    className: "w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-video fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }))), __jsx("a", {
    href: "# ",
    className: "ml-4 hidden md:inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "phone-alt",
    className: "w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-phone-alt fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }))), __jsx("a", {
    href: "# ",
    className: "ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "ellipsis-v",
    className: "w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-ellipsis-v fa-w-6",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 512",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: TopBar, MainBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar */ "./components/layout/TopBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return _TopBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MainBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBody */ "./components/layout/MainBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return _MainBody__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/user/UserImage.js":
/*!**************************************!*\
  !*** ./components/user/UserImage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/user/UserImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserImage = () => {
  return __jsx("img", {
    src: "/dp1.jpg",
    alt: "avatar",
    className: "w-10 h-10 rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserImage);

/***/ }),

/***/ "./components/user/UserList.js":
/*!*************************************!*\
  !*** ./components/user/UserList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListItem */ "./components/user/UserListItem.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/user/UserList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserList = () => {
  return __jsx("ul", {
    className: "px-2 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 8, 8].map((v, i) => i === 0 ? __jsx(_UserListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: true,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }) : __jsx(_UserListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./components/user/UserListItem.js":
/*!*****************************************!*\
  !*** ./components/user/UserListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserImage */ "./components/user/UserImage.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/user/UserListItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserListItem = ({
  selected
}) => {
  return __jsx("li", {
    className: `text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900 ${selected && 'bg-gray-750 rounded'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "# ",
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx(_UserImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "text-sm ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-gray-200 leading-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Jonathan Reinink"), __jsx("p", {
    className: "text-gray-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Aug 18"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserListItem);

/***/ }),

/***/ "./components/user/UserModal.js":
/*!**************************************!*\
  !*** ./components/user/UserModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserImage */ "./components/user/UserImage.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/user/UserModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserModal = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: "# ",
    style: {
      transition: "all .30s ease-in-out"
    },
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(_UserImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "relative w-auto my-6 mx-auto max-w-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "bg-transparent text-gray-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, "x"))), __jsx("div", {
    className: "relative p-6 flex-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "h-full flex  flex-col items-center sm:justify-start justify-center text-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, __jsx("img", {
    alt: "team",
    className: "flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center  mb-4",
    src: "/dp1.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "flex-grow ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, __jsx("h2", {
    className: "title-font font-medium text-lg text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  }, "Holden Caulfield"), __jsx("h3", {
    className: "text-gray-600 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45
    }
  }, "UI Developer"), __jsx("p", {
    className: "mb-4 text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."), __jsx("span", {
    className: "inline-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, __jsx("a", {
    href: "# ",
    className: "text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 49
    }
  }, __jsx("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 53
    }
  }, __jsx("path", {
    d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 57
    }
  }))), __jsx("a", {
    href: "# ",
    className: "ml-2 text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 49
    }
  }, __jsx("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 53
    }
  }, __jsx("path", {
    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }))), __jsx("a", {
    href: "# ",
    className: "ml-2 text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 49
    }
  }, __jsx("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 53
    }
  }, __jsx("path", {
    d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 57
    }
  })))))))))), __jsx("div", {
    className: "opacity-25 fixed inset-0 z-40 bg-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (UserModal);

/***/ }),

/***/ "./components/user/UserSearchBox.js":
/*!******************************************!*\
  !*** ./components/user/UserSearchBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/components/user/UserSearchBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserSearchBox = () => {
  return __jsx("form", {
    className: "relative px-2 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search",
    className: "rounded bg-gray-900 text-gray-200 text-s px-2 py-1 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "absolute right-0 top-0 mr-4",
    style: {
      top: "18px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, " ", __jsx("svg", {
    className: "w-4 h-4 text-gray-500 hover:text-gray-200",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("path", {
    className: "heroicon-ui",
    d: "M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserSearchBox);

/***/ }),

/***/ "./components/user/index.js":
/*!**********************************!*\
  !*** ./components/user/index.js ***!
  \**********************************/
/*! exports provided: UserImage, UserSearchBox, UserList, UserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserImage */ "./components/user/UserImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserImage", function() { return _UserImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _UserSearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSearchBox */ "./components/user/UserSearchBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearchBox", function() { return _UserSearchBox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserList */ "./components/user/UserList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return _UserList__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _UserModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserModal */ "./components/user/UserModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModal", function() { return _UserModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
var _jsxFileName = "/mnt/e/dev/nextjs/tailwind-next-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Home = () => __jsx("div", {
  className: "flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "flex-1 flex flex-col min-h-screen h-screen",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["TopBar"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["MainBody"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGF0L0NoYXRJbnB1dEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQ2hhdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGVmdFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbkJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvVG9wQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL1VzZXJMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VyTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL1VzZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvVXNlclNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDaGF0SW5wdXRCb3giLCJDaGF0U2VjdGlvbiIsIkxlZnRTaWRlYmFyIiwiTWFpbkJvZHkiLCJUb3BCYXIiLCJVc2VySW1hZ2UiLCJVc2VyTGlzdCIsIm1hcCIsInYiLCJpIiwiVXNlckxpc3RJdGVtIiwic2VsZWN0ZWQiLCJVc2VyTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidHJhbnNpdGlv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QUFBQTtBQUFBO0FBQUEsSUFQSixDQUxKLENBTkosQ0FESjtBQTJCSCxDQTVCRDs7QUE4QmVELDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBLE1BQU1FLElBQUksR0FBRyxNQUNUO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUssV0FBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLENBREosQ0FESjs7QUFTZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNYQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDaGF0SW5wdXRCb3ggPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTc1MCBoLTI0IGZsZXggaXRlbXMtY2VudGVyIG14LTMgYm9yZGVyLXQgYm9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTIgcHktMiBoLTEwIGJnLWdyYXktNzAwIHJvdW5kZWQtbCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLXIgYm9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDk2IDUxMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0OCA4QzExMSA4IDAgMTE5IDAgMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzg1IDggMjQ4IDh6bTgwIDE2OGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMi0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzJ6bS0xNjAgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMi0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzJ6bTE5NC44IDE3MC4yQzMzNC4zIDM4MC40IDI5Mi41IDQwMCAyNDggNDAwcy04Ni4zLTE5LjYtMTE0LjgtNTMuOGMtMTMuNi0xNi4zIDExLTM2LjcgMjQuNi0yMC41IDIyLjQgMjYuOSA1NS4yIDQyLjIgOTAuMiA0Mi4yczY3LjgtMTUuNCA5MC4yLTQyLjJjMTMuNC0xNi4yIDM4LjEgNC4yIDI0LjYgMjAuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gaC0xMCBweC0yIHB5IC0yIGJnLWdyYXktNzAwIHRleHQtZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHktMiBiZy1ncmF5LTcwMCByb3VuZGVkLXIgZmxleCBpdGVtcy1jZW50ZXIgaC0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaC0xMCBiZy1ncmF5LTcwMCByb3VuZGVkLWwgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJwYXBlci1wbGFuZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHN2Zy1pbmxpbmUtLWZhIGZhLXBhcGVyLXBsYW5lIGZhLXctMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00NzYgMy4yTDEyLjUgMjcwLjZjLTE4LjEgMTAuNC0xNS44IDM1LjYgMi4yIDQzLjJMMTIxIDM1OC40bDI4Ny4zLTI1My4yYzUuNS00LjkgMTMuMyAyLjYgOC42IDguM0wxNzYgNDA3djgwLjVjMCAyMy42IDI4LjUgMzIuOSA0Mi41IDE1LjhMMjgyIDQyNmwxMjQuNiA1Mi4yYzE0LjIgNiAzMC40LTIuOSAzMy0xOC4ybDcyLTQzMkM1MTUgNy44IDQ5My4zLTYuOCA0NzYgMy4yelwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNTggMzE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzU4IDE1OUwwIDBMMzQgMTM2TDE1OSAxNTlMMzQgMTgyTDAgMzE4TDM1OCAxNTlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMiA0NDhjMCAxNy43IDE0LjMgMzIgMzIgMzJoMTYwVjMyMEgzMnYxMjh6bTQ0OC0yODhoLTQyLjFjNi4yLTEyLjEgMTAuMS0yNS41IDEwLjEtNDAgMC00OC41LTM5LjUtODgtODgtODgtNDEuNiAwLTY4LjUgMjEuMy0xMDMgNjguMy0zNC41LTQ3LTYxLjQtNjguMy0xMDMtNjguMy00OC41IDAtODggMzkuNS04OCA4OCAwIDE0LjUgMy44IDI3LjkgMTAuMSA0MEgzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2ODBjMCA4LjggNy4yIDE2IDE2IDE2aDQ4MGM4LjggMCAxNi03LjIgMTYtMTZ2LTgwYzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzI2LjEgMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBzMTcuOS00MCA0MC00MGMxOS45IDAgMzQuNiAzLjMgODYuMSA4MGgtODYuMXptMjA2LjEgMGgtODYuMWM1MS40LTc2LjUgNjUuNy04MCA4Ni4xLTgwIDIyLjEgMCA0MCAxNy45IDQwIDQwcy0xNy45IDQwLTQwIDQwem0tNzIgMzIwaDE2MGMxNy43IDAgMzItMTQuMyAzMi0zMlYzMjBIMjg4djE2MHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAqL31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImgtMTAgYmctZ3JheS03MDAgcm91bmRlZC1sIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZSBtbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5wdXRCb3g7IiwiaW1wb3J0IENoYXRJbnB1dEJveCBmcm9tIFwiLi9DaGF0SW5wdXRCb3hcIjtcblxuZXhwb3J0IHsgQ2hhdElucHV0Qm94IH07XG4iLCJpbXBvcnQgeyBDaGF0SW5wdXRCb3ggfSBmcm9tIFwiLi4vY2hhdFwiO1xuXG5jb25zdCBDaGF0U2VjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LTEgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTc1MCBmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZm9udC1jaGF0IHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC02IG15LTMgcHktNCAgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tNjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9obmRvZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwNy8xOS8yMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eWVhaCBoYWhhaGE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnNvbWUgb3RoZXIgY29tbWVudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+d2h5IGFyZSB5b3Ugc28gYXdlc29tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIG14LTYgbXktMyBweS00ICBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgbWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBweC00IHB5LTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC01MDAgdG8tcmVkLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkhlcmUgYXJlIHRoZSBUYWlsd2luZCBEb2NzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtNiBteS0zIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kcDEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNSBweC00IHB5LTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNjAwIHRvLWluZGlnby02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huZG9lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA3LzE5LzIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9lcyB0aGF0IHJlc3VsdCBpbiB0aGUgcmF3IHN2ZyBiZWluZyBpbmxpbmVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBET00/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTYgbXktMyBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tNjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9obmRvZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwNy8xOS8yMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgaGFuZHkgaWYgeW91IGRvbid0IHdhbnQgdG8gbG9hZCBTVkcgYXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIG14LTYgbXktMyBweS00ICBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgbWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBweC00IHB5LTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC01MDAgdG8tcmVkLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGhhbmRseSBpZiBZb3UgRG9uJ3Qgd2FudCB0byBsb2FkIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUgU1ZHIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtNiBteS0zIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kcDEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNSBweC00IHB5LTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNjAwIHRvLWluZGlnby02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huZG9lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA3LzE5LzIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5FeGFjdGx5IHRoZSBzYW1lIHdheSBhcyBpbiBWdWUgaW1wdWxzZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC02IG15LTMgcHktNCBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHB4LTQgcHktMiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIHRoaW5rIGl0IGNhbiBzbG93IGRvd24gdGhlIHBhZ2UgaWYgdGhlcmUncyB0b29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVjaCBibG9hdCBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Db21wYXJlZCB0byBsb2FkaW5nIGl0IGV4dGVybmFsbHkuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTYgbXktMyBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tNjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9obmRvZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwNy8xOS8yMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmlzb24gd291bGQgYmUgYmV0dGVyIGlmIGl0J3Mgbm90IGFsc29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaW5nIGFuIHZlY3RvciBzdmcgdG8gYSByYXN0ZXIgZ2lmLCBpdCdzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZSBpbiByZW5kZXJpbmcgdG9vLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2hhdElucHV0Qm94IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNlY3Rpb247XG4iLCJpbXBvcnQgeyBVc2VyU2VhcmNoQm94LCBVc2VySW1hZ2UsIFVzZXJMaXN0IH0gZnJvbSBcIi4uL3VzZXJcIjtcblxuY29uc3QgTGVmdFNpZGViYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB3LTU2IGZsZXgtbm9uZSBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIG1kOmZsZXhcIj5cbiAgICAgICAgICAgIDxVc2VyU2VhcmNoQm94IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgIHsvKiA8VXNlclNlYXJjaEJveCAvPiAqL31cbiAgICAgICAgICAgICAgICA8VXNlckxpc3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTg1MCBweC0yIHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5qb2huZG9lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14eHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwibWwtMyBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCAwaDI0djI0SDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIi4xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxYy00Ljk3IDAtOSA0LjAzLTkgOXY3YzAgMS42NiAxLjM0IDMgMyAzaDN2LThINXYtMmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3djJoLTR2OGgzYzEuNjYgMCAzLTEuMzQgMy0zdi03YzAtNC45Ny00LjAzLTktOS05elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cIm1sLTMgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVDMTQuNDYgMi4xOCAxNC4yNSAyIDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0U2lkZWJhcjtcbiIsImltcG9ydCBMZWZ0U2lkZWJhciBmcm9tICcuL0xlZnRTaWRlYmFyJ1xuaW1wb3J0IENoYXRTZWN0aW9uIGZyb20gJy4vQ2hhdFNlY3Rpb24nXG5jb25zdCBNYWluQm9keSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICAgICAgICA8TGVmdFNpZGViYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPENoYXRTZWN0aW9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Cb2R5OyIsImltcG9ydCB7IFVzZXJNb2RhbCB9IGZyb20gXCIuLi91c2VyXCI7XG5cbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC13aGl0ZSBoLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctNTYgZmxleC1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS05MDAgcHgtMyBweS0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5aT01DSEFUPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyb2ljb24tdWlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUuMyA5LjNhMSAxIDAgMCAxIDEuNCAxLjRsLTQgNGExIDEgMCAwIDEtMS40IDBsLTQtNGExIDEgMCAwIDEgMS40LTEuNGwzLjMgMy4yOSAzLjMtMy4zelwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTc1MCBmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTkwMCBweC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+IyA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gdGV4dC13aGl0ZVwiPmdlbmVyYWw8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VXNlckltYWdlIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8VXNlck1vZGFsIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWwgcGwtMyBtbC0zIGJvcmRlci1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtZ3JheS00MDAgaGlkZGVuIG1kOmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSm9obnkgRG9lXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIiBjbGFzc05hbWU9XCJtbC00IGhpZGRlbiBtZDppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwidmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMjAwIHN2Zy1pbmxpbmUtLWZhIGZhLXZpZGVvIGZhLXctMThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzM2LjIgNjRINDcuOEMyMS40IDY0IDAgODUuNCAwIDExMS44djI4OC40QzAgNDI2LjYgMjEuNCA0NDggNDcuOCA0NDhoMjg4LjRjMjYuNCAwIDQ3LjgtMjEuNCA0Ny44LTQ3LjhWMTExLjhjMC0yNi40LTIxLjQtNDcuOC00Ny44LTQ3Ljh6bTE4OS40IDM3LjdMNDE2IDE3Ny4zdjE1Ny40bDEwOS42IDc1LjVjMjEuMiAxNC42IDUwLjQtLjMgNTAuNC0yNS44VjEyNy41YzAtMjUuNC0yOS4xLTQwLjQtNTAuNC0yNS44elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cIm1sLTQgaGlkZGVuIG1kOmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJwaG9uZS1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMjAwIHN2Zy1pbmxpbmUtLWZhIGZhLXBob25lLWFsdCBmYS13LTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ5Ny4zOSAzNjEuOGwtMTEyLTQ4YTI0IDI0IDAgMCAwLTI4IDYuOWwtNDkuNiA2MC42QTM3MC42NiAzNzAuNjYgMCAwIDEgMTMwLjYgMjA0LjExbDYwLjYtNDkuNmEyMy45NCAyMy45NCAwIDAgMCA2LjktMjhsLTQ4LTExMkEyNC4xNiAyNC4xNiAwIDAgMCAxMjIuNi42MWwtMTA0IDI0QTI0IDI0IDAgMCAwIDAgNDhjMCAyNTYuNSAyMDcuOSA0NjQgNDY0IDQ2NGEyNCAyNCAwIDAgMCAyMy40LTE4LjZsMjQtMTA0YTI0LjI5IDI0LjI5IDAgMCAwLTE0LjAxLTI3LjZ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTZWFyY2hCb3ggLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlcm9pY29uLXVpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNi4zMiAxNC45bDUuMzkgNS40YTEgMSAwIDAgMS0xLjQyIDEuNGwtNS4zOC01LjM4YTggOCAwIDEgMSAxLjQxLTEuNDF6TTEwIDE2YTYgNiAwIDEgMCAwLTEyIDYgNiAwIDAgMCAwIDEyelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZWxsaXBzaXMtdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDAgc3ZnLWlubGluZS0tZmEgZmEtZWxsaXBzaXMtdiBmYS13LTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOTYgMTg0YzM5LjggMCA3MiAzMi4yIDcyIDcycy0zMi4yIDcyLTcyIDcyLTcyLTMyLjItNzItNzIgMzIuMi03MiA3Mi03MnpNMjQgODBjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03MlMxMzUuOCA4IDk2IDggMjQgNDAuMiAyNCA4MHptMCAzNTJjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03Mi0zMi4yLTcyLTcyLTcyLTcyIDMyLjItNzIgNzJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xuIiwiaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIjtcbmltcG9ydCBNYWluQm9keSBmcm9tIFwiLi9NYWluQm9keVwiO1xuXG5leHBvcnQgeyBUb3BCYXIsIE1haW5Cb2R5IH07XG4iLCJjb25zdCBVc2VySW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW1hZ2U7IiwiaW1wb3J0IFVzZXJMaXN0SXRlbSBmcm9tIFwiLi9Vc2VyTGlzdEl0ZW1cIjtcblxuY29uc3QgVXNlckxpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB4LTIgcHktM1wiPlxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCA5LCA4LCA3LCA4LCA4XS5tYXAoKHYsIGkpID0+XG4gICAgICAgICAgICAgICAgaSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0SXRlbSBzZWxlY3RlZD17dHJ1ZX0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTGlzdEl0ZW0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0OyIsImltcG9ydCBVc2VySW1hZ2UgZnJvbSBcIi4vVXNlckltYWdlXCI7XG5cbmNvbnN0IFVzZXJMaXN0SXRlbSA9ICh7IHNlbGVjdGVkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTUwMCBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTkwMCAke3NlbGVjdGVkICYmICdiZy1ncmF5LTc1MCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgbGVhZGluZy1ub25lXCI+Sm9uYXRoYW4gUmVpbmluazwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkF1ZyAxODwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3RJdGVtOyIsImltcG9ydCBVc2VySW1hZ2UgZnJvbSBcIi4vVXNlckltYWdlXCI7XG5cbmNvbnN0IFVzZXJNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YSBocmVmPScjICdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAuMzBzIGVhc2UtaW4tb3V0XCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY29udGVudCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1zbSBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctZ3JheS05MDAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIG9wYWNpdHktNSBoLTYgdy02IHRleHQtMnhsIGJsb2NrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qYm9keSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCAgZmxleC1jb2wgaXRlbXMtY2VudGVyIHNtOmp1c3RpZnktc3RhcnQganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCByb3VuZGVkLWxnIHctNDggaC00OCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciAgbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2RwMS5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWZvbnQgZm9udC1tZWRpdW0gdGV4dC1sZyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb2xkZW4gQ2F1bGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJIERldmVsb3BlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERJWSB0b3RlIGJhZyBkcmlua2luZyB2aW5lZ2FyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9udXQgYWRhcHRvZ2VuIHNxdWlkIGZhbm55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrIHZhcG9yd2FyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyAnIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwMTEtMWgzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMgJyBjbGFzc05hbWU9XCJtbC0yIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwMTMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwMDIzIDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyAnIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMS41YTguMzggOC4zOCAwIDAxLS45IDMuOCA4LjUgOC41IDAgMDEtNy42IDQuNyA4LjM4IDguMzggMCAwMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAxLS45LTMuOCA4LjUgOC41IDAgMDE0LjctNy42IDguMzggOC4zOCAwIDAxMy44LS45aC41YTguNDggOC40OCAwIDAxOCA4di41elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwibXktNCB0ZXh0LWdyYXktNjAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBhbHdheXMgZmVsdCBsaWtlIEkgY291bGQgZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhdOKAmXMgdGhlIG1haW4gdGhpbmcgcGVvcGxlIGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWQgYnkhIFRob3VnaHRzLSB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlcHRpb24gb2YgdGhlbXNlbHZlcyEgVGhleSdyZSBzbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3duIGJ5IHRoZWlyIHBlcmNlcHRpb24gb2YgdGhlbXNlbHZlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UncmUgdGF1Z2h0IHlvdSBjYW7igJl0IGRvIGFueXRoaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSB3b27igJl0IGRvIGFueXRoaW5nLiBJIHdhcyB0YXVnaHQgSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdWxkIGRvIGV2ZXJ5dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWdyZWVuLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJhbGwgLjE1cyBlYXNlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTI1IGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kYWw7IiwiY29uc3QgVXNlclNlYXJjaEJveCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC0yIHB5LTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTkwMCB0ZXh0LWdyYXktMjAwIHRleHQtcyBweC0yIHB5LTEgdy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgbXItNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjE4cHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9pY29uLXVpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYuMzIgMTQuOWw1LjM5IDUuNGExIDEgMCAwIDEtMS40MiAxLjRsLTUuMzgtNS4zOGE4IDggMCAxIDEgMS40MS0xLjQxek0xMCAxNmE2IDYgMCAxIDAgMC0xMiA2IDYgMCAwIDAgMCAxMnpcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2hCb3g7IiwiaW1wb3J0IFVzZXJJbWFnZSBmcm9tICcuL1VzZXJJbWFnZSdcbmltcG9ydCBVc2VyU2VhcmNoQm94IGZyb20gJy4vVXNlclNlYXJjaEJveCdcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuL1VzZXJMaXN0J1xuaW1wb3J0IFVzZXJNb2RhbCBmcm9tICcuL1VzZXJNb2RhbCdcblxuZXhwb3J0IHtcbiAgICBVc2VySW1hZ2UsXG4gICAgVXNlclNlYXJjaEJveCxcbiAgICBVc2VyTGlzdCxcbiAgICBVc2VyTW9kYWxcbn0iLCJpbXBvcnQge1RvcEJhciwgTWFpbkJvZHl9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgICAgPE1haW5Cb2R5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=