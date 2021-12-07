const stringCalculator = require('./stringCalculator.js');
const reader = require("../Reader");
var str = reader.readStr();
alert(str + " = " + stringCalculator.calc(str));