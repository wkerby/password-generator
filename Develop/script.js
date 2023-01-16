//create a function that generates password based off of users password characteristic responses
function generatePassword() {

  //create password variable that function will return
  var password = "";

  //create array to capture all variations of a True type response from user
  var yesResponses = ["yes", "Yes", "YES", "y"];

  //create object in which all user prompted boolean responses will be stored
  var userBools = { Lower: ["lowercase", ""], Upper: ["uppercase", ""], Numeric: ["numeric", ""], Special: ["special", ""], };

  //prompt user to provide password length

  var charlenSatisfied = true;
  while (charlenSatisfied) { //validate that user has entered a valid integer value between 8 and 128 for character length before continuing

    var numchars = parseInt(prompt("Please provide password length (must be no fewer than 8 characters and no greater than 128 characters)."));

    //validate that user input is within required range of 8 and 128 characters
    if ((arrayRange(8, 128)).includes(numchars) == false) {

      alert("Please enter a valid integer between 8 and 128")
    }

    else {
      charlenSatisfied = false;
    }

  }

  //ask all other questions pertaining to password characteristics
  var chartypesSatisfied = true; //validate that user has opted for at least one character type
  while (chartypesSatisfied) {
    for (var i = 0; i < Object.values(userBools).length; i++) {

      if (yesResponses.includes(prompt("Include " + Object.values(userBools)[i][0] + " characters (y/n)?"))) { //consider using the confirm built-in function
        Object.values(userBools)[i][1] = true;
      }
      else {
        Object.values(userBools)[i][1] = false; //program assumes that any response other than the variation of yes responses recorded in the yesResponses array can be assumed to mean "no"
      }

    }

    if (Object.values(userBools)[0][1] == false && Object.values(userBools)[1][1] == false && Object.values(userBools)[2][1] == false && Object.values(userBools)[3][1] == false) {
      alert("You must choose at least one character type")
    }

    else {
      chartypesSatisfied = false;
    }
  }

  var requirementsSatisfied = true; //validate that at least one character of each character type for which user has opted appears in the passcode before displaying 
  while (requirementsSatisfied) {

    var characters = [];
    var alphas = arrayRange(97, 122) //create list of unicode values for all lower case alphabetical characters
    // var alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var charlen = characters.length; //get length of the characters array

    if (Object.values(userBools)[0][1]) { //if user opts for lowercase alphabetical characters
      for (var i = 0; i < alphas.length; i++) {
        characters.push(String.fromCharCode(parseInt(alphas[i])));
      }
    }

    if (Object.values(userBools)[1][1]) { //if user opts for uppercase alphabetical characters
      for (var i = 0; i < alphas.length; i++) {
        characters.push(String.fromCharCode(parseInt(alphas[i])).toUpperCase());
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
    for (var i = 0; i < numchars; i++) {
      password += characters[Math.floor(Math.random() * characters.length)]
    }

    //verify that all characters that the user opted for are in the password
    verCounter = 0
    charver = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    passArray = Array.from(password);
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
          break;
        }
        else {
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
      requirementsSatisfied = false;
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

