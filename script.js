// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  //Capture User Inputs
  //Generate the password.
  var passwordLength = prompt(
    "How long would you like your password to be? (Min: 8, Max: 128)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Password is not within set length parameters, please select again"
    );
    generatePassword();
  } else passwordLength >= 8 || passwordLength <= 128;

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
  console.log(everyChoice);
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
