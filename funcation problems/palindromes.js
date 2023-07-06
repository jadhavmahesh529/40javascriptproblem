function isPalindrome(number) {
    var originalNumber = number;
    var reverseNumber = 0;

    while (number > 0) {
        var remainder = number % 10;
        reverseNumber = reverseNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }

    if (originalNumber == reverseNumber) {
        return true;
    } else {
        return false;
    }
}

function checkPalindromeNumbers() {
    var read = require("readline-sync");
    var num1 = parseInt(read.question("Enter the first number:"));
    var num2 = parseInt(read.question("Enter the second number:"));

    var isNum1Palindrome = isPalindrome(num1);
    var isNum2Palindrome = isPalindrome(num2);

    if (isNum1Palindrome && isNum2Palindrome) {
        console.log(num1 + " and " + num2 + " are palindromes.");
    } else if (isNum1Palindrome) {
        console.log(num1 + " is a palindrome.");
        console.log(num2 + " is not a palindrome.");
    } else if (isNum2Palindrome) {
        console.log(num1 + " is not a palindrome.");
        console.log(num2 + " is a palindrome.");
    } else {
        console.log(num1 + " and " + num2 + " are not palindromes.");
    }
}

checkPalindromeNumbers();