import "../style.less"
const sorter = require('./arraySorter/arraySorter.js');
const reader = require("./Reader.js");
let testBubel = ""
var arraysorter = new sorter(reader.readNum("arrSort"));

let radioGroup = document.getElementsByName("sortType");
for (var i = 0; i < radioGroup.length; i++) {
    let cur = radioGroup[i];
    radioGroup[i].addEventListener("change", 
    function(){
        arraysorter.arr = reader.readNum("arrSort");
        arraysorter.sort(cur.id);
        document.getElementById("output").innerHTML = arraysorter.arr;
    }
    );
}
/*
document.getElementById("minMax").addEventListener("click", 
function(){
    arraysorter.minMax(reader.readNum("arrSort"))
});
document.getElementById("maxMin").addEventListener("click", 
function(){
    arraysorter.maxMin(reader.readNum("arrSort"))
});
document.getElementById("pow2").addEventListener("click", 
function(){
    arraysorter.pow2(reader.readNum("arrSort"))
});
document.getElementById("odd").addEventListener("click", 
function(){
    arraysorter.odd(reader.readNum("arrSort"))
});*/