// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables
var choiceUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var choiceLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var choiceNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var choiceSpec = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "?",
  "~",
  "-",
  "_",
  "{",
  "}",
  "[",
  "]",
];
var everyChoice = [];

function generatePassword() {
  //Created a variable for the password length and prompts the user to enter a desired password length from 8-128.
  var passwordLength = prompt(
    "How long would you like your password to be? (Min: 8, Max: 128)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Password is not within set length parameters, please select again"
    );
    generatePassword();
  } else passwordLength >= 8 || passwordLength <= 128;

  //Created confirms that will ask which charactes they will like to use in their password.
  var randomUpper = confirm(
    "Would you like to include upper case letters in your password?"
  );
  var randomLower = confirm(
    "Would you like to include lower case letters in your password?"
  );
  var randomNum = confirm(
    "Would you like to include numbers in your password?"
  );
  var randomSpec = confirm(
    "Would you like to include special characters in your password?"
  );

  //Establishes boolean operations, that if true from the confirms above, will take the elements of their respective arrays and place them into a new array
  if (randomUpper === true) {
    everyChoice.push(...choiceUpper);
  }
  if (randomLower === true) {
    everyChoice.push(...choiceLower);
  }
  if (randomNum === true) {
    everyChoice.push(...choiceNum);
  }
  if (randomSpec === true) {
    everyChoice.push(...choiceSpec);
  }
  //Picks random
  for (let i = passwordLength; i < everyChoice.length; i++) {
    return everyChoice[Math.floor(Math.random() * everyChoice.length)];
  }
  if (i <= passwordLength) {
    return everyChoice[Math.floor(Math.random() * everyChoice.length)];
  } else i > passwordLength;
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
