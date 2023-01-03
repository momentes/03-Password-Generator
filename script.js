// Assignment Code
var generateBtn = document.querySelector("#generate");

// Input Characters
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "/", ",","."];

var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var textGeneral = ["Your Secure Password"]

// Password Generator Input
function generatePassword() {
  characterType = [];

  let charactersLength = parseInt(prompt("Please select between  8  -  128  characters for your Password", 8));
  if (isNaN(charactersLength)) {
    alert ("Password must be between 8 - 128 characters.").preventdefault()
  } else if (charactersLength < 8) {
    alert ("Password must be more than 8 characters.")
    return textGeneral.preventdefault();
  } else if (charactersLength > 128) {
    alert ("Password must be less than 128 characters.")
    return textGeneral.preventdefault();
  }

    if(confirm("Should the password contain Numeric characters? [123]")) { 
      characterType = characterType.concat(numericCharacters);
    }
    if(confirm("Should the password contain UpperCase characters? [ABC]")) { 
      characterType = characterType.concat(upperCharacters);
    }
    if(confirm("Should the password contain LowerCase characters? [abc]")) { 
      characterType = characterType.concat(lowerCharacters);
    }
    if(confirm("Should the password contain Special characters? [!@#]")) {
      characterType = characterType.concat(specialCharacters);
    }
    if(characterType.length === 0){
      alert ("You must select one character type. Please try again")
      return textGeneral;
    }    
    return true; 
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
