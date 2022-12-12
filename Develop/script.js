// Assignment code here

var passwordLength = document.getElementById
  ('passwordLength');
var passwordIncludeUppercase = document.getElementById
  ('passwordIncludeUppercase');
var passwordIncludeNumeric = document.getElementById
  ('passwordIncludeNumeric');
var passwordIncludeSpecialCharacters = document.getElementById
  ('passwordIncludeSpecialCharacters');
var form = document.getElementById('passwordGeneratorForm');
var generate = alert;

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%"

// Helper function to pull random characters
function getRandomCharacter(characterList) {
  var randomIndex = Math.floor(Math.random() * characterList.length);
  var randomCharacter = characterList.charAt(randomIndex);
  //console.log(`Picking a random character from ${characterList}, selected ${randomIndex} ${randomCharacter}`)
  return randomCharacter;
}

// Write password to the #password input
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  // create an empty string for the new password
  var password = "";
  for (var i = 0; i <= 128; i++) {
    //console.log("On for loop " + i);
    var charactersToAddToPassword = getRandomCharacter(lowercaseLetters);
    if (includeNumbers) {
      charactersToAddToPassword += getRandomCharacter(numbers) 
    }
    if (includeUppercase) {
      charactersToAddToPassword += getRandomCharacter(uppercaseLetters)
    }
    if (includeSymbols) {
      charactersToAddToPassword += getRandomCharacter(specialCharacters)
    }
    //console.log("We will add these characters to the password: " + charactersToAddToPassword)
    password += charactersToAddToPassword;
  }
  return password.substring(0, characterAmount);
  // for loop for every character in the password (0..19)
  //  -- What kind of character can I generate? 
  //  -- Lowercase and Numbers
  //     -- get one random lowercase letter 
  //     -- get one random number
  //     -- add letter and number to password
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = passwordLength.value
  const includeUppercase = passwordIncludeUppercase.checked
  //console.log("checking value of uppercase: " + includeUppercase);
  const includeNumbers = passwordIncludeNumeric.checked
  const includeSymbols = passwordIncludeSpecialCharacters.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)

  //console.log("Clicked the button, generated the password: " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
})


//var pw = generatePassword(20, true, true, true);
//console.log("Testing the password generator");
//console.log(pw);  
//console.log(pw.length);  
