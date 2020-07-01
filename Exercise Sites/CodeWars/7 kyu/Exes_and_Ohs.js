function XO(str) {
    let x=0,o=0;
    // Making lowercase to avoid case sensitivity. Splits the string into an array.
    // Then only keeps any value that is either 'x' or 'o'. These are then counted.
    str.toLowerCase().split('').filter((c => c == 'x' || c == 'o')).forEach(c => {
        if (c == 'x') x++;
        if (c == 'o') o++;
    });
    // Returns the evaluated expression.
    return (x == o);
}