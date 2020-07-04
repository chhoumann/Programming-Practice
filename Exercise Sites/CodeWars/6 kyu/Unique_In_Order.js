var uniqueInOrder=function(iterable){
    let a = [];
    for (let i = 0; i < iterable.length; i++) {
        if (a[a.length - 1] != iterable[i]) a.push(iterable[i]);
    }
    return a;
}