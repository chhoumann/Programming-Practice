// I should probably learn RegEx

function pigIt(str){
    let pigStr = [];
    
    str.split(' ').forEach(w => {
        if (w != '!' && w != '?') {
            w = w.split('');
            w.push(w.shift());
            w = w.join('') + 'ay';
        }
        pigStr.push(w);
    })

    return pigStr.join(' ');
}