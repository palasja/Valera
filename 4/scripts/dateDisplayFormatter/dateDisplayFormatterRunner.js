const dateDisplayFormatter = require('./dateDisplayFormatter.js');
const reader = require("../Reader");
alert("EUDate: " + dateDisplayFormatter.getEUDate(
    reader.readStr("DD-MM-YYYY")));
alert("EUDateMs: " + dateDisplayFormatter.getEUDateMs(
    reader.readStr("DD-MM-YYYY from ms")));
alert("DateFullMonth: " + dateDisplayFormatter.getDateFullMonth(
    reader.readStr("DD-MMName-YYYY")));
alert("DateRegExp: " + dateDisplayFormatter.getDateRegExp(
    reader.readStr("DD-MM-YYYY, pattern")));
alert("DateRegExpPattern: " + dateDisplayFormatter.getDateRegExpPattern(
    reader.readStr("DD-MM-YYYY, pattern, patternOut")));


