function expandedForm(num) {
    let numberArray = [];

    // I honestly couldn't figure out how to make this number any other way while solving the problem.
    const numberLength = num.toString().length;
    let moduloThis = "1"; for (i = 1;i<numberLength;i++) moduloThis += "0";
    
    for(let i = parseInt(moduloThis), j = 0; j < numberLength; j++, i /= 10) {
        numberArray.push(num - num % i);
        num -= numberArray[j];
    }
    return numberArray.filter(v => v != 0).join(' + ');
}