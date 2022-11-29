// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function generatePassword() {

  // At least 10 characters but no more than 64.
  var pwLength = (prompt("Please enter the length of password:\nBetween 10 and 64"));
  while ( pwLength <= 9 || pwLength >= 65) {
  alert("please enter a valid tag:\nBetween 10 and 64");
  var pwLength = (prompt("Please enter the length of password:\nBetween 10 and 64"));
  }
  //  Code should validate for each input and at least one character type should be selected
//  Once prompts are answered then the password should be generated and displayed in an alert or written to the page
  var pwLowerCase = confirm("Does your password needs lowercase characters?");
  var pwUpperCase = confirm("Does your password needs UPPERCASE characters?");
  var pwNumeric = confirm("Does your password needs numeric characters?");
  var pwSpecial = confirm("Does your password needs special characters?");

  // If all with Cancel
  while ( pwLowerCase == false && pwUpperCase == false && pwNumeric == false && pwSpecial == false){
  alert("Please select at least one characher for generate.");
  var pwLowerCase = confirm("Does your password needs lowercase characters?");
  var pwUpperCase = confirm("Does your password needs UPPERCASE characters?");
  var pwNumeric = confirm("Does your password needs numeric characters?");
  var pwSpecial = confirm("Does your password needs special characters?");
  }
  var pwGenerator = [];

  if (pwLowerCase) {
  pwGenerator = pwGenerator.concat(lowerCasedCharacters)
  }

  if (pwUpperCase) {
    pwGenerator = pwGenerator.concat(upperCasedCharacters)
  }

  if (pwNumeric) {
    pwGenerator = pwGenerator.concat(numericCharacters)
  }

  if (pwSpecial) {
    pwGenerator = pwGenerator.concat(specialCharacters)
  }
  
  // Function for getting a random element from an array
  var gPassword = "";

  for (var i = 0; i < pwLength; i++) {
    gPassword = gPassword + pwGenerator[Math.floor(Math.random() * pwGenerator.length)];
  }
  return gPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);