// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of possible characters
var upperLetters = [
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
var lowerLetters = [
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "%", "+"];
console.log(specialCharacters[2]);

// When clicked on password, prompts open

// Prompt "What is the minimum amount of characters"
var minCharacters = prompt(
  "What is the minimum number of characters for you password?"
);
// Prompt "What is the maximum amount of characters"
var maxCharacters = prompt(
  "What is the maximum number of characters for you password?"
);
// Prompt "What characte types to include in the password"
// Choose lowercase, uppercase, numeric, and/or special characters
var characterTypes = prompt(
  "What character types are used for your password? (Please enter lowercase, uppercase, numeric, and/or special characters)"
);

// Validate input

// Password is generated

// Password is displayed
