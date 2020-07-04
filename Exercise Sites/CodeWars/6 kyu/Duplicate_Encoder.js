function duplicateEncode(word){
    let wordArray = word.toLowerCase().split('');
    // Counts how many times each character has been found
    let wordObj = {};
    wordArray.forEach(c => {
        if (wordObj[c] == undefined) wordObj[c] = 1
        else wordObj[c]++;
    })

    // If character count is > 1 it should be replaced with ')'. If not then it should be replaced with '('.
    let str = '';
    wordArray.forEach(c => {
        if (wordObj[c] >= 2) str = str + ')'
        else str = str + '(';
    })
    return str;
}
