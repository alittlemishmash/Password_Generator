function generatePassword() {

  // Assignment of variables
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

  var passLength;

  do {
    passLength = prompt("Choose a password length of between 8 - 128 characters:");
    if (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "") {
      alert("Error! Please select a character length between 8 and 128.");}
  } while (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "");

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
      alert("Error! Please select at least one character type!");}
  } while (!(chooselowerCase || chooseupperCase || chooseNumeric || choosespecialChar));

}




var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener for length prompt and confirmation queries
generateBtn.addEventListener("click", writePassword);
