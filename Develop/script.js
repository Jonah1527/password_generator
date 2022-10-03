var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function used to determine the length of the password
function determineLength(){
  passwordLength = prompt("How long would you like your password to be? (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password needs to be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password needs to be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password needs to be a number between 8-128 characters");
      determineLength();
    }
    return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}
