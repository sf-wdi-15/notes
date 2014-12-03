console.log("hello world!");

/*
   module.exports is a key we can use
    to expose functionality on the
    object that get required in another 
    file... just try the following
    and see.
*/

module.exports.sayHello = function () {
  return "Hello!!";
};