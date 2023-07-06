function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

function isPalindromePrime(number) {
    var reverseNumber = 0;
    var originalNumber = number;

    while (number > 0) {
        var digit = number % 10;
        reverseNumber = reverseNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return isPrime(reverseNumber);
}

var read = require("readline-sync");
var num = parseInt(read.question("Enter a number:"));

if (isPrime(num)) {
    console.log(num + " is a prime number.");

    if (isPalindromePrime(num)) {
        console.log("The palindrome of " + num + " is also a prime number.");
    } else {
        console.log("The palindrome of " + num + " is not a prime number.");
    }
} else {
    console.log(num + " is not a prime number.");
}