# A Review of Node

## A few basic questions
1. What does REPL stand for?
  * What is the REPL?
2. Running javascript applications or scripts using node

## File separation in node

### A trivial example

Suppose we want to create a simple script that prints "Hello world!" to the console.
* How would we go about that?

What if after printing "Hello world!" we wanted our script to compute the result of `factorial(5)`?
* How might we go about adding this functionality to our script?

In terms of "concerns", would you say printing "Hello world" is similar to calculating factorials?

### Using require for file separation
1. At a basic level, what does `require` do?
  * Let's review how to use `require()`
  * And discuss how `require()` can help us separate our code into separate files

2. But if we just use `require` to include our normal scripts, we're basically just stapling bits of code together
  * In our original scripts, when we write the statement `var greeter = require("hello_world.js")` into `app.js` what is the value of `greeter`?
  * How about after we expose some functionality or values?

3. What if we want to "expose" functionality when we use the `require`?
  * What are the benefits of using `module.exports`?
    - Namespacing
    - Creating an "API" or "module" of your own


