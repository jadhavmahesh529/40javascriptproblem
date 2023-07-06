var read = require("readline-sync");
var number = parseInt(read.question("Enter a number:"));

var factorial = 1;
for (var i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(number + " factorial is: " + factorial);