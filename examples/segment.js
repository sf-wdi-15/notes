var segment = function(arr, n) {
  var result = [];

  for (var i = 0; i < arr.length/n; i++) {
    var lowerIndex = i*n;
    var higherIndex = (i+1)*n;
    var seg = arr.slice(lowerIndex, higherIndex);
    result.push(seg);
  }
  return result;
};

console.log('segment([1,2,3,4], 2)   => ', segment([1,2,3,4], 2));
console.log('segment([1,2,3,4,5], 2) => ', segment([1,2,3,4,5], 2));
console.log('segment([1,2,3,4,5], 3) => ', segment([1,2,3,4,5], 3));
console.log('segment([1,2,3,4,5], 4) => ', segment([1,2,3,4,5], 4));
console.log('segment([1,2,3,4,5], 5) => ', segment([1,2,3,4,5], 5));
