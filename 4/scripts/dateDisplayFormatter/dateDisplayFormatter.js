class DateFormatter {
    setDate = function(strDate) {
        return Date.parse(strDate)? new Date(strDate) : new Date(Number(strDate));
    };
    getDateFullMonth = function(val) {
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
    inputPattern = function(strDate, pattern) {
        console.log(strDate +" = "+ pattern);
        return new Date(
            strDate.substr(pattern.search(/Y/), pattern.match(/Y/g).length),
            strDate.substr(pattern.search(/M/), pattern.match(/M/g).length),
            strDate.substr(pattern.search(/D/), pattern.match(/D/g).length),
        ); 
    };
    outputPattern = function(strDate,  patternOut) {
        let date = this.setDate(strDate);
        let outDate = patternOut.replace(/DD/, date.getDate());
        outDate = outDate.replace(/MM/, date.getMonth());
        outDate = outDate.replace(/YYYY/, date.getFullYear());
        return outDate;
    };
    inOutPattern = function(strDate, pattern, patternOut) {
        var date = this.getDateRegExp(strDate, pattern);
        var outDate = patternOut.replace(/DD/, date.getDate());
        outDate = outDate.replace(/MM/, date.getMonth());
        outDate = outDate.replace(/YYYY/, date.getFullYear());
        return outDate;
    }; 
}

module.exports = DateFormatter;
