import { getStr } from "./common.js";
function getEUDate() {
    var regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
    var val = getStr("date");
    var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
    alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
};
function getEUDateMs() {
    var val = getStr("date");
    var date = new Date(Number(val));
    alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
};
function getDateFullMonth() {
    var months = [
        "January",
        "February",
        "March",
        "April",
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
    var val = getStr("date");
    var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
    alert(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
};
function getDateRegExp() {
    var arrStr = getStr("date").split(',');
    if (arrStr.length == 1) {
        getEUDate();
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
};
function getDateRegExpPattern() {
    var str = getStr("date").split(',');
    if (str.length == 1) {
        getEUDate();
        return;
    }
    if (str.length == 2) {
        getDateRegExp();
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
};
export { getEUDate, getEUDateMs, getDateFullMonth, getDateRegExp, getDateRegExpPattern }; 