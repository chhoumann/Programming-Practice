function getMiddle(s) {
    let sp = s.split('');
    let mid = Math.floor(s.length / 2);
    return (s.length % 2 == 0) ? `${sp[mid-1]}${sp[mid]}` : sp[mid];
}