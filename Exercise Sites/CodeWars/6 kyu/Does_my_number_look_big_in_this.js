function narcissistic(value) {
    // Break the number into its parts
    let split = value.toString().split('');
    // How many 'parts' are there?
    let n = split.length;
    
    // Iterate through, get sum
    let sum = 0;
    for (let i = 0; i < split.length; i++) {
        sum += Math.pow(parseInt(split[i]), split.length);
    }
    
    return sum === value
}