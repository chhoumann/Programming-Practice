function encrypt(text, n) {
    if (n <= 0 || text == "" || text == null) return text;
    let scnd = [];
    let tArr = text.split('');
    for (let i = 1; i < tArr.length; i += 2) {
        scnd.push(tArr[i]);
        tArr[i] = "Replace";
    }
    let combination = scnd.join('') + tArr.filter(v => v != "Replace").join('');
    return encrypt(combination, n - 1);
}

function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText == "" || encryptedText == null) return encryptedText;
    console.log(encryptedText, n);
    let i = 1;
    while(encrypt(encryptedText, i) != encryptedText) {
        i++;
    }
    return encrypt(encryptedText, Math.abs(i - n))
}