function incrementString (strng) {
    // Need to extract number from string.
    const number = strng.replace( /^\D+/g, '');
    // If there is no number:
    if (number === "") return strng + "1";

    // Going from the back to the front, incrementing the first number. If it becomes 10, increment the next one(s) and set it to 0.
    let numberAsArray = number.split('');
    for (let i = numberAsArray.length - 1; i >= 0; i--) {
        numberAsArray[i] === parseInt(numberAsArray[i]);
        if (i == numberAsArray.length - 1) numberAsArray[i]++;
        if (numberAsArray[i] === 10 && numberAsArray[i-1]) {
            numberAsArray[i] = 0;
            numberAsArray[i-1] = parseInt(numberAsArray[i-1]) + 1;
        }
    }
    

    return strng.split('').splice(0, strng.length - numberAsArray.length).join('') + numberAsArray.join('');
}