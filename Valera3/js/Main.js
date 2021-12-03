import { minMax, maxMin, pow2, odd } from './modules/ArraySorter.js';
import { getSubSum, getSubSumSlow, getMaxElemetn, getMinElemetn, getMedian, getMaxSequence } from './modules/ArrayProcessingToolo.js';
import { getEUDate, getEUDateMs, getDateFullMonth, getDateRegExp, getDateRegExpPattern } from './modules/DateDisplayFormatter.js';
import { RunHyphenation } from './modules/TextTransform.js';
import { calc } from './modules/StringCalculator.js';
import { toDec } from './modules/BinaryConverter.js';
import { cashCalc } from './modules/CachingCalculator.js';

document.getElementById("minMax").addEventListener("click", new minMax());
document.getElementById("maxMin").addEventListener("click", maxMin);
document.getElementById("pow2").addEventListener("click", pow2);
document.getElementById("odd").addEventListener("click", odd);

document.getElementById("getSubSum").addEventListener("click", getSubSum);
document.getElementById("getSubSumSlow").addEventListener("click", getSubSumSlow);
document.getElementById("getMaxElemetn").addEventListener("click", getMaxElemetn);
document.getElementById("getMinElemetn").addEventListener("click", getMinElemetn);
document.getElementById("getMedian").addEventListener("click", getMedian);
document.getElementById("getMaxSequence").addEventListener("click", getMaxSequence);

document.getElementById("getEUDate").addEventListener("click", getEUDate);
document.getElementById("getEUDateMs").addEventListener("click", getEUDateMs);
document.getElementById("getDateFullMonth").addEventListener("click", getDateFullMonth);
document.getElementById("getDateRegExp").addEventListener("click", getDateRegExp);
document.getElementById("getDateRegExpPattern").addEventListener("click", getDateRegExpPattern);

document.getElementById("RunHyphenation").addEventListener("click", RunHyphenation);

document.getElementById("calc").addEventListener("click", calc);

document.getElementById("toDec").addEventListener("click", toDec);

document.getElementById("cashCalc").addEventListener("click", cashCalc);
/*import { getSubSum, getSubSumSlow, getMaxElemetn, getMinElemetn, getMedian, getMaxSequence } from 'modules/ArrayProcessingToolo.js'; 
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
*/
