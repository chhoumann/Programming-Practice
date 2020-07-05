// Got some help from https://codereview.stackexchange.com/questions/132125/rot13-javascript
function rot13(message){
    // For easy 'lookup'
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const ulAlphabet = (alphabet.toUpperCase() + alphabet);
    // Alphabet rotated by 13
    const rotArray = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    // Message => Array of characters => Look for index of character in alphabet.
    // If index was not found (case: special character), the character stays.
    // If index was found, we'll look up the alphabet index in the rotated alphabet and replace the character with that. 
    return message.split('').map((x) => (ulAlphabet.indexOf(x) > -1 ? rotArray[ulAlphabet.indexOf(x)] : x)).join('');
  }