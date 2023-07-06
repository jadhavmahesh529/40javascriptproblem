var read = require("readline-sync");
var n = parseInt(read.question("Enter a number:"));

console.log("Powers of 2 less than or equal to 2^" + n + ":");

for (var i = 0; i <= n; i++) {
  var powerOf2 = Math.pow(2, i);
  console.log("2^" + i + " = " + powerOf2);
}  