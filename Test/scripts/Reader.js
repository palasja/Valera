var Reader = (function(){
    let reader = {};
    reader.readNum = function(){
        return prompt("Input array").split(',').map(string => +string);
    }
    return reader;
}());

module.exports = Reader;