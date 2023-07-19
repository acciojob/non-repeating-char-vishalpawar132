//your JS code here. If required.
function findFirstNonRepeatingCharacter(inputString) {
  // Create a map to store the frequency of each character in the string
  const charFrequency = new Map();

  // Loop through the string and count the occurrence of each character
  for (const char of inputString) {
    if (charFrequency.has(char)) {
      charFrequency.set(char, charFrequency.get(char) + 1);
    } else {
      charFrequency.set(char, 1);
    }
  }

  // Loop through the string again to find the first non-repeated character
  for (const char of inputString) {
    if (charFrequency.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Get input from the user using prompt()
const userInput = prompt("Please enter a string:");

// Find the first non-repeated character
const result = findFirstNonRepeatingCharacter(userInput);

// Display the result using alert()
if (result !== null) {
  alert(result);
} else {
  alert("");
}
