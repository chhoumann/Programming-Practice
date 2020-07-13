const BigNumber = require('bignumber.js');

function sumStrings(a, b) {
  let x, y;
  if (a) x = new BigNumber(a);
  if (b) y = new BigNumber(b);
  return (a && b) ? (x.plus(y).toFixed()) : (a) ? a : (b) ? b : false;
}