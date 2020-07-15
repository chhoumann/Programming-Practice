// Thanks to https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/

// The idea is to count the prime factors of 5.
// For example, 10! has two 5s.
// But some numbers have more than one 5.
// We'd expect that 28! would have five 5s, but it has 'one extra'. 
// We solve this by dividing n by 5, removing all the single 5s, dividing n by 25...
// The basic formula is: Math.floor(n/5) + Math.floor(n/25) + Math.floor(n/125) + ....
function zeros (n) {
    let count = 0, i = 5;
    while (n / i >= 1) {
        count += Math.floor(n/i);
        i *= 5;
    }
    return count;
}

console.log(zeros(28))