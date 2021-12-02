const cachingCalculator = require('./cachingCalculator.js');
const reader = require("../Reader");
while(true){
    var a = reader.readPositiveNum("A");
    var b = reader.readPositiveNum("B");
    var opp = reader.readArthSign("Sign");
    if(!a || !b || !opp) break;
    alert(a + " " + opp + " " + b + " = " + cachingCalculator.calc(a, b, opp));
}
