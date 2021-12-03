import { getStr } from "./common.js";
function calc() {
    var str = getStr("stringCalc").trim();
    var arrStr = str.split(/[+/*-]/g);
    var arrOpp = str.match(/[+/*-]/g);
    var func = getFunc("+");
    var cash = 0;
    var res = 0;
    var j = 0;
    if (str.trim().substr(0, 1) == "-") {
        func = getFunc("-");
        arrStr = arrStr.splice(1);
        j++;
    }
    for (var i = 0; i < arrStr.length; i++) {
        res = func(res, +arrStr[i]);
        func = getFunc(arrOpp[j]);
        j++;
    }
    alert(res);
};
function  getFunc(operation) {
    switch (operation) {
        case "+":
            return (a, b) => { return a + b };
        case "-":
            return (a, b) => { return a - b };
        case "*":
            return (a, b) => { return a * b };
        case "/":
            return (a, b) => { return a / b };
        default: return NaN;
    }
};
export { calc }