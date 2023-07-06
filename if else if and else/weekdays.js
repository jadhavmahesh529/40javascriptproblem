var read = require("readline-sync");
var dayNumber = parseInt(read.question("Enter a number (1-7) representing a day of the week:"));

if (dayNumber == 1) {
  console.log("Sunday");
} else if (dayNumber == 2) {
  console.log("Monday");
} else if (dayNumber == 3) {
  console.log("Tuesday");
} else if (dayNumber == 4) {
  console.log("Wednesday");
} else if (dayNumber == 5) {
  console.log("Thursday");
} else if (dayNumber == 6) {
  console.log("Friday");
} else if (dayNumber == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day number!");
}