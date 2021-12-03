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

/***/ "./scripts/Reader.js":
/*!***************************!*\
  !*** ./scripts/Reader.js ***!
  \***************************/
/***/ ((module) => {

eval("var Reader = (function(){\r\n    let reader = {};\r\n    reader.readNum = function(){\r\n        return prompt(\"Input array\").split(',').map(string => +string);\r\n    };\r\n    reader.readStr = function(message){\r\n        return prompt(message);\r\n    };\r\n    reader.readPositiveNum = function(message){\r\n        return Number.parseInt(prompt(message));\r\n    };\r\n    reader.readBinary = function(message){\r\n        return prompt(message);\r\n    };\r\n    reader.readArthSign = function(message){\r\n        let sign = prompt(message);\r\n        while(! /^[-/+*]{1}$/.test(sign)){\r\n            sign = prompt(message);\r\n        }\r\n        return sign;\r\n    };\r\n    return reader;\r\n}());\r\n\r\nmodule.exports = Reader;\n\n//# sourceURL=webpack://cash/./scripts/Reader.js?");

/***/ }),

/***/ "./scripts/arraySorter/arraySorter.js":
/*!********************************************!*\
  !*** ./scripts/arraySorter/arraySorter.js ***!
  \********************************************/
/***/ ((module) => {

eval("var arraySorter = (function () {\r\n    let arraySort = {};\r\n    arraySort.minMax = function(arr) {\r\n        return arr.sort((a, b) => a - b);\r\n    };\r\n    arraySort.maxMin = function(arr) {\r\n        return arr.sort((a, b) => b - a);\r\n    };\r\n    arraySort.pow2 = function(arr) {\r\n        return arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));\r\n    };\r\n    arraySort.odd = function(arr) {\r\n        return arr.sort((a) => {\r\n            if (a % 2 == 0) {\r\n                return 1;\r\n            } else {\r\n                return -1;\r\n            }\r\n        });\r\n    };\r\n    return arraySort;\r\n}());\r\n\r\nmodule.exports = arraySorter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/arraySorter/arraySorter.js?");

/***/ }),

/***/ "./scripts/arraySorter/arraySorterRunner.js":
/*!**************************************************!*\
  !*** ./scripts/arraySorter/arraySorterRunner.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const arraysorter = __webpack_require__(/*! ./arraySorter.js */ \"./scripts/arraySorter/arraySorter.js\");\r\nconst getArrInt = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nvar arr = getArrInt.readNum();\r\nalert(\"maxMin: \" + arraysorter.maxMin(arr));\r\nalert(\"minMax: \" + arraysorter.minMax(arr));\r\nalert(\"pow2: \" + arraysorter.pow2(arr));\r\nalert(\"odd: \" + arraysorter.odd(arr));\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cash/./scripts/arraySorter/arraySorterRunner.js?");

/***/ }),

/***/ "./scripts/arrayTools/arrayTools.js":
/*!******************************************!*\
  !*** ./scripts/arrayTools/arrayTools.js ***!
  \******************************************/
/***/ ((module) => {

eval("var ArrayProcessingToolo = (function () {\r\n    let arrayValueProcessor = {};\r\n\r\n    arrayValueProcessor.getSubSum = function(arr) {\r\n      var max = 0;\r\n      var res = 0;\r\n      for (var i = 0; i < arr.length; i++) {\r\n          if (+arr[i] + res < 0) {\r\n              res = 0;\r\n              continue;\r\n          }\r\n          res = res + +arr[i];\r\n          if (res > max) max = res;\r\n      }\r\n      return max;\r\n  }; \r\n  arrayValueProcessor.getSubSumSlow = function(arr) {\r\n      var maxValue = 0;\r\n      var curValue = 0;\r\n      var previos = Number.MIN_VALUE;\r\n      for (var i = 0; i < arr.length; i++) {\r\n          curValue = 0;\r\n          previos = Number.MIN_VALUE;\r\n          for (var j = i; j < arr.length; j++) {\r\n              if (+arr[j] + curValue >= 0 && previos < arr[j]) {\r\n                  curValue = curValue + arr[j];\r\n                  previos = arr[j];\r\n              } else {\r\n                  break;\r\n              }\r\n          }\r\n          if (maxValue < curValue) {\r\n              maxValue = curValue;\r\n          }\r\n      }\r\n      return maxValue;\r\n  };\r\n  arrayValueProcessor.getMaxElemetn = function(arr) {\r\n      var max = Number.MIN_VALUE;\r\n      for (var i = 0; i < arr.length; i++) {\r\n          if (arr[i] > max) max = arr[i];\r\n      }\r\n      return max;\r\n  };\r\n  arrayValueProcessor.getMinElemetn = function(arr) {\r\n      var min = Number.MAX_VALUE;\r\n      for (var i = 0; i < arr.length; i++) {\r\n          if (arr[i] < min) min = arr[i];\r\n      }\r\n      return min;\r\n  };\r\n  arrayValueProcessor.getMedian = function(arr) {\r\n      var odd = arr.length % 2 == 1 ? true : false;\r\n      var medianValue = null;\r\n      if (odd) {\r\n          var median = Math.ceil(arr.length / 2);\r\n          medianValue = calcMedian(median - 1, median - 1);\r\n      } else {\r\n          var medianMinIndex = Math.ceil(arr.length / 2);\r\n          var medianMin = calcMedian(medianMinIndex - 1, medianMinIndex);\r\n          var medianMax = calcMedian(medianMinIndex, medianMinIndex - 1);\r\n          medianValue = (medianMin + medianMax) / 2;\r\n      }\r\n      return medianValue;\r\n      function calcMedian(countLess, countMore) {\r\n          var more = 0;\r\n          var less = 0;\r\n          var equal = 0;\r\n          var cur = 0;\r\n          var medianValue = null;\r\n          for (var i = 0; i < arr.length; i++) {\r\n              cur = arr[i];\r\n              more = 0;\r\n              less = 0;\r\n              for (var j = 0; j < arr.length; j++) {\r\n                  if (i == j) continue;\r\n                  if (arr[j] < cur) less++;\r\n                  if (arr[j] > cur) more++;\r\n                  if (arr[j] == cur) equal++;\r\n                  if (less > countLess || countMore < more) break;\r\n              }\r\n  \r\n              if ((Math.abs(more - less) <= equal) || (countMore == more && less == countLess)) {\r\n                  medianValue = cur;\r\n                  break;\r\n              }\r\n  \r\n          }\r\n          return medianValue;\r\n      };\r\n  };\r\n  arrayValueProcessor.getMaxSequence = function(arr) {\r\n      var max = 0;\r\n      var maxValue = \"\";\r\n      var cur = 0;\r\n      var curValue = \"\";\r\n      var previos = Number.MIN_VALUE;\r\n      for (var i = 0; i < arr.length; i++) {\r\n          if (arr[i] > previos) {\r\n              cur++;\r\n              curValue = curValue + \",\" + arr[i];\r\n          } else {\r\n              if (cur > max) {\r\n                  max = cur;\r\n                  maxValue = curValue;\r\n              }\r\n              cur = 1;\r\n              curValue = arr[i];\r\n          }\r\n          previos = arr[i];\r\n      }\r\n      return maxValue;\r\n  };\r\n\r\n    return arrayValueProcessor;\r\n}());\r\n\r\nmodule.exports = ArrayProcessingToolo;\n\n//# sourceURL=webpack://cash/./scripts/arrayTools/arrayTools.js?");

/***/ }),

/***/ "./scripts/arrayTools/arrayToolsRunner.js":
/*!************************************************!*\
  !*** ./scripts/arrayTools/arrayToolsRunner.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const arrayToolsModule = __webpack_require__(/*! ./arrayTools.js */ \"./scripts/arrayTools/arrayTools.js\");\r\nconst getArrInt = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nvar arr = getArrInt.readNum();\r\nalert(\"MaxSequence: \" + arrayToolsModule.getMaxSequence(arr));\r\nalert(\"SubSum: \" + arrayToolsModule.getSubSum(arr));\r\nalert(\"SubSumSlow: \" + arrayToolsModule.getSubSumSlow(arr));\r\nalert(\"MaxElemetn: \" + arrayToolsModule.getMaxElemetn(arr));\r\nalert(\"MinElemetn: \" + arrayToolsModule.getMinElemetn(arr));\r\nalert(\"Median: \" + arrayToolsModule.getMedian(arr));\r\n\r\n\r\n\n\n//# sourceURL=webpack://cash/./scripts/arrayTools/arrayToolsRunner.js?");

/***/ }),

/***/ "./scripts/binaryConverter/binaryConverter.js":
/*!****************************************************!*\
  !*** ./scripts/binaryConverter/binaryConverter.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\r\nvar binaryConverter = (function () {\r\n    let binaryConverter = {};\r\n    const _leter = {\r\n        \"A\": 10,\r\n        \"B\": 11,\r\n        \"C\": 12,\r\n        \"D\": 13,\r\n        \"E\": 14,\r\n        \"F\": 15,\r\n        \"G\": 16,\r\n        \"H\": 17,\r\n        \"I\": 18,\r\n        \"J\": 19,\r\n        \"K\": 20,\r\n        \"L\": 21,\r\n        \"M\": 22,\r\n        \"N\": 23,\r\n        \"O\": 24,\r\n        \"P\": 25,\r\n        \"Q\": 26,\r\n        \"R\": 27,\r\n        \"S\": 28,\r\n        \"T\": 29,\r\n        \"U\": 30,\r\n        \"V\": 31,\r\n        \"W\": 32,\r\n        \"X\": 33,\r\n        \"Y\": 34,\r\n        \"Z\": 35,\r\n    };\r\n    let _checkleter = function(val) {\r\n        val = val.toUpperCase();\r\n        return val in _leter ? _leter[val] : val;\r\n    };\r\n    binaryConverter.calc = function(arr, base, outBase) {\r\n        var res = arr.split(\",\").reduce((sum, cur, index) => sum + (_checkleter(cur) * Math.pow(base, index)), 0);\r\n        return res.toString(outBase);\r\n    };\r\n    return binaryConverter;\r\n}());\r\n\r\nmodule.exports = binaryConverter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/binaryConverter/binaryConverter.js?");

/***/ }),

/***/ "./scripts/binaryConverter/binaryConverterRunner.js":
/*!**********************************************************!*\
  !*** ./scripts/binaryConverter/binaryConverterRunner.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const binaryConverter = __webpack_require__(/*! ./binaryConverter.js */ \"./scripts/binaryConverter/binaryConverter.js\");\r\nconst reader = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nvar base = reader.readPositiveNum(\"Base\");\r\nvar str = reader.readBinary(\"array of number\");\r\nvar outBase = reader.readPositiveNum(\"Out base\");\r\nalert(str + \" in \" + base + \" = \" + binaryConverter.calc(str, base, outBase) + \" in \"+ outBase);\n\n//# sourceURL=webpack://cash/./scripts/binaryConverter/binaryConverterRunner.js?");

/***/ }),

/***/ "./scripts/cachingCalculator/cachingCalculator.js":
/*!********************************************************!*\
  !*** ./scripts/cachingCalculator/cachingCalculator.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\nvar cachingCalculator = (function () {\r\n    let cachingCalculator = {};\r\n    let _cash = { };\r\n    cachingCalculator.calc = function(a, b, operation) {\r\n        var expresion = a + operation + b;\r\n        var res = 0;\r\n        if (expresion in _cash) {\r\n            res = _cash[expresion] + \" from cash\";\r\n        } else {\r\n            switch (operation) {\r\n                case \"+\":\r\n                    res = a + b;\r\n                    break;\r\n                case \"-\":\r\n                    res = a - b;\r\n                    break;\r\n                case \"*\":\r\n                    res = a * b;\r\n                    break;\r\n                case \"/\":\r\n                    res = a / b;\r\n                    break;\r\n                default: res = NaN;\r\n            }\r\n            _cash[expresion] = res;\r\n            res = res + \" is calculate\";\r\n        }\r\n       return res;\r\n    };\r\n    return cachingCalculator;\r\n}());\r\n\r\nmodule.exports = cachingCalculator;\r\n\n\n//# sourceURL=webpack://cash/./scripts/cachingCalculator/cachingCalculator.js?");

/***/ }),

/***/ "./scripts/cachingCalculator/cachingCalculatorRunner.js":
/*!**************************************************************!*\
  !*** ./scripts/cachingCalculator/cachingCalculatorRunner.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const cachingCalculator = __webpack_require__(/*! ./cachingCalculator.js */ \"./scripts/cachingCalculator/cachingCalculator.js\");\r\nconst reader = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nwhile(true){\r\n    var a = reader.readPositiveNum(\"A\");\r\n    var b = reader.readPositiveNum(\"B\");\r\n    var opp = reader.readArthSign(\"Sign\");\r\n    if(!a || !b || !opp) break;\r\n    alert(a + \" \" + opp + \" \" + b + \" = \" + cachingCalculator.calc(a, b, opp));\r\n}\r\n\n\n//# sourceURL=webpack://cash/./scripts/cachingCalculator/cachingCalculatorRunner.js?");

/***/ }),

/***/ "./scripts/dateDisplayFormatter/dateDisplayFormatter.js":
/*!**************************************************************!*\
  !*** ./scripts/dateDisplayFormatter/dateDisplayFormatter.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\nvar dateFormatter = (function () {\r\n    let dateFormatter = {};\r\n    dateFormatter.getEUDate = function(val) {\r\n        const regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;\r\n        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));\r\n        return date.getDate() + \"-\" + (date.getMonth()+1) + \"-\" + date.getFullYear();\r\n    };\r\n    dateFormatter.getEUDateMs = function(val) {\r\n        var date = new Date(Number(val));\r\n        return date.getDate() + \"-\" + (date.getMonth() + 1) + \"-\" + date.getFullYear();\r\n    };\r\n    dateFormatter.getDateFullMonth = function(val) {\r\n        const months = [\r\n            \"January\",\r\n            \"February\",\r\n            \"March\", \"April\",\r\n            \"May\",\r\n            \"June\",\r\n            \"July\",\r\n            \"August\",\r\n            \"September\",\r\n            \"October\",\r\n            \"November\",\r\n            \"December\"\r\n        ];\r\n        const regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;\r\n        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));\r\n        return date.getDate() + \" \" + months[date.getMonth()] + \" \" + date.getFullYear();\r\n    };\r\n    dateFormatter.getDateRegExp = function(val) {\r\n        var arrStr = val.split(',');\r\n        if (arrStr.length == 1) {\r\n            this.getEUDate();\r\n            return;\r\n        }\r\n        var strDate = arrStr[0].trim();\r\n        var pattern = arrStr[1].trim();\r\n         var date = new Date(\r\n            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),\r\n            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),\r\n            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),\r\n        );\r\n        return date.getDate() + \"/\" + date.getMonth() + \"/\" + date.getFullYear();\r\n    };\r\n    dateFormatter.getDateRegExpPattern = function(val) {\r\n        var str = val.split(',');\r\n        if (str.length == 1) {\r\n            this.getEUDate();\r\n            return;\r\n        }\r\n        if (str.length == 2) {\r\n            this.getDateRegExp();\r\n            return;\r\n        }\r\n        var strDate = str[0].trim();\r\n        var pattern = str[1].trim();\r\n        var patternOut = str[2].trim();\r\n        var date = new Date(\r\n            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),\r\n            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),\r\n            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),\r\n        );\r\n        var outDate = patternOut.replace(/DD/, date.getDate());\r\n        outDate = outDate.replace(/MM/, date.getMonth());\r\n        outDate = outDate.replace(/YYYY/, date.getFullYear());\r\n        return outDate;\r\n    };\r\n    return dateFormatter;\r\n}());\r\n\r\nmodule.exports = dateFormatter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/dateDisplayFormatter/dateDisplayFormatter.js?");

/***/ }),

/***/ "./scripts/dateDisplayFormatter/dateDisplayFormatterRunner.js":
/*!********************************************************************!*\
  !*** ./scripts/dateDisplayFormatter/dateDisplayFormatterRunner.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const dateDisplayFormatter = __webpack_require__(/*! ./dateDisplayFormatter.js */ \"./scripts/dateDisplayFormatter/dateDisplayFormatter.js\");\r\nconst reader = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nalert(\"EUDate: \" + dateDisplayFormatter.getEUDate(\r\n    reader.readStr(\"DD-MM-YYYY\")));\r\nalert(\"EUDateMs: \" + dateDisplayFormatter.getEUDateMs(\r\n    reader.readStr(\"DD-MM-YYYY from ms\")));\r\nalert(\"DateFullMonth: \" + dateDisplayFormatter.getDateFullMonth(\r\n    reader.readStr(\"DD-MMName-YYYY\")));\r\nalert(\"DateRegExp: \" + dateDisplayFormatter.getDateRegExp(\r\n    reader.readStr(\"DD-MM-YYYY, pattern\")));\r\nalert(\"DateRegExpPattern: \" + dateDisplayFormatter.getDateRegExpPattern(\r\n    reader.readStr(\"DD-MM-YYYY, pattern, patternOut\")));\r\n\r\n\r\n\n\n//# sourceURL=webpack://cash/./scripts/dateDisplayFormatter/dateDisplayFormatterRunner.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("if (confirm(\"Run arrayTools ?\")){__webpack_require__(/*! ./arrayTools/arrayToolsRunner */ \"./scripts/arrayTools/arrayToolsRunner.js\");}\r\nif (confirm(\"Run sorted ?\")){__webpack_require__(/*! ./arraySorter/arraySorterRunner */ \"./scripts/arraySorter/arraySorterRunner.js\");}\r\nif (confirm(\"Run date formatter ?\")){__webpack_require__(/*! ./dateDisplayFormatter/dateDisplayFormatterRunner */ \"./scripts/dateDisplayFormatter/dateDisplayFormatterRunner.js\");}\r\nif (confirm(\"Run text transform ?\")){__webpack_require__(/*! ./textTransform/textTransformRunner */ \"./scripts/textTransform/textTransformRunner.js\");}\r\nif (confirm(\"Run string calculator ?\")){__webpack_require__(/*! ./stringCalculator/stringCalculatorRunner */ \"./scripts/stringCalculator/stringCalculatorRunner.js\");}\r\nif (confirm(\"Run binary converter ?\")){__webpack_require__(/*! ./binaryConverter/binaryConverterRunner */ \"./scripts/binaryConverter/binaryConverterRunner.js\");}\r\nif (confirm(\"Run caching calculator ?\")){__webpack_require__(/*! ./cachingCalculator/cachingCalculatorRunner */ \"./scripts/cachingCalculator/cachingCalculatorRunner.js\");}\n\n//# sourceURL=webpack://cash/./scripts/main.js?");

/***/ }),

/***/ "./scripts/stringCalculator/stringCalculator.js":
/*!******************************************************!*\
  !*** ./scripts/stringCalculator/stringCalculator.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\r\nvar textFormatter = (function () {\r\n    let textFormatter = {};\r\n    textFormatter.calc = function(string) {\r\n        var str = string.trim();\r\n        var arrStr = str.split(/[+/*-]/g);\r\n        var arrOpp = str.match(/[+/*-]/g);\r\n        var func = _getFunc(\"+\");\r\n        var cash = 0;\r\n        var res = 0;\r\n        var j = 0;\r\n        if (str.substr(0, 1) == \"-\") {\r\n            func =_getFunc(\"-\");\r\n            arrStr = arrStr.splice(1);\r\n            j++;\r\n        } \r\n        for (var i = 0; i < arrStr.length; i++) {\r\n            res = func(res, +arrStr[i]);\r\n            func = _getFunc(arrOpp[j]);\r\n            j++;\r\n        }\r\n        return res;\r\n    };\r\n    let _getFunc = function(operation) {\r\n        switch (operation) {\r\n            case \"+\":\r\n                return (a, b) => { return a + b };\r\n            case \"-\":\r\n                return (a, b) => { return a - b };\r\n            case \"*\":\r\n                return (a, b) => { return a * b };\r\n            case \"/\":\r\n                return (a, b) => { return a / b };\r\n            default: return NaN;\r\n        }\r\n    };\r\n    return textFormatter;\r\n}());\r\n\r\nmodule.exports = textFormatter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/stringCalculator/stringCalculator.js?");

/***/ }),

/***/ "./scripts/stringCalculator/stringCalculatorRunner.js":
/*!************************************************************!*\
  !*** ./scripts/stringCalculator/stringCalculatorRunner.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const stringCalculator = __webpack_require__(/*! ./stringCalculator.js */ \"./scripts/stringCalculator/stringCalculator.js\");\r\nconst reader = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\nvar str = reader.readStr();\r\nalert(str + \" = \" + stringCalculator.calc(str));\n\n//# sourceURL=webpack://cash/./scripts/stringCalculator/stringCalculatorRunner.js?");

/***/ }),

/***/ "./scripts/textTransform/textTransform.js":
/*!************************************************!*\
  !*** ./scripts/textTransform/textTransform.js ***!
  \************************************************/
/***/ ((module) => {

eval("\r\nvar textFormatter = (function () {\r\n    let textFormatter = {};\r\n    textFormatter.RunHyphenation = function(params) {\r\n        var str = params.str;\r\n        var strMaxLength = params.strMaxLength;\r\n        var strNumLines = params.strNumLines;\r\n        var hyphenation = params.hyphenation;\r\n        var arr = [];\r\n        var result = \"\";\r\n        switch (hyphenation) {\r\n            case (\"char\"):\r\n                arr = str.split('');\r\n                arr = arr.slice(0, strNumLines);\r\n                result = arr.join(\"\\n\");\r\n                break;\r\n            case (\"word\"):\r\n                arr = str.split(/ /g);\r\n                for(let i=0; i < arr.length || i < strNumLines; i++){\r\n                    arr[i] = arr[i].substr(0, strMaxLength);\r\n                };\r\n                result = arr.join(\"\\n\");\r\n                break;\r\n            case (\"sentence\"):\r\n                arr = str.split(/\\S.*?[\\.\\?\\!](?=\\s|$)/g);\r\n                for(let i=0; i < arr.length || i < strNumLines; i++){\r\n                    arr[i] = arr[i].substr(0, strMaxLength);\r\n                };\r\n                result = arr.join(\"\\n\");\r\n                break;\r\n            default:\r\n                result = str;\r\n        }\r\n        return result;\r\n    };\r\n    return textFormatter;\r\n}());\r\n\r\nmodule.exports = textFormatter;\r\n\n\n//# sourceURL=webpack://cash/./scripts/textTransform/textTransform.js?");

/***/ }),

/***/ "./scripts/textTransform/textTransformRunner.js":
/*!******************************************************!*\
  !*** ./scripts/textTransform/textTransformRunner.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const textTransform = __webpack_require__(/*! ./textTransform.js */ \"./scripts/textTransform/textTransform.js\");\r\nconst reader = __webpack_require__(/*! ../Reader */ \"./scripts/Reader.js\");\r\n\r\nlet string = reader.readStr(\"Input string\");\r\nlet naxLength = reader.readPositiveNum(\"Input strMaxLength\");\r\nlet numLines = reader.readPositiveNum(\"Input strNumLines\");\r\nlet hyphenation = reader.readStr(\"Input hyphenation \\n char, word, sentence \");\r\nlet result = textTransform.RunHyphenation({\r\n    str: string,\r\n    strMaxLength: naxLength,\r\n    strNumLines: numLines,\r\n    hyphenation: hyphenation\r\n});\r\n\r\nalert(result);\r\n\r\n\r\n\n\n//# sourceURL=webpack://cash/./scripts/textTransform/textTransformRunner.js?");

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