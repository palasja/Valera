var arraySorter = (function () {
    let arraySort = {};
    arraySort.minMax = function(arr) {
        document.getElementById("output").innerHTML = arr.sort((a, b) => a - b);
    };
    arraySort.maxMin = function(arr) {
        document.getElementById("output").innerHTML = arr.sort((a, b) => b - a);
    };
    arraySort.pow2 = function(arr) {
        document.getElementById("output").innerHTML = arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));
    };
    arraySort.odd = function(arr) {
        document.getElementById("output").innerHTML = arr.sort((a) => {
            if (a % 2 == 0) {
                return 1;
            } else {
                return -1;
            }
        });
    };
    return arraySort;
}());

module.exports = arraySorter;
