// Assignment code here

//create a function that generates password based off of users password characteristic responses
function generatePassword() {
  //create password variable that function will return
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

    if (yesResponses.includes(prompt("Include " + Object.values(userBools)[i][0] + " characters (y/n)?"))) { //consider using the confirm built-in function
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

  var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //add uppercase characters if user desires uppercase characters in password
  if (Object.values(userBools)[1][1]) {
    //include logic for when user only desires uppercase characters
    if (Object.values(userBools)[0][1]) { //if user also wants lowercase characters
      for (var i = 0; i < characters.length; i++) {
        characters.push(characters[i].toUpperCase());
      }
    }
    else {
      for (var i = 0; i < characters.length; i++) {
        characters[i] = characters[i].toUpperCase()
      }
    }
  }
  //add numbers if user desires numbers in password
  if (Object.values(userBools)[2][1]) {
    characters.push(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]);
  }
  //add special characters if user desires special characters in password
  if (Object.values(userBools)[3][1]) {
    characters.push(['&', '$', '!', '#', '%']);
  }

  //generate password by appending one random character at a time
  for (var i = 0; i < numchars; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //could this be fixed with a textContent = line?

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

