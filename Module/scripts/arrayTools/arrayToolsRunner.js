const arrayToolsModule = require('./arrayTools.js');
const getArrInt = require("../Reader");
var arr = getArrInt.readNum();
alert("MaxSequence: " + arrayToolsModule.getMaxSequence(arr));
alert("SubSum: " + arrayToolsModule.getSubSum(arr));
alert("SubSumSlow: " + arrayToolsModule.getSubSumSlow(arr));
alert("MaxElemetn: " + arrayToolsModule.getMaxElemetn(arr));
alert("MinElemetn: " + arrayToolsModule.getMinElemetn(arr));
alert("Median: " + arrayToolsModule.getMedian(arr));


