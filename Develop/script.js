// Assignment code here
//Create arrays for different types of criteria that the user can select from 
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "*", "(", ")"]; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Display the password value and also remove the commas by utilizing the .join method 
  passwordText.value = password.join("");
}

function generatePassword() {
  //create empty arrays for chosen criteria characterset and random password
  chosenChars = []; 
  randomPW = []; 

  // Store the chosen length of the password into pwLength and convert into Number Type 
  var pwLength = parseInt(prompt("Enter a password length between 8 and 128 characters:"));

 // Check that the length of the password is between 8 - 128 . 
  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Oops! Try again"); 
      generatePassword(); 
  } 

  //Begin criteria selection of LowerCase, UpperCase, Numeric, & special characters. If selected, store values in chosenChars array
    var lowerPW = confirm("Click OK to INCLUDE LowerCase Characters in your Password. Click Cancel to Exclude.");
      if(lowerPW) {
      chosenChars = chosenChars.concat(lowerCharacters); 
      }

    var upperPW = confirm("Click OK to INCLUDE UpperCase Characters in your Password. Click Cancel to Exclude."); 
      if(upperPW) {
      chosenChars = chosenChars.concat(upperCharacters);
      }

    var numericPW = confirm("Click OK to INCLUDE Numeric Characters in your Password. Click Cancel to Exclude."); 
      if(numericPW){
      chosenChars = chosenChars.concat(numericCharacters);
      }

    var specialPW = confirm("Click OK to INCLUDE Special Characters in your Password. Click Cancel to Exclude."); 
      if(specialPW){
      chosenChars = chosenChars.concat(specialCharacters);
      }

    //If the user selects none of the above criteria, start over 
  if (!lowerPW && !upperPW && !numericPW && !specialPW) {
    alert("No criteria selected. Please Try Again!");
      generatePassword(); 
  }

  // Loop through the chosenChars Array selecting random characters using the Math.random method and store in randomPW array at respective index
for (var i = 0; i < pwLength; i++) {
  randomPW[i] = chosenChars[Math.floor(Math.random() * chosenChars.length)];  
}
 // Return the random array to writePassword function so we can display it in the webpage as your new password! 
return randomPW; 
}