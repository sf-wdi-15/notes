# A Review of Node

## A few basic questions
1. What does REPL stand for?
  * What is the REPL?
2. How do you run javascript programs using using node?

## File separation in node

### A trivial example

Suppose we want to create a simple script that prints "Hello world!" to the console.
* How would we go about that?

What if after printing "Hello world!" we wanted our script to compute the result of `factorial(5)`?
* How might we go about adding this functionality to our script?

In terms of "concerns", would you say printing, and the calculation of factorials are similar, or different?

### Using require for file separation
1. What does `require` do?
  * Let's review how to use `require()`
  * And discuss how `require()` can help us separate our code into separate files

2. But if we just use `require` to include our normal scripts, we're basically just stapling bits of code together
  * In the statement `var greeter = require("hello_world.js")` what is the value of `greeter`?

