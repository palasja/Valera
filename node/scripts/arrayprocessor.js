const reader = require('./reader.js');
var arrayValueProcessor = (function () {
    let arrayValueProcessor = {};

    arrayValueProcessor.sorted = function sorted(func) {
      var arr = reader().split(",");
      alert(arr.sort(func));
  };
  arrayValueProcessor.minMax = function minMax() {
      new sorted((a, b) => a - b);
  };
  arrayValueProcessor.maxMin = function maxMin() {
      sorted((a, b) => b - a);
  };
  arrayValueProcessor.pow2 = function pow2() {
      sorted((a, b) => Math.pow(a, 2) - Math.pow(b, 2));
  };
  arrayValueProcessor.odd = function odd() {
      sorted((a) => {
          if (a % 2 == 0) {
              return 1;
          } else {
              return -1;
          }
      }
      );
  }; 
    return arrayValueProcessor;
}());

module.exports = arrayValueProcessor;