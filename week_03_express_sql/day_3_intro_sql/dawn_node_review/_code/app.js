var greeter = require("./sub_folder/hello_world.js");
var fact = require("./sub_folder/factorial.js");

console.log("The value of greeter is:", greeter);
console.log("The value of fact is:", fact);

console.log("We can calculate 5! using fact.factorial(5):", fact.factorial(5));