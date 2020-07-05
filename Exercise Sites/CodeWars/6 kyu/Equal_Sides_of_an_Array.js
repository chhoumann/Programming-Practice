function findEvenIndex(arr) {
  for(let i = 0; i < arr.length; i++) {
    let ss1 = arr.slice(0,i+1).reduce((prev,cur) => prev+cur);
    let ss2 = arr.slice(i,arr.length).reduce((prev,cur) => prev+cur);
    if (ss1 === ss2) return i;
  }
  return -1;
}
// Leaving this commented out part here. This is what I went through before finding the solution
/* function findEvenIndex(arr) {
  let pi = Math.floor((arr.length - 1) / 2);
  // probably would want some pivot element that we move left or right
  // depending on which 'side' is bigger
  // if pivot element index === 0 or arr.length-1 and side1 != side2, return -1
  // else return index
  for(let i=0; i<(arr.length+1)/2;i++) {
    // sum side 1
    let ss1 = arr.slice(0,pi).reduce((prev,cur) => prev+cur);
    // sum side 2
    let ss2 = arr.slice(pi+1,arr.length).reduce((prev,cur) => prev+cur);
    // are they equal? if not, which side is biggest. Move pi opposite of that
    if (ss1 === ss2) {return pi} else (ss1 < ss2) ? pi++ : pi--;
  }
  return -1;
}
 */
