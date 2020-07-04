var isSquare = function(n){
    // Made this one harder than it should have been. Should just have checked if the square root was an integer.
    // Like so: return Math.sqrt(n) % 1 === 0;
    return (Math.sqrt(n) * Math.sqrt(n) == n) && (Math.sqrt(n) % 1 == 0);
  }