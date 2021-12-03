
var readerM = (function () {
    let reader = {};
    reader.read = function(){
        return prompt("Input array");
    }

    return reader;
}());

module.exports = readerM;