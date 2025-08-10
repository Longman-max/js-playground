var string1 = "This is a the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

let test1 = regex.test(string1);
console.log(test1);

let test2 = regex.test(string2);
console.log(test2);
