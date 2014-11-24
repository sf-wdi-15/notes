//BASIC EACH
var each = function(arr, fn) {
  for(var i = 0; i<arr.length; i++) {
    fn(arr[i]);
  };
};

var x = [1,2,3,4,5,6];

each(x, function(a) {
  console.log(a);
});

//SLIGHTLY MORE COMPLEX EACH
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

console.log("\nMAP");

//MAP NOT DESCRUCTIVE
var map = function(nums, fn) {
  var arr = [];
  for_each(nums, function(el,id,ar) {
    arr[id] = fn(el);
  });
  return arr;
};

var map_nums = [10,2,3,1,5,2];

var val = map(map_nums, function(x) { return x + 5; });
console.log("map nums:", map_nums);
console.log("val     :", val);

console.log("\nDESTRUCTIVE MAP");

//MAP DESCRUCTIVE
var dmap = function(nums, fn) {
  var arr = nums;
  for_each(arr, function(el,id,ar) {
    ar[id] = fn(el);
  });
  return arr;
};

var dnums = [10,2,3,1,5,2];

dmap(dnums, function(x) { return x + 5; });
var dval = dmap(dnums, function(x) { return x + 5; });
console.log("dmap_nums:", dnums);
console.log("dval     :", dval);

console.log("\nREDUCE");

//REDUCE
var reduce = function(arr, fn, start) {
  var result = start || arr[0];
  for_each(arr.slice(1), function(el,id,ar) {
    result = fn(result,el);
  });
  return result;
};

var xs =[1,2,3,4,5];
var ans = reduce(xs,function(x,y) { return x + y; }, 0);
console.log('xs:', xs);
console.log('ans:', ans);

//WITHOUT START
var xs =[1,2,3,4,5];
var ans2 = reduce(xs,function(x,y) { return x + y; });
console.log('xs:', xs);
console.log('ans:', ans2);
