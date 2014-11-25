var map = function(nums, fn) {
    var arr = [];
    for_each(nums, function(el,id,ar) {
      arr[id] = fn(el);
    });
    return arr;
};

var myarr = [1,2,3];
var val = map(myarr, function(x) { return x + 5; });

var val2 = map2(myarr, function(x) { return x + 5; });
