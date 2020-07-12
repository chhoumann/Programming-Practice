function generateHashtag (str) {
    // If empty besides whitespace, return false
    if (str.replace(/\s/g,'') === "") return false;
    // Remove spaces, and capitalize each word.
    const fix = str.split(' ').map(w => { return w.charAt(0).toUpperCase() + w.substr(1) }).join('');
    return fix.length <= 139 ? '#' + fix : false;
}
