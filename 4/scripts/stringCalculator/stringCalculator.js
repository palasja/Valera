
class textFormatter {
    calc = (str) => {
        var arrStr = str.split(/[+/*-]/g);
        var arrOpp = str.match(/[+/*-]/g);
        var func = textFormatter.#_getFunc("+");
        var cash = 0;
        var res = 0;
        var j = 0;
        if (str.substr(0, 1) == "-") {
            func =textFormatter.#_getFunc("-");
            arrStr = arrStr.splice(1);
            j++;
        } 
        for (var i = 0; i < arrStr.length; i++) {
            res = func(res, +arrStr[i]);
            func = textFormatter.#_getFunc(arrOpp[j]);
            j++;
        }
        return res;
    };
    static #_getFunc = (operation) => {
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
}

module.exports = textFormatter;
