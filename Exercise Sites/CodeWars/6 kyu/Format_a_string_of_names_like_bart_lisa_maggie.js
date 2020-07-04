function list(names){
    // There are basically 3 cases.
    // One with 3 or more names, wherein they would be separated by commas and then lastly an ampersand
    // One with 2 names, in which they would only be separated by an ampersand
    // One with only 1 name, in which we'd just print the name
    if (names.length == 1) { return names[0].name; }
    if (names.length == 2) { return `${names[0].name} & ${names[1].name}`; } 
    
    // Slice list (exclude last) and just .join
    if (names.length >= 3) {
        // 'names' is an array of objects, but for this to work we need it to be an array of strings
        const mappedNames = names.map(n=>n.name);
        let allButLastName = mappedNames.slice(0, names.length - 1);
        let nameString = allButLastName.join(', ');
        return nameString + " & " + names[names.length - 1].name;
        
    }
    // If there are no names
    return '';
  }