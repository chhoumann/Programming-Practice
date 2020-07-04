function comp(array1, array2){
    // False if either are null; problem wouldn't make sense
    if (array1 == null || array2 == null) return false;
    // Used to check if every element in array 1 has a match.
    let fl = array1.filter(i => {
        if (!array2.includes(i*i)) return true
        else {
            // Remove element from array 2 in case of duplicates
            array2.splice(array2.indexOf(i*i), 1);
            return false;
        }
    })
    return fl==0;
  }
