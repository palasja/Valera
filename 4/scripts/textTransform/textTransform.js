
class TextFormatter {
    transform(str, strMaxLength, strNumLines, hyphenation){
        var arr = [];
        var arrTmp = [];
        var result = "";
        switch (hyphenation) {
            case ("char"):
                arr = str.split('');
                arrTmp = arr.slice (0, strNumLines);
                result = arrTmp.join("\n");
                break;
            case ("word"):
                arr = str.split(/ /g);
                for(let i=0; i < arr.length && i < strNumLines; i++){
                    arrTmp[i] = arr[i].substr(0, strMaxLength);
                };
                result = arrTmp.join("\n");
                break;
            case ("sentence"):
                //arr = str.split(/\S.*?[\.\?\!](?=\s|$)/g);
                arr = str.split(/[\.\?\!]/g);
                for(let i=0; i < arr.length && i < strNumLines; i++){
                    arrTmp[i] = arr[i].substr(0, strMaxLength);
                };
                result = arrTmp.join("\n");
                break;
            default:
                result = str;
        }
        return result;
    }
}

module.exports = TextFormatter;
