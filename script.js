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

// When clicked on password, prompts open

// Prompt "What is the minimum amount of characters"

// Prompt "What is the maximum amount of characters"

// Prompt "What characte types to include in the password"
// Choose lowercase, uppercase, numeric, and/or special characters

// Validate input

// Password is generated

// Password is displayed
