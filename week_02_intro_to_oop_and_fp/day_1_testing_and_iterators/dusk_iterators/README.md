#Functional Programming and Iterators
In computer science, functional programming is a programming paradigm, a style of building the structure and elements of computer programs, that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

## Objectives

| Objective |
| :--- |
| Students will be able to describe what is meant by the phrase "First-Class Functions".|
| Students will be able to use higher-order functions to make new functions.|
| Studnets will be able to use common iterators like Map and Reduce. |


##What does that mean? Haven't we already been doing that?

###First class functions
A function is called first class if it can be passed as an argument to another function. This feature isn't found is every programming language: there are programming languages that have first-class functions, like Javascript or Ruby, and those that dont't like, C or Java (technically Java kind of has them now, but that's not important).

All that is meant by first-class functions is that we can pass functions as arguments to other functions. Just like any other type of value.

```javascript
var run = function(fn) {
  return fn();
};

run(function() { console.log("Hello, World"); });
```

###Higher order functions

functions that return other functions.

Function that adds a number k to a number l
```javascript
var add = function(k) {
  return function(l) {
    return l + k;
  };
};

var add5 = add(5);
console.log(add5(10));
```

function that returns a function if m > n

```javascript
var greaterThan = function(n) {
  return function(m) {
    return m > n;
  };
};

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

```

function that takes a function that returns a function on two parameters
```javascript
var calc = function(fn){
  return function(a,b) {
    return fn(a,b);
  };
};

var adder = calc(function(x,y) { return x+y; });
console.log(adder(1,2));

var multer = calc(function(a,b) { return a*b;});
console.log(multer(5,2);
```

###Iterators

####forEach

```javascript
var nums = [1,2,3,4,5];

nums.forEach(function(element, index, array) {
    console.log(array);
    console.log('nums[' + index + '] = ' + element);
});

console.log(nums);

nums.forEach(function(element, index, array) {
  console.log(array);
  array[index] = element + 5;
  console.log(array);
});

console.log(nums);
```

**Exercise:** Lets build our own forEach function called `each` that does the same thing as forEach.

####map

Build a function `map` that takes in an array and a function and applies the function on every element in the array.

####reduce

Build a function `reduce` that takes in an array and a function that combines all the elements into one.

####filter

**Exercise:** lets build a function that filters out elements of an array that dont meet a condition.

##Examples of my personal favorite functional programming languages
1. Lisp
  * Scheme
  * Clojure
  * Common Lisp
2. Haskell
