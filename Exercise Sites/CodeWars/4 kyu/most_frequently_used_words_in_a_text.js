function topThreeWords(text) {
    let splitInputText = text.split(" ");
    let wordsObject = {};
    
    splitInputText.forEach(word => {
        let lowercaseWord = word.toLowerCase().replace(/[^a-zA-Z']/g, "");
        if (lowercaseWord.match(/([a-zA-Z])/)) {
            if (wordsObject[lowercaseWord] == null)
            wordsObject[lowercaseWord] = 1;
            else
            wordsObject[lowercaseWord]++;
        }
    });
    
    let sortableArray = [];
    for (let x in wordsObject) {
        sortableArray.push([x, wordsObject[x]]);
    }
    sortableArray.sort((a,b) => b[1] - a[1]);
    
    let finalArray = [];
    for (let i = 0; i < 3; i++) 
        if (sortableArray[i] != null)
            finalArray.push(sortableArray[i][0]);

    return finalArray;
}