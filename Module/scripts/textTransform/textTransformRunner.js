const textTransform = require('./textTransform.js');
const reader = require("../Reader");

let string = reader.readStr("Input string");
let naxLength = reader.readPositiveNum("Input strMaxLength");
let numLines = reader.readPositiveNum("Input strNumLines");
let hyphenation = reader.readPositiveNum("Input hyphenation \n char, word, sentence ");

let result = textTransform.RunHyphenation({
    str: string,
    strMaxLength: naxLength,
    strNumLines: numLines,
    hyphenation: hyphenation
});

alert(result);


