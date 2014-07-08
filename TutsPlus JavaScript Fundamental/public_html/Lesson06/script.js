var obj = "This is a string object.",
        length = obj.length; // 24
var indexOne = obj.indexOf("is");
var indexTwo = obj.indexOf("is", indexOne + 1);
var indexThree = obj.indexOf("in", 2);
var upperCase = obj.toUpperCase();
var lowerCase = obj.toLowerCase();
var subStr = obj.substr(10,6);
var subString = obj.substring(10,16);
var replace = obj.replace("object","value");
var valueof = obj.valueOf();

alert(indexOne);
alert(indexTwo);
alert(indexThree);
alert(upperCase);
alert(lowerCase);
alert(obj);
alert(subStr);
alert(subString);
alert(replace);
alert(valueof);
