// This is my first solution, using a hashmap & string traversal.
// This was, however, not a valid solution because it will not select the first non-repeating character in every case.
// Why? Because if the character code of another character (that there also only is one of in the string) is lower, then it'll wrongly select that one.
// Example: In 'sTreSS', it would select r because it has a character code of 82. The correct answer is T, which has a character code of 84.
/*
// Thanks to https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/
const maxChars = 100000; // To handle odd characters 
function getCharCountArray(string) {
  let count = new Array(maxChars).fill(0);
  for (i in string) {
    count[string.charCodeAt(i)] += 1;
  }
  return count;
}

function firstNonRepeatingLetter(s) {
  console.log(s);
  let charIndexAt = -1, check = false, sLC = s.toLowerCase();
  const count = getCharCountArray(sLC);

  for (let i = 0, k = 0; i < s.length && !check; i++, k++) {
    if (count[s.charCodeAt(i)] === 1) {
      charIndexAt = k; check = true;
      console.log(count.filter(v => v!=0), charCode('r'))
    };
  }

  console.log(s[charIndexAt]);
  return charIndexAt === -1 ? '' : s[charIndexAt];
}
 */

// This was the first solution that I thought of, which ended up being the correct one.
// I just did it wrong the first time around.
function firstNonRepeatingLetter(s) {
  // make char count obj
  const lowerCaseStr = s.toLowerCase();
  let cObj = {};
  for (i in lowerCaseStr) {
    if (!cObj[lowerCaseStr[i]]) cObj[lowerCaseStr[i]] = 0;
    cObj[lowerCaseStr[i]]++;
  }
  const filtered = Object.keys(cObj).filter(c => cObj[c] === 1)
  return filtered.length >= 1 ? s.charAt(lowerCaseStr.indexOf(filtered[0])) : '';
}
