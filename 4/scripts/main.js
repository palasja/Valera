import "../style.less"
const sorter = require('./arraySorter/arraySorter.js');
const stringCalculator = require('./stringCalculator/stringCalculator.js');
const TextTransformer = require('./textTransform/textTransform.js');
const DateTransformer = require('./dateDisplayFormatter/dateDisplayFormatter.js');
const reader = require("./Reader.js");
let testBubel = "";

var dateTransformer = new DateTransformer();
document.getElementById("formatDate").addEventListener("click", function(){
    let strDate = reader.readStr("date");
    let inPatten = reader.readStr("inputFormat");
    let outPattern = reader.readStr("outputFormat");
    console.log(outPattern.length == 0);
    console.log(inPatten.length == 0);
    if(outPattern.length == 0 && inPatten.length == 0){
        document.getElementById("output").innerHTML = dateTransformer.setDate(strDate);
    }else if(outPattern.length != 0 &&  inPatten.length == 0){
        document.getElementById("output").innerHTML = dateTransformer.outputPattern(strDate, outPattern);
    }else if(outPattern.length == 0 &&  inPatten.length != 0){
        document.getElementById("output").innerHTML = dateTransformer.inputPattern(strDate, inPatten);
    }else if(outPattern.length != 0 &&  inPatten.length != 0){
        document.getElementById("output").innerHTML = dateTransformer.inOutPattern(strDate, inPatten, outPattern);
    }
})

var arraysorter = new sorter(reader.readNum("arrSort"));
let radioGroup = document.getElementsByName("sortType");
for (var i = 0; i < radioGroup.length; i++) {
    let cur = radioGroup[i];
    cur.addEventListener("change", 
    function(){
        arraysorter.arr = reader.readNum("arrSort");
        arraysorter.sort(cur.id);
        document.getElementById("output").innerHTML = arraysorter.arr;
    }
    );
}
let calculator = new stringCalculator();
document.getElementById("calc").addEventListener("click",() =>{
    document.getElementById("output").innerHTML = calculator.calc(reader.readStr("stringCalc"));
});

let textTransform = new TextTransformer();
let getParams = () =>{
    let string = reader.readStr("textFormaterStr");
    let naxLength = reader.readPositiveNum("strMaxLength");
    let numLines = reader.readPositiveNum("strNumLines");
    let hyphenation = document.getElementsByName("textFormater")[0].value;
    document.getElementById("output").innerHTML = textTransform.transform(string, naxLength, numLines, hyphenation);
}
document.getElementById("strMaxLength").addEventListener("change", getParams);
document.getElementById("strNumLines").addEventListener("change", getParams);
document.getElementById("textFormater").addEventListener("change", getParams);
document.getElementById("textFormaterStr").addEventListener("focusout", getParams);

