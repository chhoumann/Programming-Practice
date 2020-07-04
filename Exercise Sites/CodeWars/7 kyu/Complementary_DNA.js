function DNAStrand(dna){
    let newStr = '';
    dna.split('').forEach(c => {
        if (c == 'A') newStr += 'T';
        if (c == 'T') newStr += 'A';
        if (c == 'C') newStr += 'G';
        if (c == 'G') newStr += 'C';
    });
    return newStr;
  }