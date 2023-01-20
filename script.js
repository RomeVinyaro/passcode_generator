let box = ""
let passwords = ""

const getPasswordOptions = {
  upperCased:"ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
  lowerCased:"abcdefghijklmnopqrstuvwxyz",
  numbers:"0123456789",
  specialChar:"~!@#$%^&*()_+{}<>?-=./"
}
function generatePassword () {

  let length = prompt("Choose password length")
  if (length > 8 && length < 129) {
  }
  else {
alert("Value must be inbetween 8 and 129")
  return null}

let capital = confirm("Password requires Uppercased letter")
if (capital) {
  box = box + getPasswordOptions.upperCased;
}

let lower = confirm("Password requires Lowercased letter")
if (lower) {
  box = box + getPasswordOptions.lowerCased;
}

let num = confirm("Password requires Number")
if (num) {
  box = box + getPasswordOptions.numbers;
}

let special = confirm("Password requires Special character")
if (special) {
  box = box + getPasswordOptions.specialChar;
}


  
}




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
