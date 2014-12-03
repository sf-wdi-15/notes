var merge = function(xs,ys) {
  var arr = [];
  var i = 0;
  var j = 0;

  while(i < xs.length || j < ys.length) {
    if ( xs[i] < ys[j] ) {
      arr.push(xs[i]);
      i++;
    } else {
      arr.push(ys[j]);
      j++
    }
  }

  return arr;
};


console.log(merge([1,2,5],[3,4,6]));
