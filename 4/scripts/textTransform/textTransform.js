
class RunHyphenation {
    constructor(str, strMaxLength, strNumLines, hyphenation){
        this.str = str;
        this.strMaxLength = strMaxLength;
        this.strNumLines = strNumLines;
        this.hyphenation = hyphenation;
    };
    transform(){
        var arr = [];
        var result = "";
        switch (hyphenation) {
            case ("char"):
                arr = str.split('');
                arr = arr.slice (0, strNumLines);
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
    }
}

module.exports = textFormatter;
