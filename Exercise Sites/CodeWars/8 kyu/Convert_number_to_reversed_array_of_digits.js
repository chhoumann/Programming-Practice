function digitize(n) {
    // Can't (as far as I know) split an integer into characters so I'm converting to a string and splitting that,
    // and making the characters into integers again.
    let intSplit = ((n.toString()).split('')).map(v => parseInt(v));
    return intSplit.reverse();
  }