var binarySearch = function(arr, key) {
  var min = 0;
  var max = arr.length -1;

  while (max >= min) {
    var mid = Math.floor((min+max)/2);

    if (arr[mid] === key) {
      return arr[mid];
    } else if (arr[mid] < key) {
      min = mid + 1;
    } else {
      max = mid -1;
    }
  }

  return -1;
};


var myArr = [1,2,3,4,5,7,8,10,11];
console.log("Searching myArr for 3. Found:",binarySearch(myArr, 3));
console.log("Searching myArr for 12. Found:",binarySearch(myArr, 12));
