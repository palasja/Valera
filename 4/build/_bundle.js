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

eval("var Reader = function () {\n  var reader = {};\n\n  reader.readNum = function (elId) {\n    return _getStrOnId(elId).split(',').map(function (stringVal) {\n      return +stringVal;\n    });\n  };\n\n  reader.readStr = function (elId) {\n    return _getStrOnId(elId).trim();\n  };\n\n  reader.readPositiveNum = function (elId) {\n    return Number.parseInt(_getStrOnId(elId));\n  };\n\n  reader.readArthSign = function (message) {\n    var sign = prompt(message);\n\n    while (!/^[-/+*]{1}$/.test(sign)) {\n      sign = prompt(\"WRONG! \" + message);\n    }\n\n    return sign;\n  };\n\n  var _getStrOnId = function _getStrOnId(elId) {\n    var dateElement = document.getElementById(elId);\n    var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;\n    return val;\n  };\n\n  return reader;\n}();\n\nmodule.exports = Reader;\n\n//# sourceURL=webpack://cash/./scripts/Reader.js?");

/***/ }),

/***/ "./scripts/arraySorter/arraySorter.js":
/*!********************************************!*\
  !*** ./scripts/arraySorter/arraySorter.js ***!
  \********************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar arraySorter = function arraySorter(inputArr) {\n  _classCallCheck(this, arraySorter);\n\n  _defineProperty(this, \"sort\", function (sortedType) {\n    switch (sortedType) {\n      case \"minMax\":\n        this.arr.sort(function (a, b) {\n          return a - b;\n        });\n        break;\n\n      case 'maxMin':\n        this.arr.sort(function (a, b) {\n          return b - a;\n        });\n        break;\n\n      case 'pow2':\n        this.arr.sort(function (a, b) {\n          return Math.pow(a, 2) - Math.pow(b, 2);\n        });\n        break;\n\n      default:\n        this.arr.sort(function (a) {\n          if (a % 2 == 0) {\n            return 1;\n          } else {\n            return -1;\n          }\n        });\n        break;\n    }\n  });\n\n  this.arr = inputArr;\n};\n\nmodule.exports = arraySorter;\n\n//# sourceURL=webpack://cash/./scripts/arraySorter/arraySorter.js?");

/***/ }),

/***/ "./scripts/dateDisplayFormatter/dateDisplayFormatter.js":
/*!**************************************************************!*\
  !*** ./scripts/dateDisplayFormatter/dateDisplayFormatter.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (_typeof(args[args.length - 1]) !== \"object\") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar DateFormatter = function DateFormatter() {\n  _classCallCheck(this, DateFormatter);\n\n  _defineProperty(this, \"setDate\", function (strDate) {\n    return Date.parse(strDate) ? new Date(strDate) : new Date(Number(strDate));\n  });\n\n  _defineProperty(this, \"getDateFullMonth\", function (val) {\n    var months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\n    var regexp = /*#__PURE__*/_wrapRegExp(/([0-9]{2})([0-9]{2})([0-9]{4})/, {\n      day: 1,\n      month: 2,\n      year: 3\n    });\n\n    var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));\n    return date.getDate() + \" \" + months[date.getMonth()] + \" \" + date.getFullYear();\n  });\n\n  _defineProperty(this, \"inputPattern\", function (strDate, pattern) {\n    console.log(strDate + \" = \" + pattern);\n    return new Date(strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length), strDate.substr(pattern.search(/M/), pattern.match(/M/g).length), strDate.substr(pattern.search(/D/), pattern.match(/D/g).length));\n  });\n\n  _defineProperty(this, \"outputPattern\", function (strDate, patternOut) {\n    var date = this.setDate(strDate);\n    var outDate = patternOut.replace(/DD/, date.getDate());\n    outDate = outDate.replace(/MM/, date.getMonth());\n    outDate = outDate.replace(/YYYY/, date.getFullYear());\n    return outDate;\n  });\n\n  _defineProperty(this, \"inOutPattern\", function (strDate, pattern, patternOut) {\n    var date = this.inputPattern(strDate, pattern);\n    var outDate = patternOut.replace(/DD/, date.getDate());\n    outDate = outDate.replace(/MM/, date.getMonth());\n    outDate = outDate.replace(/YYYY/, date.getFullYear());\n    return outDate;\n  });\n};\n\nmodule.exports = DateFormatter;\n\n//# sourceURL=webpack://cash/./scripts/dateDisplayFormatter/dateDisplayFormatter.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.less */ \"./style.less\");\n\n\nvar sorter = __webpack_require__(/*! ./arraySorter/arraySorter.js */ \"./scripts/arraySorter/arraySorter.js\");\n\nvar stringCalculator = __webpack_require__(/*! ./stringCalculator/stringCalculator.js */ \"./scripts/stringCalculator/stringCalculator.js\");\n\nvar TextTransformer = __webpack_require__(/*! ./textTransform/textTransform.js */ \"./scripts/textTransform/textTransform.js\");\n\nvar DateTransformer = __webpack_require__(/*! ./dateDisplayFormatter/dateDisplayFormatter.js */ \"./scripts/dateDisplayFormatter/dateDisplayFormatter.js\");\n\nvar reader = __webpack_require__(/*! ./Reader.js */ \"./scripts/Reader.js\");\n\nvar testBubel = \"\";\nvar dateTransformer = new DateTransformer();\ndocument.getElementById(\"formatDate\").addEventListener(\"click\", function () {\n  var strDate = reader.readStr(\"date\");\n  var inPatten = reader.readStr(\"inputFormat\");\n  var outPattern = reader.readStr(\"outputFormat\");\n  console.log(outPattern.length == 0);\n  console.log(inPatten.length == 0);\n\n  if (outPattern.length == 0 && inPatten.length == 0) {\n    document.getElementById(\"output\").innerHTML = dateTransformer.setDate(strDate);\n  } else if (outPattern.length != 0 && inPatten.length == 0) {\n    document.getElementById(\"output\").innerHTML = dateTransformer.outputPattern(strDate, outPattern);\n  } else if (outPattern.length == 0 && inPatten.length != 0) {\n    document.getElementById(\"output\").innerHTML = dateTransformer.inputPattern(strDate, inPatten);\n  } else if (outPattern.length != 0 && inPatten.length != 0) {\n    document.getElementById(\"output\").innerHTML = dateTransformer.inOutPattern(strDate, inPatten, outPattern);\n  }\n});\nvar arraysorter = new sorter(reader.readNum(\"arrSort\"));\nvar radioGroup = document.getElementsByName(\"sortType\");\n\nvar _loop = function _loop() {\n  var cur = radioGroup[i];\n  cur.addEventListener(\"change\", function () {\n    arraysorter.arr = reader.readNum(\"arrSort\");\n    arraysorter.sort(cur.id);\n    document.getElementById(\"output\").innerHTML = arraysorter.arr;\n  });\n};\n\nfor (var i = 0; i < radioGroup.length; i++) {\n  _loop();\n}\n\nvar calculator = new stringCalculator();\ndocument.getElementById(\"calc\").addEventListener(\"click\", function () {\n  document.getElementById(\"output\").innerHTML = calculator.calc(reader.readStr(\"stringCalc\"));\n});\nvar textTransform = new TextTransformer();\n\nvar getParams = function getParams() {\n  var string = reader.readStr(\"textFormaterStr\");\n  var naxLength = reader.readPositiveNum(\"strMaxLength\");\n  var numLines = reader.readPositiveNum(\"strNumLines\");\n  var hyphenation = document.getElementsByName(\"textFormater\")[0].value;\n  document.getElementById(\"output\").innerHTML = textTransform.transform(string, naxLength, numLines, hyphenation);\n};\n\ndocument.getElementById(\"strMaxLength\").addEventListener(\"change\", getParams);\ndocument.getElementById(\"strNumLines\").addEventListener(\"change\", getParams);\ndocument.getElementById(\"textFormater\").addEventListener(\"change\", getParams);\ndocument.getElementById(\"textFormaterStr\").addEventListener(\"focusout\", getParams);\n\n//# sourceURL=webpack://cash/./scripts/main.js?");

/***/ }),

/***/ "./scripts/stringCalculator/stringCalculator.js":
/*!******************************************************!*\
  !*** ./scripts/stringCalculator/stringCalculator.js ***!
  \******************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError(\"attempted to \" + action + \" private static field before its declaration\"); } }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError(\"Private static access of wrong provenance\"); } }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar textFormatter = function textFormatter() {\n  _classCallCheck(this, textFormatter);\n\n  _defineProperty(this, \"calc\", function (str) {\n    var arrStr = str.split(/[+/*-]/g);\n    var arrOpp = str.match(/[+/*-]/g);\n\n    var func = _classStaticPrivateFieldSpecGet(textFormatter, textFormatter, _getFunc).call(textFormatter, \"+\");\n\n    var cash = 0;\n    var res = 0;\n    var j = 0;\n\n    if (str.substr(0, 1) == \"-\") {\n      func = _classStaticPrivateFieldSpecGet(textFormatter, textFormatter, _getFunc).call(textFormatter, \"-\");\n      arrStr = arrStr.splice(1);\n      j++;\n    }\n\n    for (var i = 0; i < arrStr.length; i++) {\n      res = func(res, +arrStr[i]);\n      func = _classStaticPrivateFieldSpecGet(textFormatter, textFormatter, _getFunc).call(textFormatter, arrOpp[j]);\n      j++;\n    }\n\n    return res;\n  });\n};\n\nvar _getFunc = {\n  writable: true,\n  value: function value(operation) {\n    switch (operation) {\n      case \"+\":\n        return function (a, b) {\n          return a + b;\n        };\n\n      case \"-\":\n        return function (a, b) {\n          return a - b;\n        };\n\n      case \"*\":\n        return function (a, b) {\n          return a * b;\n        };\n\n      case \"/\":\n        return function (a, b) {\n          return a / b;\n        };\n\n      default:\n        return NaN;\n    }\n  }\n};\nmodule.exports = textFormatter;\n\n//# sourceURL=webpack://cash/./scripts/stringCalculator/stringCalculator.js?");

/***/ }),

/***/ "./scripts/textTransform/textTransform.js":
/*!************************************************!*\
  !*** ./scripts/textTransform/textTransform.js ***!
  \************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TextFormatter = /*#__PURE__*/function () {\n  function TextFormatter() {\n    _classCallCheck(this, TextFormatter);\n  }\n\n  _createClass(TextFormatter, [{\n    key: \"transform\",\n    value: function transform(str, strMaxLength, strNumLines, hyphenation) {\n      var arr = [];\n      var arrTmp = [];\n      var result = \"\";\n\n      switch (hyphenation) {\n        case \"char\":\n          arr = str.split('');\n          arrTmp = arr.slice(0, strNumLines);\n          result = arrTmp.join(\"\\n\");\n          break;\n\n        case \"word\":\n          arr = str.split(/ /g);\n\n          for (var i = 0; i < arr.length && i < strNumLines; i++) {\n            arrTmp[i] = arr[i].substr(0, strMaxLength);\n          }\n\n          ;\n          result = arrTmp.join(\"\\n\");\n          break;\n\n        case \"sentence\":\n          //arr = str.split(/\\S.*?[\\.\\?\\!](?=\\s|$)/g);\n          arr = str.split(/[\\.\\?\\!]/g);\n\n          for (var _i = 0; _i < arr.length && _i < strNumLines; _i++) {\n            arrTmp[_i] = arr[_i].substr(0, strMaxLength);\n          }\n\n          ;\n          result = arrTmp.join(\"\\n\");\n          break;\n\n        default:\n          result = str;\n      }\n\n      return result;\n    }\n  }]);\n\n  return TextFormatter;\n}();\n\nmodule.exports = TextFormatter;\n\n//# sourceURL=webpack://cash/./scripts/textTransform/textTransform.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 10px 300px;\\n  background-color: rgba(231, 214, 214, 0.671);\\n}\\nbody .nav {\\n  background-color: rgba(196, 191, 191, 0.671);\\n}\\nbody .nav .menu {\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-gap: 20px;\\n  margin: 10px 0;\\n}\\nbody .nav .menu li {\\n  border: 1px solid #555;\\n  border-radius: 4px;\\n  padding: 5px;\\n  text-align: center;\\n  background: -webkit-linear-gradient(0deg, #98cfc3 29%, #35bdc1 100%, #edf2d0);\\n  background: -moz-linear-gradient(0deg, #98cfc3 29%, #35bdc1 100%, #edf2d0);\\n  background: linear-gradient(0deg, #98cfc3 29%, #35bdc1 100%, #edf2d0);\\n}\\nbody .nav .menu li:hover {\\n  cursor: pointer;\\n  background: -webkit-linear-gradient(0deg, #edf2d0, #35bdc1 100%, #98cfc3 29%);\\n  background: -moz-linear-gradient(0deg, #edf2d0, #35bdc1 100%, #98cfc3 29%);\\n  background: linear-gradient(0deg, #edf2d0, #35bdc1 100%, #98cfc3 29%);\\n}\\nbody .main {\\n  background-color: #FFF;\\n}\\nbody .main input {\\n  border-radius: 10px;\\n  padding: 5px;\\n  text-align: center;\\n}\\nbody .main .section {\\n  margin: 10px 0;\\n}\\nbody .main .section .textFormater {\\n  width: 150px;\\n  height: 30px;\\n  border: 2px solid gray;\\n  border-radius: 10px;\\n}\\nbody .main .resulcConsole {\\n  background-color: #CCC;\\n  height: 400px;\\n}\\nbody .main .resulcConsole .output {\\n  white-space: break-spaces;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cash/./style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cash/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cash/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cash/./style.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cash/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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