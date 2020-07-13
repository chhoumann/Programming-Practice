var moveZeros = function (arr) {
  let tmpArr = arr.filter(v => v == null || v.toString() != '0');
  return tmpArr.concat(arr.filter(v => v != null && v.toString() === '0'));
}