function findUniq(arr) {
 // If something appears more than once, it's not it.
 // But how do we keep track of them? There will be hundreds of numbers.
 // Perhaps sort? If an index, the previous index, and the next index != each other, it's the right one
 const sorted = arr.sort();
 for (let i = 0; i < sorted.length; i++) {
    if (i == 0 && sorted[i] != sorted[i+1]) { return sorted[i] } // If it's the first element
    if (i == sorted.length-1 && sorted[i] != sorted[i-1]) { return sorted[i] } // If it's the last element
    if (sorted[i] != sorted[i-1] && sorted[i] != sorted[i+1]) return sorted[i]; // Otherwise...
 }
}
  