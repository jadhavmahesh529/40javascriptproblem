var read = require("readline-sync");
var day = parseInt(read.question("Enter the day:"));
var month = parseInt(read.question("Enter the month:"));
if ((month == 3 && day >= 20) || (month == 6 && day <= 20)) {
  console.log(true);
} else if (month > 3 && month < 6) {
  console.log(true);
} else {
  console.log(false);
}