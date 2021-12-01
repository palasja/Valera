/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/AarraySorterRunner.js":
/*!***************************************!*\
  !*** ./scripts/AarraySorterRunner.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const arraysorter = __webpack_require__(/*! ./arraysorter.js */ \"./scripts/arraysorter.js\");\r\nconst getArrInt = __webpack_require__(/*! ./Reader */ \"./scripts/Reader.js\");\r\nvar arr = getArrInt.readNum();\r\nalert(\"maxMin: \" + arraysorter.maxMin(arr));\r\nalert(\"minMax: \" + arraysorter.minMax(arr));\r\nalert(\"pow2: \" + arraysorter.pow2(arr));\r\nalert(\"odd: \" + arraysorter.odd(arr));\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cash/./scripts/AarraySorterRunner.js?");

/***/ }),

/***/ "./scripts/Reader.js":
/*!***************************!*\
  !*** ./scripts/Reader.js ***!
  \***************************/
/***/ ((module) => {

eval("var Reader = (function(){\r\n    let reader = {};\r\n    reader.readNum = function(){\r\n        return prompt(\"Input array\").split(',').map(string => +string);\r\n    }\r\n    return reader;\r\n}());\r\n\r\nmodule.exports = Reader;\n\n//# sourceURL=webpack://cash/./scripts/Reader.js?");

/***/ }),

/***/ "./scripts/arraysorter.js":
/*!********************************!*\
  !*** ./scripts/arraysorter.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nvar arraySorter = (function () {\r\n    let arraySort = {};\r\n    arraySort.minMax = function(arr) {\r\n        return arr.sort((a, b) => a - b);\r\n    };\r\n    arraySort.maxMin = function(arr) {\r\n        return arr.sort((a, b) => b - a);\r\n    };\r\n    arraySort.pow2 = function(arr) {\r\n        return arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));\r\n    };\r\n    arraySort.odd = function(arr) {\r\n        return arr.sort((a) => {\r\n            if (a % 2 == 0) {\r\n                return 1;\r\n            } else {\r\n                return -1;\r\n            }\r\n        });\r\n    };\r\n    return arraySort;\r\n}());\r\n\r\nmodule.exports = arraySorter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/arraysorter.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//const arrayTools = require(\"./ArrayToolsRunner\");\r\nif (confirm(\"Run sorted ?\")){__webpack_require__(/*! ./AarraySorterRunner */ \"./scripts/AarraySorterRunner.js\");}\n\n//# sourceURL=webpack://cash/./scripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;