import { getStr } from "./common.js";
var letter = {
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
var base = 36;
function toDec() {
    var arr = getStr("convertValue").split(",");
    var base = getStr("convertBase");
    var outBase = getStr("convertBaseOut");
    var res = arr.reduce((sum, cur, index) => sum + (checkvarter(cur) * Math.pow(base, index)), 0);
    alert(con(res, outBase).split("").reverse().join(""));
     //alert(res.toString(outBase));
};
function checkvarter(val) {
    var val = val.toUpperCase();
    return val in letter ? letter[val] : val;
};
function con(value, base) {
    var val = value;
    if (val < base) {
        return val;
    } else {
        var fullPart = val % base;
        return fullPart + "" + con(Math.trunc(val / base), base);
    }
};
export { toDec }