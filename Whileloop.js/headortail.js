var headsCount = 0;
var tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  var coinFlip = Math.floor(Math.random() * 2);

  if (coinFlip == 0) {
    headsCount++;
    console.log("Heads");
  } else {
    tailsCount++;
    console.log("Tails");
  }
}

if (headsCount == 11) {
  console.log("Heads wins");
} else {
  console.log("Tails wins");
}