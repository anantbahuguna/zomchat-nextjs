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
    className: "ml-4",
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
    className: "ml-4",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGF0L0NoYXRJbnB1dEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQ2hhdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGVmdFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbkJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvVG9wQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL1VzZXJMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9Vc2VyTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL1VzZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvVXNlclNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDaGF0SW5wdXRCb3giLCJDaGF0U2VjdGlvbiIsIkxlZnRTaWRlYmFyIiwiTWFpbkJvZHkiLCJUb3BCYXIiLCJVc2VySW1hZ2UiLCJVc2VyTGlzdCIsIm1hcCIsInYiLCJpIiwiVXNlckxpc3RJdGVtIiwic2VsZWN0ZWQiLCJVc2VyTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidHJhbnNpdGlv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QUE7QUFBQTtBQUFBLElBUEosQ0FMSixDQU5KLENBREo7QUEyQkgsQ0E1QkQ7O0FBOEJlRCw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsTUFDVDtBQUFLLFdBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFLLFdBQVMsRUFBQyw0Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosRUFFSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixDQURKLENBREo7O0FBU2VBLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDWEEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ2hhdElucHV0Qm94ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS03NTAgaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBteC0zIGJvcmRlci10IGJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0yIHB5LTIgaC0xMCBiZy1ncmF5LTcwMCByb3VuZGVkLWwgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1yIGJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNDggOEMxMTEgOCAwIDExOSAwIDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM4NSA4IDI0OCA4em04MCAxNjhjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzItMzItMTQuMy0zMi0zMiAxNC4zLTMyIDMyLTMyem0tMTYwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzItMzItMTQuMy0zMi0zMiAxNC4zLTMyIDMyLTMyem0xOTQuOCAxNzAuMkMzMzQuMyAzODAuNCAyOTIuNSA0MDAgMjQ4IDQwMHMtODYuMy0xOS42LTExNC44LTUzLjhjLTEzLjYtMTYuMyAxMS0zNi43IDI0LjYtMjAuNSAyMi40IDI2LjkgNTUuMiA0Mi4yIDkwLjIgNDIuMnM2Ny44LTE1LjQgOTAuMi00Mi4yYzEzLjQtMTYuMiAzOC4xIDQuMiAyNC42IDIwLjV6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIGgtMTAgcHgtMiBweSAtMiBiZy1ncmF5LTcwMCB0ZXh0LWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTIgYmctZ3JheS03MDAgcm91bmRlZC1yIGZsZXggaXRlbXMtY2VudGVyIGgtMTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImgtMTAgYmctZ3JheS03MDAgcm91bmRlZC1sIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwicGFwZXItcGxhbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBzdmctaW5saW5lLS1mYSBmYS1wYXBlci1wbGFuZSBmYS13LTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDc2IDMuMkwxMi41IDI3MC42Yy0xOC4xIDEwLjQtMTUuOCAzNS42IDIuMiA0My4yTDEyMSAzNTguNGwyODcuMy0yNTMuMmM1LjUtNC45IDEzLjMgMi42IDguNiA4LjNMMTc2IDQwN3Y4MC41YzAgMjMuNiAyOC41IDMyLjkgNDIuNSAxNS44TDI4MiA0MjZsMTI0LjYgNTIuMmMxNC4yIDYgMzAuNC0yLjkgMzMtMTguMmw3Mi00MzJDNTE1IDcuOCA0OTMuMy02LjggNDc2IDMuMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzU4IDMxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM1OCAxNTlMMCAwTDM0IDEzNkwxNTkgMTU5TDM0IDE4MkwwIDMxOEwzNTggMTU5WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAqL31cblxuICAgICAgICAgICAgICAgICAgICB7LyogPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIgNDQ4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDE2MFYzMjBIMzJ2MTI4em00NDgtMjg4aC00Mi4xYzYuMi0xMi4xIDEwLjEtMjUuNSAxMC4xLTQwIDAtNDguNS0zOS41LTg4LTg4LTg4LTQxLjYgMC02OC41IDIxLjMtMTAzIDY4LjMtMzQuNS00Ny02MS40LTY4LjMtMTAzLTY4LjMtNDguNSAwLTg4IDM5LjUtODggODggMCAxNC41IDMuOCAyNy45IDEwLjEgNDBIMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgwYzAgOC44IDcuMiAxNiAxNiAxNmg0ODBjOC44IDAgMTYtNy4yIDE2LTE2di04MGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTMyNi4xIDBjLTIyLjEgMC00MC0xNy45LTQwLTQwczE3LjktNDAgNDAtNDBjMTkuOSAwIDM0LjYgMy4zIDg2LjEgODBoLTg2LjF6bTIwNi4xIDBoLTg2LjFjNTEuNC03Ni41IDY1LjctODAgODYuMS04MCAyMi4xIDAgNDAgMTcuOSA0MCA0MHMtMTcuOSA0MC00MCA0MHptLTcyIDMyMGgxNjBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzIwSDI4OHYxNjB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gKi99XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoLTEwIGJnLWdyYXktNzAwIHJvdW5kZWQtbCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtd2hpdGUgbWwtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDE0YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDVjMC0xLjY2LTEuMzQtMy0zLTNTOSAzLjM0IDkgNXY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTQgNi43IDExSDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjFoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdElucHV0Qm94OyIsImltcG9ydCBDaGF0SW5wdXRCb3ggZnJvbSBcIi4vQ2hhdElucHV0Qm94XCI7XG5cbmV4cG9ydCB7IENoYXRJbnB1dEJveCB9O1xuIiwiaW1wb3J0IHsgQ2hhdElucHV0Qm94IH0gZnJvbSBcIi4uL2NoYXRcIjtcblxuY29uc3QgQ2hhdFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCIgZmxleC0xIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS03NTAgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGZvbnQtY2hhdCB0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtNiBteS0zIHB5LTQgIGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHB4LTQgcHktMiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnllYWggaGFoYWhhPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5zb21lIG90aGVyIGNvbW1lbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PndoeSBhcmUgeW91IHNvIGF3ZXNvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBteC02IG15LTMgcHktNCAgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIG1sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXJlZC02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huZG9lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA3LzE5LzIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5IZXJlIGFyZSB0aGUgVGFpbHdpbmQgRG9jczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTYgbXktMyBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tNjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9obmRvZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwNy8xOS8yMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvZXMgdGhhdCByZXN1bHQgaW4gdGhlIHJhdyBzdmcgYmVpbmcgaW5saW5lZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgRE9NP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC02IG15LTMgcHktNCBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHB4LTQgcHktMiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGhhbmR5IGlmIHlvdSBkb24ndCB3YW50IHRvIGxvYWQgU1ZHIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBteC02IG15LTMgcHktNCAgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIG1sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXJlZC02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huZG9lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA3LzE5LzIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBoYW5kbHkgaWYgWW91IERvbid0IHdhbnQgdG8gbG9hZCBhcyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlIFNWRyBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTYgbXktMyBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZHAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgcHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tNjAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9obmRvZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwNy8xOS8yMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RXhhY3RseSB0aGUgc2FtZSB3YXkgYXMgaW4gVnVlIGltcHVsc2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtNiBteS0zIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kcDEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNSBweC00IHB5LTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNjAwIHRvLWluZGlnby02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huZG9lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA3LzE5LzIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSB0aGluayBpdCBjYW4gc2xvdyBkb3duIHRoZSBwYWdlIGlmIHRoZXJlJ3MgdG9vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11Y2ggYmxvYXQgaW4gdGhlIGRvY3VtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q29tcGFyZWQgdG8gbG9hZGluZyBpdCBleHRlcm5hbGx5LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC02IG15LTMgcHktNCBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHB4LTQgcHktMiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5kb2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDcvMTkvMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYXJpc29uIHdvdWxkIGJlIGJldHRlciBpZiBpdCdzIG5vdCBhbHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmluZyBhbiB2ZWN0b3Igc3ZnIHRvIGEgcmFzdGVyIGdpZiwgaXQncyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UgaW4gcmVuZGVyaW5nIHRvby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENoYXRJbnB1dEJveCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRTZWN0aW9uO1xuIiwiaW1wb3J0IHsgVXNlclNlYXJjaEJveCwgVXNlckltYWdlLCBVc2VyTGlzdCB9IGZyb20gXCIuLi91c2VyXCI7XG5cbmNvbnN0IExlZnRTaWRlYmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdy01NiBmbGV4LW5vbmUgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGhpZGRlbiBtZDpmbGV4XCI+XG4gICAgICAgICAgICA8VXNlclNlYXJjaEJveCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7LyogPFVzZXJTZWFyY2hCb3ggLz4gKi99XG4gICAgICAgICAgICAgICAgPFVzZXJMaXN0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04NTAgcHgtMiBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VySW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+am9obmRvZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cIm1sLTMgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAgMGgyNHYyNEgwelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIuMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMWMtNC45NyAwLTkgNC4wMy05IDl2N2MwIDEuNjYgMS4zNCAzIDMgM2gzdi04SDV2LTJjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgN3YyaC00djhoM2MxLjY2IDAgMy0xLjM0IDMtM3YtN2MwLTQuOTctNC4wMy05LTktOXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIiBjbGFzc05hbWU9XCJtbC0zIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjQzIDEyLjk4Yy4wNC0uMzIuMDctLjY0LjA3LS45OHMtLjAzLS42Ni0uMDctLjk4bDIuMTEtMS42NWMuMTktLjE1LjI0LS40Mi4xMi0uNjRsLTItMy40NmMtLjEyLS4yMi0uMzktLjMtLjYxLS4yMmwtMi40OSAxYy0uNTItLjQtMS4wOC0uNzMtMS42OS0uOThsLS4zOC0yLjY1QzE0LjQ2IDIuMTggMTQuMjUgMiAxNCAyaC00Yy0uMjUgMC0uNDYuMTgtLjQ5LjQybC0uMzggMi42NWMtLjYxLjI1LTEuMTcuNTktMS42OS45OGwtMi40OS0xYy0uMjMtLjA5LS40OSAwLS42MS4yMmwtMiAzLjQ2Yy0uMTMuMjItLjA3LjQ5LjEyLjY0bDIuMTEgMS42NWMtLjA0LjMyLS4wNy42NS0uMDcuOThzLjAzLjY2LjA3Ljk4bC0yLjExIDEuNjVjLS4xOS4xNS0uMjQuNDItLjEyLjY0bDIgMy40NmMuMTIuMjIuMzkuMy42MS4yMmwyLjQ5LTFjLjUyLjQgMS4wOC43MyAxLjY5Ljk4bC4zOCAyLjY1Yy4wMy4yNC4yNC40Mi40OS40Mmg0Yy4yNSAwIC40Ni0uMTguNDktLjQybC4zOC0yLjY1Yy42MS0uMjUgMS4xNy0uNTkgMS42OS0uOThsMi40OSAxYy4yMy4wOS40OSAwIC42MS0uMjJsMi0zLjQ2Yy4xMi0uMjIuMDctLjQ5LS4xMi0uNjRsLTIuMTEtMS42NXpNMTIgMTUuNWMtMS45MyAwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUgMy41LTMuNSAzLjUgMS41NyAzLjUgMy41LTEuNTcgMy41LTMuNSAzLjV6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdFNpZGViYXI7XG4iLCJpbXBvcnQgTGVmdFNpZGViYXIgZnJvbSAnLi9MZWZ0U2lkZWJhcidcbmltcG9ydCBDaGF0U2VjdGlvbiBmcm9tICcuL0NoYXRTZWN0aW9uJ1xuY29uc3QgTWFpbkJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgICAgICAgPExlZnRTaWRlYmFyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LTEgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxDaGF0U2VjdGlvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQm9keTsiLCJpbXBvcnQgeyBVc2VyTW9kYWwgfSBmcm9tIFwiLi4vdXNlclwiO1xuXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtd2hpdGUgaC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB3LTU2IGZsZXgtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktOTAwIHB4LTMgcHktMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Wk9NQ0hBVDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9pY29uLXVpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1LjMgOS4zYTEgMSAwIDAgMSAxLjQgMS40bC00IDRhMSAxIDAgMCAxLTEuNCAwbC00LTRhMSAxIDAgMCAxIDEuNC0xLjRsMy4zIDMuMjkgMy4zLTMuM3pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS03NTAgZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS05MDAgcHgtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bFwiPiMgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIHRleHQtd2hpdGVcIj5nZW5lcmFsPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICB7LyogPFVzZXJJbWFnZSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJNb2RhbCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1sIHBsLTMgbWwtMyBib3JkZXItZ3JheS02MDAgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIGhpZGRlbiBtZDppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEpvaG55IERvZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJ2aWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDAgc3ZnLWlubGluZS0tZmEgZmEtdmlkZW8gZmEtdy0xOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMzYuMiA2NEg0Ny44QzIxLjQgNjQgMCA4NS40IDAgMTExLjh2Mjg4LjRDMCA0MjYuNiAyMS40IDQ0OCA0Ny44IDQ0OGgyODguNGMyNi40IDAgNDcuOC0yMS40IDQ3LjgtNDcuOFYxMTEuOGMwLTI2LjQtMjEuNC00Ny44LTQ3LjgtNDcuOHptMTg5LjQgMzcuN0w0MTYgMTc3LjN2MTU3LjRsMTA5LjYgNzUuNWMyMS4yIDE0LjYgNTAuNC0uMyA1MC40LTI1LjhWMTI3LjVjMC0yNS40LTI5LjEtNDAuNC01MC40LTI1Ljh6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJwaG9uZS1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMjAwIHN2Zy1pbmxpbmUtLWZhIGZhLXBob25lLWFsdCBmYS13LTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ5Ny4zOSAzNjEuOGwtMTEyLTQ4YTI0IDI0IDAgMCAwLTI4IDYuOWwtNDkuNiA2MC42QTM3MC42NiAzNzAuNjYgMCAwIDEgMTMwLjYgMjA0LjExbDYwLjYtNDkuNmEyMy45NCAyMy45NCAwIDAgMCA2LjktMjhsLTQ4LTExMkEyNC4xNiAyNC4xNiAwIDAgMCAxMjIuNi42MWwtMTA0IDI0QTI0IDI0IDAgMCAwIDAgNDhjMCAyNTYuNSAyMDcuOSA0NjQgNDY0IDQ2NGEyNCAyNCAwIDAgMCAyMy40LTE4LjZsMjQtMTA0YTI0LjI5IDI0LjI5IDAgMCAwLTE0LjAxLTI3LjZ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTZWFyY2hCb3ggLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlcm9pY29uLXVpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNi4zMiAxNC45bDUuMzkgNS40YTEgMSAwIDAgMS0xLjQyIDEuNGwtNS4zOC01LjM4YTggOCAwIDEgMSAxLjQxLTEuNDF6TTEwIDE2YTYgNiAwIDEgMCAwLTEyIDYgNiAwIDAgMCAwIDEyelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiZWxsaXBzaXMtdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS0yMDAgc3ZnLWlubGluZS0tZmEgZmEtZWxsaXBzaXMtdiBmYS13LTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOTYgMTg0YzM5LjggMCA3MiAzMi4yIDcyIDcycy0zMi4yIDcyLTcyIDcyLTcyLTMyLjItNzItNzIgMzIuMi03MiA3Mi03MnpNMjQgODBjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03MlMxMzUuOCA4IDk2IDggMjQgNDAuMiAyNCA4MHptMCAzNTJjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03Mi0zMi4yLTcyLTcyLTcyLTcyIDMyLjItNzIgNzJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xuIiwiaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIjtcbmltcG9ydCBNYWluQm9keSBmcm9tIFwiLi9NYWluQm9keVwiO1xuXG5leHBvcnQgeyBUb3BCYXIsIE1haW5Cb2R5IH07XG4iLCJjb25zdCBVc2VySW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2RwMS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW1hZ2U7IiwiaW1wb3J0IFVzZXJMaXN0SXRlbSBmcm9tIFwiLi9Vc2VyTGlzdEl0ZW1cIjtcblxuY29uc3QgVXNlckxpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB4LTIgcHktM1wiPlxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCA5LCA4LCA3LCA4LCA4XS5tYXAoKHYsIGkpID0+XG4gICAgICAgICAgICAgICAgaSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0SXRlbSBzZWxlY3RlZD17dHJ1ZX0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTGlzdEl0ZW0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0OyIsImltcG9ydCBVc2VySW1hZ2UgZnJvbSBcIi4vVXNlckltYWdlXCI7XG5cbmNvbnN0IFVzZXJMaXN0SXRlbSA9ICh7IHNlbGVjdGVkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTUwMCBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTkwMCAke3NlbGVjdGVkICYmICdiZy1ncmF5LTc1MCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgbGVhZGluZy1ub25lXCI+Sm9uYXRoYW4gUmVpbmluazwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkF1ZyAxODwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3RJdGVtOyIsImltcG9ydCBVc2VySW1hZ2UgZnJvbSBcIi4vVXNlckltYWdlXCI7XG5cbmNvbnN0IFVzZXJNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YSBocmVmPScjICdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAuMzBzIGVhc2UtaW4tb3V0XCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY29udGVudCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1zbSBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctZ3JheS05MDAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIG9wYWNpdHktNSBoLTYgdy02IHRleHQtMnhsIGJsb2NrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qYm9keSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCAgZmxleC1jb2wgaXRlbXMtY2VudGVyIHNtOmp1c3RpZnktc3RhcnQganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCByb3VuZGVkLWxnIHctNDggaC00OCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciAgbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2RwMS5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWZvbnQgZm9udC1tZWRpdW0gdGV4dC1sZyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb2xkZW4gQ2F1bGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJIERldmVsb3BlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERJWSB0b3RlIGJhZyBkcmlua2luZyB2aW5lZ2FyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9udXQgYWRhcHRvZ2VuIHNxdWlkIGZhbm55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrIHZhcG9yd2FyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyAnIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggMmgtM2E1IDUgMCAwMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwMTEtMWgzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMgJyBjbGFzc05hbWU9XCJtbC0yIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwMTMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwMDIzIDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyAnIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMS41YTguMzggOC4zOCAwIDAxLS45IDMuOCA4LjUgOC41IDAgMDEtNy42IDQuNyA4LjM4IDguMzggMCAwMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAxLS45LTMuOCA4LjUgOC41IDAgMDE0LjctNy42IDguMzggOC4zOCAwIDAxMy44LS45aC41YTguNDggOC40OCAwIDAxOCA4di41elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwibXktNCB0ZXh0LWdyYXktNjAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBhbHdheXMgZmVsdCBsaWtlIEkgY291bGQgZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhdOKAmXMgdGhlIG1haW4gdGhpbmcgcGVvcGxlIGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWQgYnkhIFRob3VnaHRzLSB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlcHRpb24gb2YgdGhlbXNlbHZlcyEgVGhleSdyZSBzbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3duIGJ5IHRoZWlyIHBlcmNlcHRpb24gb2YgdGhlbXNlbHZlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UncmUgdGF1Z2h0IHlvdSBjYW7igJl0IGRvIGFueXRoaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSB3b27igJl0IGRvIGFueXRoaW5nLiBJIHdhcyB0YXVnaHQgSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdWxkIGRvIGV2ZXJ5dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWdyZWVuLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJhbGwgLjE1cyBlYXNlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTI1IGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kYWw7IiwiY29uc3QgVXNlclNlYXJjaEJveCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC0yIHB5LTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTkwMCB0ZXh0LWdyYXktMjAwIHRleHQtcyBweC0yIHB5LTEgdy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgbXItNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjE4cHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9pY29uLXVpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYuMzIgMTQuOWw1LjM5IDUuNGExIDEgMCAwIDEtMS40MiAxLjRsLTUuMzgtNS4zOGE4IDggMCAxIDEgMS40MS0xLjQxek0xMCAxNmE2IDYgMCAxIDAgMC0xMiA2IDYgMCAwIDAgMCAxMnpcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2hCb3g7IiwiaW1wb3J0IFVzZXJJbWFnZSBmcm9tICcuL1VzZXJJbWFnZSdcbmltcG9ydCBVc2VyU2VhcmNoQm94IGZyb20gJy4vVXNlclNlYXJjaEJveCdcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuL1VzZXJMaXN0J1xuaW1wb3J0IFVzZXJNb2RhbCBmcm9tICcuL1VzZXJNb2RhbCdcblxuZXhwb3J0IHtcbiAgICBVc2VySW1hZ2UsXG4gICAgVXNlclNlYXJjaEJveCxcbiAgICBVc2VyTGlzdCxcbiAgICBVc2VyTW9kYWxcbn0iLCJpbXBvcnQge1RvcEJhciwgTWFpbkJvZHl9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgICAgPE1haW5Cb2R5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=