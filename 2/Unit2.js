
let ArraySorter = {
    arrBase: [19, -12, 4, 1, -3, 12, 59, 0, 13],

    bubleSort() {
        let arr = this.arrBase;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        alert(arr);
    },
    fastSort(arr, low, hight) {
        let j = low;
        let k = hight;
        let baseEl = arr[low]
        while (j<=k) {
            while (arr[j] < baseEl) {
                j++;
            }
            while (arr[k] > baseEl) {
                k--;
            }
            if (j<=k) {
                let tmp = arr[j];
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
    }
 }
let ArrayProcessingToolo = {
    getSubSum() {
        let arr = this.getArrInt();
        let max = 0;
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
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
        let arr = this.getArrInt();
        let maxValue = 0;
        let curValue = 0;
        let previos = Number.MIN_VALUE;
        for (let i = 0; i < arr.length; i++) {
            curValue = 0;
            previos = Number.MIN_VALUE;
            for (let j = i; j < arr.length; j++) {
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
        let max = Number.MIN_VALUE;
        let arr = this.getArrInt();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        alert(max);
    },
    getMinElemetn () {
        let min = Number.MAX_VALUE;
        let arr = this.getArrInt();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }
        alert(min);
    },
    getMedian() {
        let arr = this.getArrInt();
        let odd = arr.length % 2 == 1 ? true : false;
        let medianValue = null;
        if (odd) {
            let median = Math.ceil(arr.length / 2);
            medianValue = calcMedian(median - 1, median - 1);
        } else {
            let medianMinIndex = Math.ceil(arr.length / 2);
            let medianMin = calcMedian(medianMinIndex - 1, medianMinIndex);
            let medianMax = calcMedian(medianMinIndex, medianMinIndex - 1);
            medianValue = (medianMin + medianMax) / 2;
        }
        alert(medianValue);
        function calcMedian(countLess, countMore) {
            let more = 0;
            let less = 0;
            let equal = 0;
            let cur = 0;
            let medianValue = null;
            for (let i = 0; i < arr.length; i++) {
                cur = arr[i];
                more = 0;
                less = 0;
                for (let j = 0; j < arr.length; j++) {
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
        let arr = this.getArrInt();
        let max = 0;
        let maxValue = "";
        let cur = 0;
        let curValue = "";
        let previos = Number.MIN_VALUE;
        for (let i = 0; i < arr.length; i++) {
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
        let val = document.getElementById("subSum").defaultValue == null ? document.getElementById("subSum").defaultValue : document.getElementById("subSum").value;
        return val.split(',').map(string => +string);
    }
}
let DateDisplayFormatter = {
    getEUDate() {
        let regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        let val = this.getStr();
        let date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear());
    },
    getEUDateMs() {
        let val = this.getStr();
        let date = new Date(Number(val));
        alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
    },
    getDateFullMonth() {
        let months = [
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
        let regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        let val = this.getStr();
        let date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    },
        getStr() {
            let dateElement = document.getElementById("date");
            let str = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
            return str;
    },
    getDateRegExp() {
        let arrStr = this.getStr().split(',');
        if (arrStr.length == 1) {
            this.getEUDate();
            return;
        }
        let strDate = arrStr[0].trim();
        let pattern = arrStr[1].trim();
         let date = new Date(
            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),
            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),
            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),
        );
        alert(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
    },
    getDateRegExpPattern() {
        let str = this.getStr().split(',');
        if (str.length == 1) {
            this.getEUDate();
            return;
        }
        if (str.length == 2) {
            this.getDateRegExp();
            return;
        }
        let strDate = str[0].trim();
        let pattern = str[1].trim();
        let patternOut = str[2].trim();
        let date = new Date(
            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),
            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),
            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),
        );
        let outDate = patternOut.replace(/DD/, date.getDate());
        outDate = outDate.replace(/MM/, date.getMonth());
        outDate = outDate.replace(/YYYY/, date.getFullYear());
        alert(outDate);
    },
       //20102011, DDMMYYYY, YYYY-DD-MM
}
let TextTransform = {
    RunHyphenation() {
        let transform = this.TextFormatter({
            str: getStr("arg"),
            strMaxLength: getStr("strMaxLength"),
            strNumLines: getStr("strNumLines"),
            hyphenation: getHyphenation()
        });
        document.getElementById("outHyphination").innerText = transform;

        function getStr(elId) {
            let dateElement = document.getElementById(elId);
            let val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
            return val;
        };
        function getHyphenation() {
            let radioGroup = document.getElementsByName("hyphenation");
            for (var i = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].checked) return radioGroup[i].id;
            }
        };
    },

    TextFormatter(params) {
        let str = params.str;
        let strMaxLength = params.strMaxLength || 60;
        let strNumLines = params.strNumLines || 2;
        let hyphenation = params.hyphenation;

        let workStr = str.split(/\n/g).slice(0, strNumLines);
        workStr = workStr.reduce((res, current) => res + current.substr(0, strMaxLength) + "\n", "");

        let result = "";
        switch (hyphenation) {
            case ("char"):
                let arrChar = workStr.split('');
                result = arrChar.reduce((res, current) => res + current + "\n", "")
                break;
            case ('word'):
                let arrWord = workStr.split(/ /g);
                result = arrWord.reduce((res, current) => res + current + "\n", "")
                break;
            case ('sentence'):
                let arrSentence = workStr.split(/[?!.]/g);
                result = arrSentence.reduce((res, current) => res + current + "\n", "")
                break;
            default:
                result = workStr.replace(/\n/g, " ");
                break;
        }
        return result;
    }
}
let BinaryConverter = {
    letter: {
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
        let res = arr.reduce((sum, cur, index) => sum + (this.checkLetter(cur) * Math.pow(base, index)), 0);
        alert(this.con(res, outBase).split("").reverse().join(""));
        //alert(res.toString(outBase));
    },
    checkLetter(val) {
        val = val.toUpperCase();
        return val in this.letter ? this.letter[val] : val;
    },
    getStr(elId) {
        let dateElement = document.getElementById(elId);
        let val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    },
    con(value, base) {
        let val = value;
        if (val < base) {
            return val;
        } else {
            let fullPart = val % base;
            return fullPart + "" + this.con(Math.trunc(val / base), base);
        }
    }
}
let StringCalculator = {
    calc() {
        let str = this.getStr("stringCalc").trim();
        let arrStr = str.split(/[+/*-]/g);
        let arrOpp = str.match(/[+/*-]/g);
        let func = this.getFunc("+");
        let cash = 0;
        let res = 0;
        let j = 0;
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
        let dateElement = document.getElementById(elId);
        let val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
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
