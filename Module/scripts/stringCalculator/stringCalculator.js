
var textFormatter = (function () {
    let textFormatter = {};
    textFormatter.calc = function(string) {
        var str = string.trim();
        var arrStr = str.split(/[+/*-]/g);
        var arrOpp = str.match(/[+/*-]/g);
        var func = _getFunc("+");
        var cash = 0;
        var res = 0;
        var j = 0;
        if (str.substr(0, 1) == "-") {
            func =_getFunc("-");
            arrStr = arrStr.splice(1);
            j++;
        } 
        for (var i = 0; i < arrStr.length; i++) {
            res = func(res, +arrStr[i]);
            func = _getFunc(arrOpp[j]);
            j++;
        }
        return res;
    };
    let _getFunc = function(operation) {
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
    return textFormatter;
}());

module.exports = textFormatter;
