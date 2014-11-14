function reduce(fn,ls,init) {
  if (!!ls.length) {
    var x = ls.shift();
    return reduce(fn,ls,fn(init,x));
  } else {
    return init;
  }
}

var arr = new Array(1000000);
for(var i = 0; i<arr.length; i++) {
  //console.log(i);
  arr[i] = 1;
}
console.log(reduce(function(x,y) { console.log(x+y); return x + y; },[1,2,3,4,5],0));
console.log(reduce(function(x,y) { console.log(x+y); return x + y; },arr,0));
