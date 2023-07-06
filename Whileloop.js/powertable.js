var read = require("readline-sync");
var n = parseInt(read.question("enter number"));

var power = 0;
var result = 1;

console.log("Powers of 2 less than or equal to 2^" + n + " till 256:");

while (result <= 256 && power <= n) {
  console.log("2^" + power + " = " + result);
  power++;
  result *= 2;
}