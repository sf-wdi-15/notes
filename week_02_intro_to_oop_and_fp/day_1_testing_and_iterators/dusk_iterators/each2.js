
var for_each = function(arr, fn) {
  for(var i = 0; i<arr.length; i+=1) {
    fn(arr[i], i, arr);
  }
};

for_each([1,2,3], function(x) { console.log(x); });


var log = function(arr) {
  for(var i = 0; i<arr.length; i++) {
    console.log(arr[i]);
  }
};

log([1,2,3,4]);
