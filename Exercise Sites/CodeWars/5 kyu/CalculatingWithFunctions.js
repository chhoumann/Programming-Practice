const zero = (cb) => { return cb ? cb(0) : 0};
const one = (cb) => { return cb ? cb(1) : 1};
const two = (cb) => { return cb ? cb(2) : 2};
const three = (cb) => { return cb ? cb(3) : 3};
const four = (cb) => { return cb ? cb(4) : 4};
const five = (cb) => { return cb ? cb(5) : 5};
const six = (cb) => { return cb ? cb(6) : 6};
const seven = (cb) => { return cb ? cb(7) : 7};
const eight = (cb) => { return cb ? cb(8) : 8};
const nine = (cb) => { return cb ? cb(9) : 9};

const plus = (y) => (x) => x + y;
const minus = (y) => (x) => x - y;
const times = (y) => (x) => x * y;
const dividedBy = (y) => (x) => Math.floor(x / y);