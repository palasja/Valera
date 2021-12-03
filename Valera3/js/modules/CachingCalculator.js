import { getStr } from "./common.js";
var cash = {};
function calc() {
    var a = getStr("cashCalcA");
    var b = getStr("cashCalcB");
    var operation = getStr("cashCalcOpp");
    var expresion = a + operation + b;
    var source = "";
    var res = 0;
    if (expresion in cash) {
        source = "cash";
        res = cash[expresion];
    } else {
        switch (operation) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = a / b;
                break;
            default: res = NaN;
        }
        if (res != NaN) {
            cash[expresion] = res;
            source = "calculate";
        } else {
            alert("Wrong operation!!!");
        }

    }
    alert(expresion + " " + source)
};
export { calc as cashCalc };