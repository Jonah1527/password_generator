var generateBtn = document.querySelector("#generate");
var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var numberCheck;
var uppercaseCheck;
var specialCheck;
var passwordLength;

function determineLength(){
  passwordLength = prompt("How long do you want your password to be? (between 8-128 characters): ");

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

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to have uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}
 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

