const fibonacci = (n) => {
    let mem = {};
    fib = n => {
        if (n in mem) {return mem[n]}
        else {
            if (n <= 1) mem[n] = n
            else mem[n] = fib(n-1) + fib(n-2);
            return mem[n];
        } 
    };
    return fib(n);
}