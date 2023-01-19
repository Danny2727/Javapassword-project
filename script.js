// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"]
var numberVal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}"]
var userChoice = [];

var passwordComplete;




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // 1.Prompt User for password Criteria
    //      a. Password length between 8 < 128
    //      b.Lowercase, uppercase, numbers, special characters
    //2.Validate input
    var option = prompt("Choose a password between 8 and 128 characters");
    if (length < 8 || length > 128){
      }  else {
        return "password must be between 8 - 128 characters long";
    }

    var upperCase = confirm("Would you like to use uppercase letters.")
    if (confirm("Would you like to use uppercase letters.") === true) {
        userChoice.concat(upperCase);
    } else {
        console.log("not selected");
    }

    var lowerCase = confirm("Would you like to use lowercase letters.")
    if (lowerCase("Would you like to use lowercase letters.") === true) {
        userChoice.concat(lowerCase);
    } else {
        console.log("not selected");
    }

    var numberVal = confirm("Would you like to inlude numbers.")
    if (confirm("Would you like to incldue numbers.") === true) {
        userChoice.concat(numVal);
    } else {
        console.log("not selected");
    }

    var specChar = confirm("Would you like to include special characters.")
    if (confirm("Would you like to include special characters.") === true) {
        userChoice.concat(specChar);
    } else {
        console.log("not selected");
    }



    for (let i = 0; i < passwordLength; i++) {
        password = Math.floor(Math.random() * userChoice.length);
    }




    //3.Generate password based on Criteria

    //4.Display Generated password on page.
    return "Generated password will display here"

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
