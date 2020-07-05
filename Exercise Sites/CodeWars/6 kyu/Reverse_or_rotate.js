function revrot(str, sz) {
    // Cut into sz sized chunks
    let chnkArr = [];
    let stArr = str.split('');
    // I have no clue why it needs the 'j' variable to run. Honestly. I just put it there to stop the infinite loop that seemingly happened otherwise.
    let j = 0;
    while(stArr.length >= sz && j++ < 1000) {
        chnkArr.push(stArr.splice(0, sz));
    }
    // Check if sum of cubed chunks can be divided by 2, for each chunk
    if (chnkArr.length > 0) {
        chnkArr.forEach(chnk => {
            let sum = 0;
            chnk.forEach(v => { sum += Math.pow(parseInt(v), 3); })
            // if the chunk is divisible by two, reverse it - otherwise send first digit to the back
            if (sum % 2 == 0) { chnk = chnk.reverse() } else { chnk.push(chnk.shift()) };
        })
        return Array.prototype.concat.apply([], chnkArr).join(''); 
    }
    return "";
}