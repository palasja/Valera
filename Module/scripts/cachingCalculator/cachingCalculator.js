
var cachingCalculator = (function () {
    let cachingCalculator = {};
    let _cash = { };
    cachingCalculator.calc = function(a, b, operation) {
        var expresion = a + operation + b;
        var res = 0;
        if (expresion in _cash) {
            res = _cash[expresion] + " from cash";
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
            _cash[expresion] = res;
            res = res + " is calculate";
        }
       return res;
    };
    return cachingCalculator;
}());

module.exports = cachingCalculator;
