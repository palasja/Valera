

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
        let more = 0;
        let less = 0;
        let equal = 0;
        let cur = 0;
        let odd = arr.length % 2 == 1 ? true : false;
        let medianValue = null;
        let minMedianValue = null;
        let maxMedianValue = null;
        if (odd) {
            let median = Math.ceil(arr.length / 2);
            for (let i = 0; i < arr.length; i++) {
                cur = arr[i];
                for (let j = 0; j < arr.length; j++) {
                    if (i == j) continue;
                    if (arr[j] < cur) less++;
                    if (arr[j] > cur) more++;
                    if (arr[j] == cur) equal++;
                    if (less > median || median < more) break;
                }

                if ((Math.abs(more - less) <= equal) || (median - 1 == more && less == median - 1)) {
                    medianValue = cur;
                    break;
                }
                more = 0;
                less = 0;
            }
            alert(medianValue);
        } else {
            let minMedian = Math.ceil(arr.length / 2);
            for (let i = 0; i < arr.length; i++) {
                cur = arr[i];
                for (let j = 0; j < arr.length; j++) {
                    if (i == j) continue;
                    if (arr[j] < cur) less++;
                    if (arr[j] > cur) more++;
                    if (arr[j] == cur) equal++;
                }

                if ((Math.abs(more - less) <= equal) || (minMedian - 1 == less && more == minMedian)) {
                    minMedianValue = cur;
                }
                if ((Math.abs(more - less) <= equal) || (minMedian == less && more == minMedian - 1)) {
                    maxMedianValue = cur;
                }
                more = 0;
                less = 0;
            }
            alert((minMedianValue + maxMedianValue) / 2);
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
        let date = typeof val == "number" ? new Date(val): new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear());
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
        let date = typeof val == "number" ? new Date(val) : new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        alert(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    },
        getStr() {
            let dateElement = document.getElementById("date");
            let str = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
            let res = Number(str);
            return res == NaN ? str: res;
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

        let workStr = str.substr(0, strMaxLength);
        workStr = workStr.split(/\n/g).slice(0, strNumLines);
        workStr = workStr.reduce((res, current) => res + current + "\n", "");

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
        con(res, outBase);
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
            let fullPart = Math.trunc(val / base);
            return fullPart + "" + this.con(val % base, base);
        }
    }
}
