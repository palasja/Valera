const arraysorter = require('./arraysorter.js');
const getArrInt = require("./Reader");
var arr = getArrInt.readNum();
alert("maxMin: " + arraysorter.maxMin(arr));
alert("minMax: " + arraysorter.minMax(arr));
alert("pow2: " + arraysorter.pow2(arr));
alert("odd: " + arraysorter.odd(arr));



