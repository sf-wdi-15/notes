var isPalindrome = function(str) {
  for (var i = 0; i < str.length/2; i++) {
    console.log(str[i] + " " + str[str.length -1-i]);
    if (str[i] !== str[str.length -1-i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("1111"));
console.log(isPalindrome("11211"));
