function accum(s) {
    let str = [];
    s.split('').forEach((c, i) => {
        str.push(c.toUpperCase());
        for(let j=0;j<i;j++){
            str.push(c.toLowerCase());
        }
        str.push('-');
    });
    // Remove the last '-'
    return (str.splice(0,str.length-1).join(''));
}