
var factorial = function(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

module.exports = factorial;
