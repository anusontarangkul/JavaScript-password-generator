// Assignment Code
var generateBtn = document.querySelector("#generate");

// empty parameter variables for generating password
var characterAmount = 0;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumbers = false;
var includeSpecial = false;

// array variables to hold potential characters (using ascii codes)
var upperCaseCharCodes = characterCodes(65, 90);
var lowerCaseCharCodes = characterCodes(97, 122);
var numberCharCodes = characterCodes(48, 57);
var symbolCharCodes = characterCodes(33, 47)
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
  generatePassword(
    characterAmount,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSpecial
  );

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
      characterAmount = characterLength;
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
      includeLowerCase = true;
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
      includeUpperCase = true;
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
      includeNumbers = true;
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
      includeSpecial = true;
      validSpecial = true;
    } else if (specialType === "No") {
      validSpecial = true;
    } else {
      alert('you must choose "Yes" or "No"');
    }
  }
}

// Variable to keep track of how many character types chosen
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

// Password is generated

function generatePassword(
  characterAmount,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSpecial
) {
  let charCodes = [];
  if (includeLowerCase) {
    charCodes = charCodes.concat(lowerCaseCharCodes);
  }
  if (includeUpperCase) {
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(numberCharCodes);
  }
  if (includeSpecial) {
    charCodes = charCodes.concat(symbolCharCodes);
  }
  var passwordCharacters = [];
  for (var i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  // console.log(passwordCharacters.join(""));
  var finalPassword = passwordCharacters.join("");
  console.log(finalPassword);
}

// Password is displayed
