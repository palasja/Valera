var Reader = (function(){
    let reader = {};
    reader.readNum = function(){
        return prompt("Input array").split(',').map(string => +string);
    };
    reader.readStr = function(message){
        return prompt(message);
    };
    reader.readPositiveNum = function(message){
        return Number.parseInt(prompt(message));
    };
    reader.readBinary = function(message){
        return prompt(message);
    };
    reader.readArthSign = function(message){
        let sign = prompt(message);
        while(! /^[-/+*]{1}$/.test(sign)){
            sign = prompt("WRONG! " + message);
        }
        return sign;
    };
    return reader;
}());

module.exports = Reader;