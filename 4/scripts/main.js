import "../style.less"
const sorter = require('./arraySorter/arraySorter.js');
const stringCalculator = require('./stringCalculator/stringCalculator.js');
const transformer = require('./textTransform/textTransform.js');
const reader = require("./Reader.js");
let testBubel = ""
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

let textTransform = new transformer();
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

