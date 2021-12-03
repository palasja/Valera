var arrayValueProcessor = (function () {
    let arrayValueProcessor = {};

    arrayValueProcessor.getSlowMaxSubSum = function (array) {
        let newArray = Object.assign([], array);
        let maxSum = 0;
        for (let i = 0; i < newArray.length; i++) {
          let sumFixedStart = 0;
          for (var j = i; j < newArray.length; j++) {
            sumFixedStart += newArray[j];
            maxSum = Math.max(maxSum, sumFixedStart);
          };
        };
        return maxSum;
    };

    arrayValueProcessor.getFastMaxSubSum = function(array) {
        let newArray = Object.assign([], array);
        let maxSum = 0;
        let partialSum = 0;
      
        for (var item of newArray) {
          partialSum += item;
          maxSum = Math.max(maxSum, partialSum);
          if (partialSum < 0) partialSum = 0;
        };
        return maxSum;
    };

    arrayValueProcessor.searchMaxValue = function(array) {
        return Math.max.apply(null, array);
    };
      
    arrayValueProcessor.searchMinValue = function(array) {
        return Math.min.apply(null, array);
    };
      
    arrayValueProcessor.searchMedianValue = function(array) {
        let newArray = array;
        newArray.sort(function (a, b) {
          return a - b;
        });
        let half = Math.floor(newArray.length / 2);
        if (newArray.length % 2)
          return newArray[half];
        return (newArray[half - 1] + newArray[half]) / 2.0;
    };
      
    arrayValueProcessor.selectionTaskMaxSequence = function(arraySeq) {
        debugger;
        let newArray = Object.assign([], arraySeq);
        let max = 0;
        let maxValue = "";
        let cur = 0;
        let curValue = "";
        let previos = Number.MIN_VALUE;
        for (let i = 0; i < newArray.length; i++) {
          if (newArray[i] > previos) {
            cur++;
            curValue = curValue + ',' + newArray[i];
          } else {
            if (cur > max) {
              max = cur;
              maxValue = curValue;
            }
            cur = 1;
            curValue = newArray[i];
          }
          previos = newArray[i];
        }
        return maxValue;
      }

    return arrayValueProcessor;
}());

module.exports = arrayValueProcessor;