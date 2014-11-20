var swap = function(arr,i,j) {
//you put code here
var temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
return arr;
};

console.log(swap([1,2,5],0,2));
//=> [5,2,1]

var swap2 = function(arr,i,j) {
  arr[i] = [arr[j], arr[j] = arr[i]][0];
  return arr;
};

console.log(swap2([1,2,5],0,2));

var ar = [1,2,3,4];

console.log(ar);
swap2(ar,0,2);
console.log(ar);
