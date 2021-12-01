const getArrInt = require("./Reader");
var ArrayProcessingToolo = (function () {
    let arrayValueProcessor = {};

    arrayValueProcessor.getSubSum = function(arr) {
      var max = 0;
      var res = 0;
      for (var i = 0; i < arr.length; i++) {
          if (+arr[i] + res < 0) {
              res = 0;
              continue;
          }
          res = res + +arr[i];
          if (res > max) max = res;
      }
      return max;
  }; 
  arrayValueProcessor.getSubSumSlow = function(arr) {
      var maxValue = 0;
      var curValue = 0;
      var previos = Number.MIN_VALUE;
      for (var i = 0; i < arr.length; i++) {
          curValue = 0;
          previos = Number.MIN_VALUE;
          for (var j = i; j < arr.length; j++) {
              if (+arr[j] + curValue >= 0 && previos < arr[j]) {
                  curValue = curValue + arr[j];
                  previos = arr[j];
              } else {
                  break;
              }
          }
          if (maxValue < curValue) {
              maxValue = curValue;
          }
      }
      return maxValue;
  };
  arrayValueProcessor.getMaxElemetn = function(arr) {
      var max = Number.MIN_VALUE;
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
      }
      return max;
  };
  arrayValueProcessor.getMinElemetn = function(arr) {
      var min = Number.MAX_VALUE;
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] < min) min = arr[i];
      }
      return min;
  };
  arrayValueProcessor.getMedian = function(arr) {
      var odd = arr.length % 2 == 1 ? true : false;
      var medianValue = null;
      if (odd) {
          var median = Math.ceil(arr.length / 2);
          medianValue = calcMedian(median - 1, median - 1);
      } else {
          var medianMinIndex = Math.ceil(arr.length / 2);
          var medianMin = calcMedian(medianMinIndex - 1, medianMinIndex);
          var medianMax = calcMedian(medianMinIndex, medianMinIndex - 1);
          medianValue = (medianMin + medianMax) / 2;
      }
      return medianValue;
      function calcMedian(countLess, countMore) {
          var more = 0;
          var less = 0;
          var equal = 0;
          var cur = 0;
          var medianValue = null;
          for (var i = 0; i < arr.length; i++) {
              cur = arr[i];
              more = 0;
              less = 0;
              for (var j = 0; j < arr.length; j++) {
                  if (i == j) continue;
                  if (arr[j] < cur) less++;
                  if (arr[j] > cur) more++;
                  if (arr[j] == cur) equal++;
                  if (less > countLess || countMore < more) break;
              }
  
              if ((Math.abs(more - less) <= equal) || (countMore == more && less == countLess)) {
                  medianValue = cur;
                  break;
              }
  
          }
          return medianValue;
      };
  };
  arrayValueProcessor.getMaxSequence = function(arr) {
      var max = 0;
      var maxValue = "";
      var cur = 0;
      var curValue = "";
      var previos = Number.MIN_VALUE;
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > previos) {
              cur++;
              curValue = curValue + "," + arr[i];
          } else {
              if (cur > max) {
                  max = cur;
                  maxValue = curValue;
              }
              cur = 1;
              curValue = arr[i];
          }
          previos = arr[i];
      }
      return maxValue;
  };

    return arrayValueProcessor;
}());

module.exports = ArrayProcessingToolo;