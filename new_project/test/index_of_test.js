var chai = require("chai");
var expect = chai.expect;

var indexOf = function (arr, value) {
    return arr.indexOf(value);
};

var testArr = [5, 6, 7];

describe("Array", function () {
  describe("indexOf", function(){
    it ("should return -1 for value not in array", function (){
      expect(-1).to.equal(indexOf(testArr, 8));
    });
    it("should return the index of something in the array", function(){
      expect(2).to.equal(indexOf(testArr, 7));
    });
  });

})
