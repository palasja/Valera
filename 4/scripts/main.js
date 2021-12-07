
const arraysorter = require('./arraySorter/arraySorter.js');
const reader = require("./Reader.js");

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
});