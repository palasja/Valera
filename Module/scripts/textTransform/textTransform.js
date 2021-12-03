
var textFormatter = (function () {
    let textFormatter = {};
    textFormatter.RunHyphenation = function(params) {
        var str = params.str;
        var strMaxLength = params.strMaxLength;
        var strNumLines = params.strNumLines;
        var hyphenation = params.hyphenation;
        var arr = [];
        var result = "";
        switch (hyphenation) {
            case ("char"):
                arr = str.split('');
                arr = arr.slice(0, strNumLines);
                result = arr.join("\n");
                break;
            case ("word"):
                arr = str.split(/ /g);
                for(let i=0; i < arr.length || i < strNumLines; i++){
                    arr[i] = arr[i].substr(0, strMaxLength);
                };
                result = arr.join("\n");
                break;
            case ("sentence"):
                arr = str.split(/\S.*?[\.\?\!](?=\s|$)/g);
                for(let i=0; i < arr.length || i < strNumLines; i++){
                    arr[i] = arr[i].substr(0, strMaxLength);
                };
                result = arr.join("\n");
                break;
            default:
                result = str;
        }
        return result;
    };
    return textFormatter;
}());

module.exports = textFormatter;
