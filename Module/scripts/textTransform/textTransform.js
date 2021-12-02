
var textFormatter = (function () {
    let textFormatter = {};
    textFormatter.RunHyphenation = function(params) {
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
    };
    return textFormatter;
}());

module.exports = textFormatter;
