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

// When you click on "Generate Button", password generating function launches
generateBtn.addEventListener("click", writePassword);

// Main password generator function
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // Prompts for password criteria
  askPasswordLength();

  askLowerCase();

  //   passwordText.value = password;
}

// Function to create arrays of potential charcters from ASCII character codes
function characterCodes(min, max) {
  var array = [];
  for (var i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

// Password length prompt function
function askPasswordLength() {
  var validLength = false;
  while (validLength === false) {
    var characterLength = prompt(
      "How many characters are in your password? (minimum of 8 characters with a maximum of 128 characters)"
    );
    if (parseInt(characterLength) >= 8 && parseInt(characterLength) <= 128) {
      validLength = true;
    } else {
      alert("you must choose a valid character length");
    }
  }
}

// Character type prompt function
function askLowerCase() {
  var validLowerCase = false;
  while (validLowerCase === false) {
    var lowerCaseType = prompt(
      "Do you want to include lowercase characters? (Yes or No)"
    );
    if (lowerCaseType === "Yes" || lowerCaseType === "No") {
      validLowerCase = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}

// Validate input

// Password is generated

// Password is displayed
