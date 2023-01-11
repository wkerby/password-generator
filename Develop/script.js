// Assignment code here
var password = "";
//to what data type does js store prompt variables? going to assume it is string value and convert to string to int using parseInt
var numchars = parseInt(prompt("Please provide password length (must be no fewer than 8 characters and no greater than 128 characters)."));
if (numchars < 8 || numchars > 128) {
  console.log("Please enter an integer value between 8 and 128")
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

