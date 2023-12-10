function generatePassword() {

  // Assignment of variables
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var passLength;
  var allChars = "";
  var password = "";

  // User to select the number range of 8-128 characters for password length. If nothing, or a non-numerical character is entered, then loop back to the choice prompt.
  do {
    passLength = prompt("Choose a password length of between 8 - 128 characters:");
    if (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "") {
      alert("Error! Please select a character length between 8 and 128.");
    }
  } while (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "");

  // User to choose at least one character type, otherwise loop back to the beginning of the list.

  var chooselowerCase;
  var chooseNumeric;
  var choosespecialChar;
  var chooseupperCase;

  do {
    chooselowerCase = confirm("Do you want lowercase characters?");
    chooseupperCase = confirm("Do you want uppercase characters?");
    chooseNumeric = confirm("Do you want numbers?");
    choosespecialChar = confirm("Do you want special characters?");
    if (!(chooselowerCase || chooseupperCase || chooseNumeric || choosespecialChar)) {
      alert("Error! Please select at least one character type!");
    }
  } while (!(chooselowerCase || chooseupperCase || chooseNumeric || choosespecialChar));

  // Concatenate character sets based on user choices
  if (chooselowerCase) { allChars = allChars.concat(lowercaseChars); }
  if (chooseupperCase) { allChars = allChars.concat(uppercaseChars); }
  if (chooseNumeric) { allChars = allChars.concat(numericChars); }
  if (choosespecialChar) { allChars = allChars.concat(specialChars); }


  // Generate the password
  for (let i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  // Return the generated password
  return password;
}

//Show the password on the screen
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener for length prompt and confirmation queries
generateBtn.addEventListener("click", writePassword);
