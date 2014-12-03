// A function to calculate factorial
var factorial = function (n) {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
};

module.exports.factorial = factorial;