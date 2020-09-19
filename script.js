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

  validateCharacterTypes();

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

// Password length prompt
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

// Lowercase type prompt
function askLowerCase() {
  var validLowerCase = false;
  while (validLowerCase === false) {
    var lowerCaseType = prompt(
      "Do you want to include lowercase characters? (Yes or No)"
    );
    if (lowerCaseType === "Yes") {
      characterTypeChosen++;
      validLowerCase = true;
    } else if (lowerCaseType === "No") {
      validLowerCase = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}

// Uppercase type prompt
function askUpperCase() {
  var validUpperCase = false;
  while (validUpperCase === false) {
    var upperCaseType = prompt(
      "Do you want to include uppercase characters? (Yes or No)"
    );
    if (upperCaseType === "Yes") {
      characterTypeChosen++;
      validUpperCase = true;
    } else if (upperCaseType === "No") {
      validUpperCase = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}

// Numeric type prompt
function askNumbers() {
  var validNumbers = false;
  while (validNumbers === false) {
    var numbersType = prompt("Do you want to include numbers? (Yes or No)");
    if (numbersType === "Yes") {
      characterTypeChosen++;
      validNumbers = true;
    } else if (numbersType === "No") {
      validNumbers = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}

// Special Characters type prompt
function askSpecialChar() {
  var validSpecial = false;
  while (validSpecial === false) {
    var specialType = prompt(
      "Do you want to include special characters? (Yes or No)"
    );
    if (specialType === "Yes") {
      characterTypeChosen++;
      validSpecial = true;
    } else if (specialType === "No") {
      validSpecial = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}
var characterTypeChosen = 0;
// Validate at least one character type
function validateCharacterTypes() {
  var atLeastOneCharacterType = false;
  while (atLeastOneCharacterType === false) {
    askLowerCase();
    askUpperCase();
    askNumbers();
    askSpecialChar();
    if (characterTypeChosen > 0) {
      atLeastOneCharacterType = true;
    } else {
      alert("At least one character type must be chosen");
    }
  }
}

// Validate input

// Password is generated

// Password is displayed
