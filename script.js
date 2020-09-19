// Assignment Code
var generateBtn = document.querySelector("#generate");

// array variables to hold potential characters (using ascii codes)
var UpperCaseCharCodes = characterCodes(65, 90);
var LowerCaseCharCodes = characterCodes(97, 122);
var NumberCharCodes = characterCodes(48, 57);
var SymbolCharCodes = characterCodes(33, 47)
  .concat(characterCodes(58, 64))
  .concat(characterCodes(91, 96))
  .concat(characterCodes(123, 126));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to create arrays of potential charcters from ASCII character codes
function characterCodes(min, max) {
  var array = [];
  for (var i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

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
