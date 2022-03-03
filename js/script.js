const userStringOutput = document.getElementById("output-user-string");
const palindromegOutput = document.getElementById("output-palindrome");

const userString = prompt("Inserisci una parola").toLocaleLowerCase();

userStringOutput.innerHTML = userString;
palindromegOutput.innerHTML = checkPalindrome(userString);

/**
 * Check if user string is palindrome.
 * @param {*} string // use string
 * @returns
 */
function checkPalindrome(string) {
  const array = string.split(""); // Convert string to array
  const reverseArray = array.reverse(); // Reverse the array
  const reverseString = reverseArray.join(""); // Convert array to string

  if (string == reverseString) {
    return true;
  } else {
    return false;
  }
}
