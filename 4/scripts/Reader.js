var Reader = (function(){
    let reader = {};
    reader.readNum = function(elId){
        return _getStrOnId(elId).split(',').map(function(stringVal){return +stringVal} );
    };
    reader.readStr = function(elId){
        return _getStrOnId(elId).trim();
    };
    reader.readPositiveNum = function(elId){
        return Number.parseInt(_getStrOnId(elId));
    };
    reader.readArthSign = function(message){
        let sign = prompt(message);
        while(! /^[-/+*]{1}$/.test(sign)){
            sign = prompt("WRONG! " + message);
        }
        return sign;
    };
    var _getStrOnId = function(elId){
        var dateElement = document.getElementById(elId);
        var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
        return val;
    };
    return reader;
}());

module.exports = Reader;