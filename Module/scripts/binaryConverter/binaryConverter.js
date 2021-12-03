
var binaryConverter = (function () {
    let binaryConverter = {};
    const _leter = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
        "G": 16,
        "H": 17,
        "I": 18,
        "J": 19,
        "K": 20,
        "L": 21,
        "M": 22,
        "N": 23,
        "O": 24,
        "P": 25,
        "Q": 26,
        "R": 27,
        "S": 28,
        "T": 29,
        "U": 30,
        "V": 31,
        "W": 32,
        "X": 33,
        "Y": 34,
        "Z": 35,
    };
    let _checkleter = function(val) {
        val = val.toUpperCase();
        return val in _leter ? _leter[val] : val;
    };
    binaryConverter.calc = function(arr, base, outBase) {
        var res = arr.split(",").reduce((sum, cur, index) => sum + (_checkleter(cur) * Math.pow(base, index)), 0);
        return res.toString(outBase);
    };
    return binaryConverter;
}());

module.exports = binaryConverter;
