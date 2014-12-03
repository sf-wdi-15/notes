intro_node.js
# Intro Node 
## File Separation 


### Running A `.js` File With Node

You can say 

```
$ node file.js
```

or

```
$ node some/path/to/your/file.js
```

## Using Require

Let's make a file called `hello_world.js` with the following code,


`hello_world.js`

```js
console.log("Hello world");
```

Now let's add code so our script can calculate `5!` — that is, `factorial(5)`.

```js
console.log("Hello world");

// A function to calculate factorial
var factorial = function (n) {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
};

// Now we print 5!
console.log("The factorial of 5 is: " + factorial(5));
```

But printing "Hello world" and doing calculations are very different concerns. So why not separate them out?

So let's also make an `app.js`.

`app.js`

```

var greeter = require("./hello_world.js");
// the require says go to the current working directory
//    the './' and find the hello_world.js file.


```

If we run `app.js`

```
$ node app.js
```

we should see `hello world` in our terminal. This is because `node` is finding the file `hello_world.js` in the current working directory, thus the `./` in the `require` call, and then running it.

We can also add back in our factorial calculator via the same method. We'll create a file called `factorial.js`

```js
// A function to calculate factorial
var factorial = function (n) {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
};
```

And then we'll update `app.js` so it includes the our function expression for `factorial(n)`.

```

var greeter = require("./hello_world.js");
// the require says go to the current working directory
//    the './' and find the hello_world.js file.

var fact = require("./factorial.js");

console.log("The factorial of 5 is: " + factorial(5));

```


If we create a folder called `sub_folder` and move `hello_world.js` and `factorial.js` into it

```
$ mkdir sub_folder
$ mv hello_world.js sub_folder/
$ mv factorial.js sub_folder/
```

When we run `node app.js` we get an error. This is because now `hello_world.js` is in `./sub_folder/hello_world.js`, so we should change our `require` statement to reflect it.

New `app.js`

```js
var greeter = require("./sub_folder/hello_world.js");
var fact = require("./sub_folder/factorial.js");

console.log("The factorial of 5 is: " + factorial(5));
```

If we make `another_folder` and move `app.js` into it we have tell node to go up a directory to find the right file.

```
$ mkdir another_folder
$ mv app.js another_folder/
$ node another_folder/app.js
```

So to fix this we update our require statement.

```js
var greeter = require("../sub_folder/app.js");
```

The `../` just means go up a directory and find the `sub_folder` with the `app.js` file.

### Modules And Exporting

#### Exporting A Single Method

Notice in the above we are doing a `require` for a file that basically logs `hello world`... Who cares?

First, let's checkout what the value of that greeter variable is.

`another_folder/app.js`

```
var greeter = require("../sub_folder/app.js");
console.log("The value of greeter is", greeter);
```

and run the `app.js` file

```
$ node another_folder/app.js
```

When we run this file we should see that `greeter` is `{}`. The file automatically returns an empty object without us doing anything to it.

Well, now we can update our `hello_world.js` to actually expose functionality after we require it.

`sub_folder/hello_world.js`

```js
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

```

`sub_folder/factorial.js`
```js
// A function to calculate factorial
var factorial = function (n) {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
};

module.exports.factorial = factorial;
```

`app.js`
```js
var greeter = require("./sub_folder/hello_world.js");
var fact = require("./sub_folder/factorial.js");

console.log("The value of greeter is:", greeter);
console.log("The value of fact is:", fact);

console.log("We can calculate 5! using fact.factorial(5):", fact.factorial(5));
```

Now when we run our `app.js` 

```
$ node app.js
```

we see that `greeter` is an object with the `sayHello: function` key value pair and
`fact` is an object with the `factorial: function` key value pair.

Let's modify our `app.js` to have it use the `sayHello` method as well.

`app.js`

```js
var greeter = require("./sub_folder/hello_world.js");
var fact = require("./sub_folder/factorial.js");

console.log("The value of greeter is:", greeter);
console.log("The value of fact is:", fact);

console.log("We can calculate 5! using fact.factorial(5):", fact.factorial(5));
```
 
#### Exporting A Specific Value/Function

The `module.exports` utility doesn't just  work with exposing different methods. We can tell `module.exports` to just expose a function or some other value entirely.

Let's modify our `hello_world.js` to demonstrate this.

`sub_folder/hello_world.js`

```js
console.log("hello world!");

// now we only expose a string "foobar"
module.exports = "foobar";

```

and we should probably modify our `app.js` to not try to use our now non-existent `sayHello` method.

`app.js`

```
var greeter = require("../sub_folder/app.js");
console.log("The value of greeter is", greeter);
```
Running our `app.js`

```
$ node another_folder/app.js
```

We see that 

```
The value of greeter is foobar
```

Similarly to how we exposed the `foobar` value, we can also expose just a function.

`sub_folder/hello_world.js`

```
console.log("hello world!");

/*
   module.exports is a key we can use
    to expose functionality on the
    object that got required in another 
    file... just try the following
    and see.
*/

module.exports = function () {
  return "Hello!!";
};

```

And running our `app.js` we see that 

```
The value of greeter is function () {
  return "Hello!!";
}
```


