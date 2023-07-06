var initialAmount = 100;
var goal = 200;
var wins = 0;
var bets = 0;

while (initialAmount > 0 && initialAmount < goal) {
  bets++;
  
  var betResult = Math.floor(Math.random() * 2);
   
  if (betResult == 0) {
    initialAmount++;
    wins++;
  } else {
   initialAmount--;
  }
}

console.log("Number of times won: " + wins);
console.log("Number of bets made: " + bets);

if (initialAmount == 0) {
  console.log("Gambler is broke");
} else if (initialAmount == goal) {
  console.log("Gambler reached the goal of Rs " + goal);
}