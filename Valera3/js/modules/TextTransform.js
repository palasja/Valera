import { getStr } from "./common.js";
function RunHyphenation() {
    var transform = TextFormatter({
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
};

function TextFormatter(params) {
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

export { RunHyphenation } 