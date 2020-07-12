const BigNumber = require('bignumber.js');

function add(a, b) {
  const x = new BigNumber(a);
  const y = new BigNumber(b);
  return (x.plus(y).toFixed());
}