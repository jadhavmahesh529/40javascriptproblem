var read = require("readline-sync");
var number = parseInt(read.question("Enter a number:"));

var unit;
switch (number) {
  case 1:
    unit = "Unit";
    break;
  case 10:
    unit = "Ten";
    break;
  case 100:
    unit = "Hundred";
    break;
  case 1000:
    unit = "Thousand";
    break;
  case 10000:
    unit = "Ten Thousand";
    break;
  case 100000:
    unit = "Hundred Thousand";
    break;
  case 1000000:
    unit = "Million";
    break;
  default:
    unit = "Invalid number!";
}

console.log(unit);