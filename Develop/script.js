// Assignment code here
var password = "";
//create array to capture all variations of a True type response from user
var yesResponses = ["yes", "Yes", "YES", "y"];
//create object in which all user prompted booleans will be captured
var userBools = {
  isLower: "",
  isUpper: "",
  isNumeric: "",
  isSpecial: "",
}

//to what data type does js store prompt variables? going to assume it is string value and convert to string to int using parseInt
var numchars = parseInt(prompt("Please provide password length (must be no fewer than 8 characters and no greater than 128 characters)."));
//validate that user input is within required range of 8 and 128 characters
if (numchars < 8 || numchars > 128) {
  console.log("Please enter an integer value between 8 and 128");
}
else {
  console.log("pass")
}

//create variable to indicate whether user wants lowercase characters in password
var isLower = "";
//create condition that stores response in isLower var based off of user response
if (yesResponses.includes(prompt("Include lowercase characters (y/n)?"))) {
  isLower = true;
}
else {
  isLower = false;
}

//create variable to indicate whether user wants uppercase characters in password
var isUpper = "";
//create condition that stores response in isUpper var based off of user response
if (yesResponses.includes(prompt("Include uppercase characters (y/n)?"))) {
  isUpper = true;
}
else {
  isUpper = false;
}

//create variable to indicate whether user wants numeric characters in password
var isNumeric = "";
//create condition that stores response in isNumeric var based off of user response
if (yesResponses.includes(prompt("Include numeric characters (y/n)?"))) {
  isNumeric = true;
}
else {
  isNumeric = false;
}

//create variable to indicate whether user wants numeric characters in password
var isSpecial = "";

//create condition that stores response in isSpecial var based off of user response
if (yesResponses.includes(prompt("Include special characters (y/n)?"))) {
  isSpecial = true;
}
else {
  isSpecial = false;
}



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

