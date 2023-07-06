var read = require("readline-sync");
var dayNumber = parseInt(read.question("Enter a number (1-7) representing a day of the week:"));

var weekday;
switch (dayNumber) {
  case 1:
    weekday = "Sunday";
    break;
  case 2:
    weekday = "Monday";
    break;
  case 3:
    weekday = "Tuesday";
    break;
  case 4:
    weekday = "Wednesday";
    break;
  case 5:
    weekday = "Thursday";
    break;
  case 6:
    weekday = "Friday";
    break;
  case 7:
    weekday = "Saturday";
    break;
  default:
    weekday = "Invalid day number!";
}
console.log(weekday);