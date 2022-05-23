var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "*", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"]; 


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password.join("");
}

function generatePassword() {
  chosenChars = []; 
  randomPW = []; 


  var pwLength = parseInt(prompt("Enter a length for your password between 8 and 128 characters:"));

 
  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Password length selected is either too short or too long. Try again"); 
      generatePassword(); 
  } 


    var lowerPW = confirm("Click OK to include LowerCase Characters. Click Cancel to Exclude.");
      if(lowerPW) {
      chosenChars = chosenChars.concat(lowerCharacters); 
      }

    var upperPW = confirm("Click OK to include UpperCase Characters. Click Cancel to Exclude."); 
      if(upperPW) {
      chosenChars = chosenChars.concat(upperCharacters);
      }

    var numericPW = confirm("Click OK to include Numeric Characters. Click Cancel to Exclude."); 
      if(numericPW){
      chosenChars = chosenChars.concat(numericCharacters);
      }

    var specialPW = confirm("Click OK to include Special Characters. Click Cancel to Exclude."); 
      if(specialPW){
      chosenChars = chosenChars.concat(specialCharacters);
      }


  if (!lowerPW && !upperPW && !numericPW && !specialPW) {
    alert("No criteria selected. Please Try Again!");
      generatePassword(); 
  }


for (var i = 0; i < pwLength; i++) {
  randomPW[i] = chosenChars[Math.floor(Math.random() * chosenChars.length)];  
}

return randomPW; 
}