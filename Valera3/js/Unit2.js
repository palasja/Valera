
var ArraySorter = {
    sorted(func) {
        arr = this.getStr("arrSort").split(",");
        alert(arr.sort(func));
    },
    minMax() {
        this.sorted((a, b) => a - b);
    },
    maxMin() {
        this.sorted((a, b) => b - a);
    },
    pow2() {
        this.sorted((a, b) => Math.pow(a, 2) - Math.pow(b, 2));
    },
    odd() {
        this.sorted((a) => {
            if (a % 2 == 0) {
                return 1;
            } else {
                return -1;
            }
        }
            );
    },
    getStr(elId) {
        var dateElement = document.getElementById(elId);
        var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    }
 /*   bubleSort() {
        var arr = this.arrBase;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    var tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        alert(arr);
    },
    fastSort(arr, low, hight) {
        var j = low;
        var k = hight;
        var baseEl = arr[low]
        while (j<=k) {
            while (arr[j] < baseEl) {
                j++;
            }
            while (arr[k] > baseEl) {
                k--;
            }
            if (j<=k) {
                var tmp = arr[j];
                arr[j] = arr[k];
                arr[k] = tmp;
                j++;
                k--;
            }
        }
        if (low < k) this.fastSort(arr, low, k);
        if (hight > j) this.fastSort(arr, j, hight);
    },
    runFast() {
        this.fastSort(this.arrBase, 0, this.arrBase.length - 1);
        alert(this.arrBase);
    }*/
 }
var ArrayProcessingToolo = {
    getSubSum() {
        var arr = this.getArrInt();
        var max = 0;
        var res = 0;
        for (var i = 0; i < arr.length; i++) {
            if (+arr[i] + res < 0) {
                res = 0;
                continue;
            }
            res = res + +arr[i];
            if (res > max) max = res;
        }
        alert(max);
    },
    getSubSumSlow() {
        var arr = this.getArrInt();
        var maxValue = 0;
        var curValue = 0;
        var previos = Number.MIN_VALUE;
        for (var i = 0; i < arr.length; i++) {
            curValue = 0;
            previos = Number.MIN_VALUE;
            for (var j = i; j < arr.length; j++) {
                if (+arr[j] + curValue >= 0 && previos < arr[j]) {
                    curValue = curValue + arr[j];
                    previos = arr[j];
                } else {
                    break;
                }
            }
            if (maxValue < curValue) {
                maxValue = curValue;
            }
        }
        alert(maxValue);
    },
    getMaxElemetn() {
        var max = Number.MIN_VALUE;
        var arr = this.getArrInt();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        alert(max);
    },
    getMinElemetn () {
        var min = Number.MAX_VALUE;
        var arr = this.getArrInt();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }
        alert(min);
    },
    getMedian() {
        var arr = this.getArrInt();
        var odd = arr.length % 2 == 1 ? true : false;
        var medianValue = null;
        if (odd) {
            var median = Math.ceil(arr.length / 2);
            medianValue = calcMedian(median - 1, median - 1);
        } else {
            var medianMinIndex = Math.ceil(arr.length / 2);
            var medianMin = calcMedian(medianMinIndex - 1, medianMinIndex);
            var medianMax = calcMedian(medianMinIndex, medianMinIndex - 1);
            medianValue = (medianMin + medianMax) / 2;
        }
        alert(medianValue);
        function calcMedian(countLess, countMore) {
            var more = 0;
            var less = 0;
            var equal = 0;
            var cur = 0;
            var medianValue = null;
            for (var i = 0; i < arr.length; i++) {
                cur = arr[i];
                more = 0;
                less = 0;
                for (var j = 0; j < arr.length; j++) {
                    if (i == j) continue;
                    if (arr[j] < cur) less++;
                    if (arr[j] > cur) more++;
                    if (arr[j] == cur) equal++;
                    if (less > countLess || countMore < more) break;
                }

                if ((Math.abs(more - less) <= equal) || (countMore == more && less == countLess)) {
                    medianValue = cur;
                    break;
                }

            }
            return medianValue;
        };
    },
    getMaxSequence()  {
        var arr = this.getArrInt();
        var max = 0;
        var maxValue = "";
        var cur = 0;
        var curValue = "";
        var previos = Number.MIN_VALUE;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > previos) {
                cur++;
                curValue = curValue + "," + arr[i];
            } else {
                if (cur > max) {
                    max = cur;
                    maxValue = curValue;
                }
                cur = 1;
                curValue = arr[i];
            }
            previos = arr[i];
        }
        alert(maxValue);
    },
    getArrInt(){
        var val = document.getElementById("subSum").defaultValue == null ? document.getElementById("subSum").defaultValue : document.getElementById("subSum").value;
        return val.split(',').map(string => +string);
    }
}
var DateDisplayFormatter = {
    getEUDate() {
        var regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        var val = this.getStr();
        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear());
    },
    getEUDateMs() {
        var val = this.getStr();
        var date = new Date(Number(val));
        alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
    },
    getDateFullMonth() {
        var months = [
            "January",
            "February",
            "March", "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        var val = this.getStr();
        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    },
        getStr() {
            var dateElement = document.getElementById("date");
            var str = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
            return str;
    },
    getDateRegExp() {
        var arrStr = this.getStr().split(',');
        if (arrStr.length == 1) {
            this.getEUDate();
            return;
        }
        var strDate = arrStr[0].trim();
        var pattern = arrStr[1].trim();
         var date = new Date(
            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),
            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),
            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),
        );
        alert(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
    },
    getDateRegExpPattern() {
        var str = this.getStr().split(',');
        if (str.length == 1) {
            this.getEUDate();
            return;
        }
        if (str.length == 2) {
            this.getDateRegExp();
            return;
        }
        var strDate = str[0].trim();
        var pattern = str[1].trim();
        var patternOut = str[2].trim();
        var date = new Date(
            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),
            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),
            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),
        );
        var outDate = patternOut.replace(/DD/, date.getDate());
        outDate = outDate.replace(/MM/, date.getMonth());
        outDate = outDate.replace(/YYYY/, date.getFullYear());
        alert(outDate);
    },
       //20102011, DDMMYYYY, YYYY-DD-MM
}
var TextTransform = {
    RunHyphenation() {
        var transform = this.TextFormatter({
            str: getStr("arg"),
            strMaxLength: getStr("strMaxLength"),
            strNumLines: getStr("strNumLines"),
            hyphenation: getHyphenation()
        });
        document.getElementById("outHyphination").innerText = transform;

        function getStr(elId) {
            var dateElement = document.getElementById(elId);
            var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
            return val;
        };
        function getHyphenation() {
            var radioGroup = document.getElementsByName("hyphenation");
            for (var i = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].checked) return radioGroup[i].id;
            }
        };
    },

    TextFormatter(params) {
        var str = params.str;
        var strMaxLength = params.strMaxLength || 60;
        var strNumLines = params.strNumLines || 2;
        var hyphenation = params.hyphenation;

        var workStr = str.split(/\n/g).slice(0, strNumLines);
        workStr = workStr.reduce((res, current) => res + current.substr(0, strMaxLength) + "\n", "");

        var result = "";
        switch (hyphenation) {
            case ("char"):
                var arrChar = workStr.split('');
                result = arrChar.reduce((res, current) => res + current + "\n", "")
                break;
            case ('word'):
                var arrWord = workStr.split(/ /g);
                result = arrWord.reduce((res, current) => res + current + "\n", "")
                break;
            case ('sentence'):
                var arrSentence = workStr.split(/[?!.]/g);
                result = arrSentence.reduce((res, current) => res + current + "\n", "")
                break;
            default:
                result = workStr.replace(/\n/g, " ");
                break;
        }
        return result;
    }
}
var BinaryConverter = {
    varter: {
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
    },
    base: 36,
    toDec() {
        arr = this.getStr("convertValue").split(",");
        base = this.getStr("convertBase");
        outBase = this.getStr("convertBaseOut");
        var res = arr.reduce((sum, cur, index) => sum + (this.checkvarter(cur) * Math.pow(base, index)), 0);
        alert(this.con(res, outBase).split("").reverse().join(""));
        //alert(res.toString(outBase));
    },
    checkvarter(val) {
        val = val.toUpperCase();
        return val in this.varter ? this.varter[val] : val;
    },
    getStr(elId) {
        var dateElement = document.getElementById(elId);
        var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    },
    con(value, base) {
        var val = value;
        if (val < base) {
            return val;
        } else {
            var fullPart = val % base;
            return fullPart + "" + this.con(Math.trunc(val / base), base);
        }
    }
}
var StringCalculator = {
    calc() {
        var str = this.getStr("stringCalc").trim();
        var arrStr = str.split(/[+/*-]/g);
        var arrOpp = str.match(/[+/*-]/g);
        var func = this.getFunc("+");
        var cash = 0;
        var res = 0;
        var j = 0;
        if (str.trim().substr(0, 1) == "-") {
            func = this.getFunc("-");
            arrStr = arrStr.splice(1);
            j++;
        } 
        for (var i = 0; i < arrStr.length; i++) {
            res = func(res, +arrStr[i]);
            func = this.getFunc(arrOpp[j]);
            j++;
        }
        alert(res);
    },
    getStr(elId) {
        var dateElement = document.getElementById(elId);
        var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    },
    getFunc(operation) {
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
    }
}
var CachingCalculator = {
    cash:{ },
    calc() {
        var a = this.getStr("cashCalcA");
        var b = this.getStr("cashCalcB");
        var operation = this.getStr("cashCalcOpp");
        var expresion = a + operation + b;
        var source = "";
        var res = 0;
        if (expresion in this.cash) {
            source = "cash";
            res = this.cash[expresion];
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
                this.cash[expresion] = res;
                source = "calculate";
            } else {
                alert("Wrong operation!!!");
            }
            
        }
        alert(expresion + " " + source)
    },
    getStr(elId) {
        var dateElement = document.getElementById(elId);
        var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    }
}
