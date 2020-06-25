// Can be done with less code.
// I like this solution though, because we're grouping outputs that look alike.

function likes(names) {
    const likesString = " likes this";
    const likeString = " like this";
    
    if (names.length <= 1) {
      const name = names.length ? names[0] : "no one";
      return name.concat(likesString);
    }
    
    if (names.length <= 3) {
      const nameString = names.length == 2 ? `${names[0]} and ${names[1]}` : `${names[0]}, ${names[1]} and ${names[2]}`;
      return nameString.concat(likeString);
    }
    
    return `${names[0]}, ${names[1]} and ${names.length - 2} others`.concat(likeString);
    
  }