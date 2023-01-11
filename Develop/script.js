// Assignment code here
//create password into which final password will be stored
var password = "";

//create array to capture all variations of a True type response from user
var yesResponses = ["yes", "Yes", "YES", "y"];

//create object in which all user prompted boolean responses will be captured
var userBools = { Lower: ["lowercase", ""], Upper: ["uppercase", ""], Numeric: ["numeric", ""], Special: ["special", ""], };

//prompt user to provide password length
var numchars = parseInt(prompt("Please provide password length (must be no fewer than 8 characters and no greater than 128 characters)."));

//validate that user input is within required range of 8 and 128 characters
if (numchars < 8 || numchars > 128) {
  console.log("Please enter an integer value between 8 and 128");
}

//loop over all questions pertaining to password characteristics 
for (var i = 0; i < Object.values(userBools).length; i++) {

  if (yesResponses.includes(prompt("Include " + Object.values(userBools)[i][0] + " characters (y/n)?"))) {
    Object.values(userBools)[i][1] = true;
  }
  else {
    Object.values(userBools)[i][1] = false;
  }
}

//validate that user has opted for at least one character type
if (Object.values(userBools)[2][1] == false && Object.values(userBools)[3][1] == false) {
  console.log("You must choose at least one character type");
}

function generatePassword(isLower, isUpper, isNumeric, isSpecial)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

