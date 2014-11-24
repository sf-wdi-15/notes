var each = function(arr, fn) {
  for(var i = 0; i<arr.length; i++) {
    fn(arr[i]);
  };
};

var x = [1,2,3,4,5,6];

each(x, function(a) {
  console.log(a);
});

var for_each = function(arr, fn) {
  for(var i = 0; i<arr.length; i++) {
    fn(arr[i], i, arr);
  };
};

var nums = [1,2,3,4,5];

for_each(nums, function(el,id,ar) {
  console.log(ar);
  ar[id] = el + 5;
  console.log(ar);
});
