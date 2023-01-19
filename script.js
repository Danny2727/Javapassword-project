// Assignment code here
// The Array of upper case letters, lower case letters, numbers, and special characters.
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"]
var numberValArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}"]
var userChoice = [];
var length = "";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// This function contains the criteria that must be met to generate a password.
function generatePassword() {
    length = prompt("Choose a password between 8 and 128 characters");
    if (length > 8 && length < 128); {

        if (confirm("Would you like to use uppercase letters.")) {
            userchoice = userChoice.concat(upperCaseArray);
        }

        if (confirm("Would you like to use lowercase letters.")) {
            userChoice = userChoice.concat(lowerCaseArray);
        } 
        if (confirm("Would you like to inlude numbers.")) {
            userChoice = userChoice.concat(numberValArray);
        } 
        if (confirm("Would you like to include special characters.")) {
            userChoice = userChoice.concat(specCharArray);
        }
        else {
            console.log("User must select password length and at least one of the password criterias");
        }
        
    }

}

function createPassword() {
    var selectedPassword = "";
    for (var i = 0; i < length; i++) {
        var finishedPassword = Math.floor(Math.random() * [userChoice.length]);
        password = password + userChoice[finishedPassword];
    }
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passordNew = createPassword();
    if (password) {}
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
