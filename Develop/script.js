// Assignment code here

//create a function that generates password based off of users password characteristic responses
function generatePassword() {

  var active = true; //create while loop that verifies that all characters that the user opted for are in the password

  while (active) {
    //create password variable that function will return
    var password = "";

    //create array to capture all variations of a True type response from user
    var yesResponses = ["yes", "Yes", "YES", "y"];

    //create object in which all user prompted boolean responses will be stored
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
    var charlen = characters.length; //get length of the characters array

    //add uppercase characters if user desires uppercase characters in password
    if (Object.values(userBools)[1][1]) {
      //include logic for when user only desires uppercase characters
      if (Object.values(userBools)[0][1]) { //if user also wants lowercase characters
        for (var i = 0; i < charlen; i++) {
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
      for (var i = 0; i < 10; i++) { //appends the numbers 1-9
        characters.push(i);
      }
    }
    //add special characters if user desires special characters in password
    if (Object.values(userBools)[3][1]) {
      var specials = ['&', '$', '!', '#', '%'];
      for (var i = 0; i < specials.length; i++) {
        characters.push(specials[i]);
      }

    }

    //generate password by appending one random character at a time
    console.log("Character list:");
    console.log(characters);
    for (var i = 0; i < numchars; i++) {
      password += characters[Math.floor(Math.random() * characters.length)]
    }

    //verify that all characters that the user opted for are in the password
    verCounter = 0
    charver = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    passArray = Array.from(password);
    console.log(Array.from(passArray));
    if (Object.values(userBools)[0][1]) { //if user opts for lowercase characters
      for (var i = 0; i < charver.length; i++) {
        if (passArray.includes(charver[i])) {
          verCounter++;
          break;
        }
      }
    }

    else {
      verCounter++;
    }

    if (Object.values(userBools)[1][1]) { //if user opts for  uppercase characters
      for (var i = 0; i < charver.length; i++) {
        if (passArray.includes(charver[i].toUpperCase())) {
          verCounter++;
          break;
        }
      }

    }

    else {
      verCounter++;
    }

    if (Object.values(userBools)[2][1]) { //if user opts for numbers
      for (var i = 0; i < 10; i++) {
        if (passArray.includes(i.toString())) {
          verCounter++;
          console.log("PASS");
          break;
        }
        else {
          console.log("FAIL");
        }
      }
    }

    else {
      verCounter++;
    }

    if (Object.values(userBools)[3][1]) { //if user opts for special characters
      for (var i = 0; i < specials.length; i++) {
        if (passArray.includes(specials[i])) {
          verCounter++;
          break;
        }
      }
    }

    else {
      verCounter++;
    }

    if (verCounter == 4) {
      active = false;
    }
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

