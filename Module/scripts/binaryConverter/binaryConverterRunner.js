const binaryConverter = require('./binaryConverter.js');
const reader = require("../Reader");
var base = reader.readPositiveNum("Base");
var str = reader.readBinary("array of number");
var outBase = reader.readPositiveNum("Out base");
alert(str + " in " + base + " = " + binaryConverter.calc(str, base, outBase) + " in "+ outBase);