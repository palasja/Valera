import { minMax, maxMin, pow2, odd } from 'modules/ArraySorter.js'; 
import { getSubSum, getSubSumSlow, getMaxElemetn, getMinElemetn, getMedian, getMaxSequence } from 'modules/ArrayProcessingToolo.js'; 
import { getEUDate, getEUDateMs, getDateFullMonth, getDateRegExp, getDateRegExpPattern } from 'modules/DateDisplayFormatter.js'; 
(function getStr(elId) {
    var dateElement = document.getElementById(elId);
    var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
    return val;
}());

(function getArrInt() {
    var val = document.getElementById("subSum").defaultValue == null ? document.getElementById("subSum").defaultValue : document.getElementById("subSum").value;
    return val.split(',').map(string => +string);
}()); 

