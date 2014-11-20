var letterCount = function(str) {
  var obj = {};
  for(var i = 0; i<str.length; i+=1) {
    var letter = str[i];
    if(letter in obj) {
      obj[letter] +=1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};


console.log(letterCount('hello, world'));
