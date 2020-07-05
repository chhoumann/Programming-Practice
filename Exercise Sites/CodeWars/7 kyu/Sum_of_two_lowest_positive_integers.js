// Finds smallest number, removes it from numbers, adds it to next lowest number
function sumTwoSmallestNumbers(numbers) {  
    return parseInt(numbers.splice(numbers.indexOf(Math.min(...numbers)),1)) + parseInt(Math.min(...numbers));
  }
// could also just sort the array and add indices 0 & 1.

