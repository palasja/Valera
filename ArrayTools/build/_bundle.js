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

/***/ "./scripts/arrayprocessor.js":
/*!***********************************!*\
  !*** ./scripts/arrayprocessor.js ***!
  \***********************************/
/***/ ((module) => {

eval("var arrayValueProcessor = (function () {\r\n    let arrayValueProcessor = {};\r\n\r\n    arrayValueProcessor.getSlowMaxSubSum = function (array) {\r\n        let newArray = Object.assign([], array);\r\n        let maxSum = 0;\r\n        for (let i = 0; i < newArray.length; i++) {\r\n          let sumFixedStart = 0;\r\n          for (var j = i; j < newArray.length; j++) {\r\n            sumFixedStart += newArray[j];\r\n            maxSum = Math.max(maxSum, sumFixedStart);\r\n          };\r\n        };\r\n        return maxSum;\r\n    };\r\n\r\n    arrayValueProcessor.getFastMaxSubSum = function(array) {\r\n        let newArray = Object.assign([], array);\r\n        let maxSum = 0;\r\n        let partialSum = 0;\r\n      \r\n        for (var item of newArray) {\r\n          partialSum += item;\r\n          maxSum = Math.max(maxSum, partialSum);\r\n          if (partialSum < 0) partialSum = 0;\r\n        };\r\n        return maxSum;\r\n    };\r\n\r\n    arrayValueProcessor.searchMaxValue = function(array) {\r\n        return Math.max.apply(null, array);\r\n    };\r\n      \r\n    arrayValueProcessor.searchMinValue = function(array) {\r\n        return Math.min.apply(null, array);\r\n    };\r\n      \r\n    arrayValueProcessor.searchMedianValue = function(array) {\r\n        let newArray = array;\r\n        newArray.sort(function (a, b) {\r\n          return a - b;\r\n        });\r\n        let half = Math.floor(newArray.length / 2);\r\n        if (newArray.length % 2)\r\n          return newArray[half];\r\n        return (newArray[half - 1] + newArray[half]) / 2.0;\r\n    };\r\n      \r\n    arrayValueProcessor.selectionTaskMaxSequence = function(arraySeq) {\r\n        debugger;\r\n        let newArray = Object.assign([], arraySeq);\r\n        let max = 0;\r\n        let maxValue = \"\";\r\n        let cur = 0;\r\n        let curValue = \"\";\r\n        let previos = Number.MIN_VALUE;\r\n        for (let i = 0; i < newArray.length; i++) {\r\n          if (newArray[i] > previos) {\r\n            cur++;\r\n            curValue = curValue + ',' + newArray[i];\r\n          } else {\r\n            if (cur > max) {\r\n              max = cur;\r\n              maxValue = curValue;\r\n            }\r\n            cur = 1;\r\n            curValue = newArray[i];\r\n          }\r\n          previos = newArray[i];\r\n        }\r\n        return maxValue;\r\n      }\r\n\r\n    return arrayValueProcessor;\r\n}());\r\n\r\nmodule.exports = arrayValueProcessor;\n\n//# sourceURL=webpack://arraytools/./scripts/arrayprocessor.js?");

/***/ }),

/***/ "./scripts/arraysorter.js":
/*!********************************!*\
  !*** ./scripts/arraysorter.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nvar arrayToolsModule = (function () {\r\n    let arraySortProcessor = {};\r\n    let _getNewIntValue = function (inputString) {\r\n        let valid = false;\r\n        do {\r\n            let inputInt = parseInt(inputString, 10);\r\n            if (!isNaN(inputInt)) {\r\n                valid = true;\r\n                return inputInt;\r\n            }\r\n            else {\r\n                valid = false;\r\n                let message = (\"Value is not an integer. Please, enter Integer Value!\");\r\n                inputString = prompt(message);\r\n            }\r\n        } while (!valid);\r\n    }\r\n    arraySortProcessor.getArray = function () {\r\n        let message = \"Enter the number of elements in the array (Integer Value)\"\r\n        let inputString = prompt(message);\r\n        debugger;\r\n        let arrayLength = _getNewIntValue(inputString);\r\n        let inputArray = [];\r\n\r\n        for (let n = 0; n < arrayLength; n++) {\r\n            inputString = prompt(`Enter array element ${n + 1} of ${arrayLength}`)\r\n            inputArray.push(_getNewIntValue(inputString));\r\n        }\r\n        return inputArray;\r\n    };\r\n\r\n    arraySortProcessor.insertSort = function (array) {\r\n        let newArray = Object.assign([], array)\r\n        let len = newArray.length;\r\n        for (let i = 0; i < len; i++) {\r\n            let el = newArray[i];\r\n            let j;\r\n            for (j = i - 1; j >= 0 && newArray[j] > el; j--) {\r\n                newArray[j + 1] = newArray[j];\r\n            }\r\n            newArray[j + 1] = el;\r\n        }\r\n        return newArray;\r\n    };\r\n\r\n    arraySortProcessor.bubbleSort = function (array) {\r\n        let newArray = Object.assign([], array)\r\n        let len = newArray.length;\r\n        for (let i = 0; i < len; i++) {\r\n            for (let j = 0; j < len - i - 1; j++) {\r\n                if (newArray[j] > newArray[j + 1]) {\r\n                    let temp = newArray[j];\r\n                    newArray[j] = newArray[j + 1];\r\n                    newArray[j + 1] = temp;\r\n                }\r\n            }\r\n        }\r\n        return newArray;\r\n    };\r\n\r\n    arraySortProcessor.selectionSort = function (array) {\r\n        let newArray = Object.assign([], array)\r\n        let len = newArray.length;\r\n        for (let i = 0; i < len; i++) {\r\n            let min = i;\r\n            for (let j = i + 1; j < len; j++) {\r\n                if (newArray[j] < newArray[min]) {\r\n                    min = j;\r\n                }\r\n            }\r\n            if (min != i) {\r\n                let tmp = newArray[i];\r\n                newArray[i] = newArray[min];\r\n                newArray[min] = tmp;\r\n            }\r\n        }\r\n        return newArray;\r\n    };\r\n\r\n    arraySortProcessor.numericSort = function (array) {\r\n        let newArray = Object.assign([], array)\r\n        return newArray.sort(function (a, b) { return a - b; });\r\n    };\r\n\r\n    arraySortProcessor.randomSort = function (array) {\r\n        let newArray = Object.assign([], array)\r\n        return newArray.sort(function (a, b) { return 0.5 - Math.random() });\r\n    };\r\n\r\n    return arraySortProcessor;\r\n}());\r\n\r\nmodule.exports = arrayToolsModule;\n\n//# sourceURL=webpack://arraytools/./scripts/arraysorter.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst arrayToolsModule = __webpack_require__(/*! ./arraysorter.js */ \"./scripts/arraysorter.js\");\r\nconst arrayValueProcessor = __webpack_require__(/*! ./arrayprocessor.js */ \"./scripts/arrayprocessor.js\");\r\n\r\n    var array = arrayToolsModule.getArray();\r\n\r\n    alert (\"Input array is: \" + array);\r\n    \r\n    var array2 = arrayToolsModule.insertSort(array);\r\n    alert (`Input array is: ${array}; \\n Output array Insert Sort method: ${array2}`);\r\n    \r\n    array2 = arrayToolsModule.bubbleSort(array);\r\n    alert (`Input array is: ${array}; \\n Output array Bubble Sort method: ${array2}`);\r\n    \r\n    array2 = arrayToolsModule.selectionSort(array);\r\n    alert (`Input array is: ${array}; \\n Output array Selection Sort method: ${array2}`);\r\n    \r\n    array2 = arrayToolsModule.numericSort(array);\r\n    alert (`Input array is: ${array}; \\n Output array Numeric Sort method: ${array2}`);\r\n    \r\n    array2 = arrayToolsModule.randomSort(array);\r\n    alert (`Input array is: ${array}; \\n Output array Random Sort method: ${array2}`);\r\n    \r\n    var sum = arrayValueProcessor.getSlowMaxSubSum(array);\r\n    alert (`Input array is: ${array}; \\n Sum Slow method = ${sum}`);\r\n\r\n    var sum2 = arrayValueProcessor.getFastMaxSubSum(array);\r\n    alert (`Input array is: ${array}; \\n Sum Fast method = ${sum2}`);\r\n\r\n    var max = arrayValueProcessor.searchMaxValue(array);\r\n    alert (`Input array is: ${array}; \\n Max value = ${max}`);\r\n\r\n    var min = arrayValueProcessor.searchMinValue(array);\r\n    alert (`Input array is: ${array}; \\n Min value = ${min}`);\r\n\r\n    var median = arrayValueProcessor.searchMedianValue(array);\r\n    alert (`Input array is: ${array}; \\n Min value = ${median}`);\r\n\r\n    var arraySeq = prompt(\"Input array like this: 1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1\").split(\",\")\r\n    var maxSequence = arrayValueProcessor.selectionTaskMaxSequence(arraySeq)\r\n    alert (`Input array is: ${arraySeq}; \\n max sequence = ${maxSequence}`);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://arraytools/./scripts/main.js?");

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