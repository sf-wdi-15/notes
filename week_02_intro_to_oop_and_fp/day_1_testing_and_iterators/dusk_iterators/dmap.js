
var dmap = function(arr, fn) {
  for_each(arr, function(el,id,ar) {
    ar[id] = fn(el);
  });
  return arr;
};

var myarr = [1,2,3];
dmap(myarr, function(x) { return x + 5; });
console.log(myarr);
