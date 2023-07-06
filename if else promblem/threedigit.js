function generateRandomValue() {
    return Math.floor(Math.random() * 900) + 100;
  }
  
  var values = [];
  for (var i = 0; i < 5; i++) {
    values.push(generateRandomValue());
  }
  
  var minimum = values[0];
  var maximum = values[0];
  
  for (var j = 1; j < 5; j++) {
    if (values[j] < minimum) {
      minimum = values[j];
    }
  
    if (values[j] > maximum) {
      maximum = values[j];
    }
  }
  console.log("Minimum value: " + minimum);
  console.log("Maximum value: " + maximum);