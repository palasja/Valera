const reader = require("../Reader");
var dateFormatter = (function () {
    let dateFormatter = {};
    dateFormatter.getEUDate = function(val) {
        const regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    };
    dateFormatter.getEUDateMs = function(val) {
        var date = new Date(Number(val));
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    };
    dateFormatter.getDateFullMonth = function(val) {
        const months = [
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
        const regexp = /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/;
        var date = new Date(val.replace(regexp, '$<year>-$<month>-$<day>'));
        return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    };
    dateFormatter.getDateRegExp = function(val) {
        var arrStr = val.split(',');
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
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    };
    dateFormatter.getDateRegExpPattern = function(val) {
        var str = val.split(',');
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
        return outDate;
    };
    return dateFormatter;
}());

module.exports = dateFormatter;
