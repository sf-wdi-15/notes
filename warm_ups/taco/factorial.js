
var factorial = function(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

var sumToN = function(n) {
  if (n < 1) {
    return 0;
  } else {
    return n + sumToN(n-1);
  }
};

module.exports = factorial;
module.exports.sort = sumToN;
