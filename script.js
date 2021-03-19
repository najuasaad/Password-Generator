// Assignment Code
var generateBtn = document.querySelector("#generate");

// my input:
// arrays for 5 different VARIABLE OPTIONS
// review: needs semi-colon to function

var length = ""
var numeric = [0123456789];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!", "@", "#", "$", "?", "*", "%"];

// variables for 5 PROMPTS that will output 5 VAR
// prompts are "confirm" declarations
// confirm messages must be in function, length needs an empty input variable?

// var confirmLength = "";
// var confirmNumbers; 
// var confirmUppers; 
// var confirmLowers;
// var confirmSpecial; 


function generatePassword() { 
  // start at beginning, first variable input, length

  var confirmLength = (prompt("How many characters do you need?"));
  
  // must be between 8 and 30
  // if else not working, try for statement 
  //will this work if alpha or other characters are entered into prompt?
  
  if(confirmLength <= 7 || confirmLength >= 51) {
    alert("Must choose between 8 and 50!");
    generatePassword();
    } 

  // now add in other core prompts to the function to get variables

  var confirmNumbers = (confirm("Would you like numeric characters?"));
  var confirmUppers = (confirm("Would you like uppercase letters?"));
  var confirmLowers = (confirm("Would you like lowercase letters?"));
  var confirmSpecials = (confirm("Would you like special characters?"));

    //what if they choose nothing?
    //loop like lenghth

    if(confirmNumbers !== true && confirmUppers !== true && confirmLowers !== true && comfirmSpecials !== true) {
      alert("You must choose at least one character type!");
      confirmNumbers = (confirm("Would you like numeric characters?"));     
      confirmUppers = (confirm("Would you like uppercase letters?")); 
      confirmLowers = (confirm("Would you like lowercase letters?")); 
      confirmSpecials = (confirm("Would you like special characters?")); 
    }

  // put all the parameters together
  // put them in an array with a loop with 2nd i value being confirmLength

  var finalArray = [];

  //only add in confirmed characters

  if (confirmNumbers) {
    finalArray = finalArray.concat(numeric)
  }
  if (confirmUppers) {
    finalArray = finalArray.concat(upper)
  }
  if (confirmLowers) {
    finalArray = finalArray.concat(lower)
  }
  if (confirmSpecials) {
    finalArray = finalArray.concat(special)
  }

  //does the for loop need its own variable for outcome?
  // must use final array length, not confirmLength. Because I am using that array.

  var finalFinalNotArray = "";

  // 
  for(var i = 0; i < confirmLength; i++) {
    finalFinalNotArray = finalFinalNotArray + finalArray[Math.floor(Math.random() * finalArray.length)];
  }
  return finalFinalNotArray;
}




//DO NOT TOUCH ANYTHING BELOW THIS LINE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
