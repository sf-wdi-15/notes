#AJAX with jQuery

##Objectives
  - Understand what AJAX is
  - Refresher on how to install and use jQuery
  - Learn how to make API calls using jQuery and AJAX

##So what is AJAX?

AJAX stands for _**A**synchronous **J**avascript **a**nd **X**ML_.

When we say that we're going to use __AJAX__, we're saying that we're going to use a combination of techniques and web technologies to access data for use in the front-end of a web application.

So let's look at the component parts:
  - So what is __asynchronous execution?__
  It's easier to understand what asynchronous execution is by also looking at how it differs from synchronous processing.
      + Synchronous execution means that when you execute a process or task, you first wait for that task to finish before moving on to the next process.
      + With asynchronous execution, we can move on to the next process before our first process is complete.
          * In Node.js, we used _callbacks_ to tell our code what steps to take once a process was complete. Most commonly, we saw this pattern when accessing other resources, like databases, files, or APIs.
  - The __Javascript__ part should be fairly self-explanatory.
  - So what's __XML__? XML is a plain-text format for the storage and transmission of data. It stands for eXtensible Markup Language and in fact, HTML is a subset of XML. 
    + Despite being part of the most commonly-used name for this technology, __XML__ is not required. More commonly, as we've seen, __JSON__ is used instead of XML. 
    + Most developers prefer using JSON for data transmission because its far more compact than XML (and because it very closely matches the way objects are formatted in Javascript.)
        * Technically, this variant is called __AJAJ__ _(asynchronous Javascript and JSON)_

##Setup

To start using jQuery, visit http://code.jquery.com and copy the link to the 1.11.x version (the most compatible version to date). We'll then include that link in our web page as shown below:

```html
<!doctype html>
<html>
<head>
    <title></title>
</head>
<body>

<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
</body>
</html>
```

Note that we can also include the `<script>` tag in the head of our HTML. However, it's often become common practice to include jQuery at the end of the body because this allows the entire page to load before downloading and processing jQuery, which can improve load times.


##Using AJAX

In pure javascript, (without jQuery), we'd use something called the `XMLHttpRequest object` to make AJAX calls to APIs and other servers.

In jQuery, we use the following methods:
```js
$.ajax()
$.get()
$.post()
$.getJSON()
```

Each of these methods performs the same basic action (they each make a HTTP request), but each one has slightly different syntax and a slightly different purpose. As always, when coding, you'll probably want to [take a look at the documentation](http://api.jquery.com/category/ajax/) for AJAX using jQuery.

So, let's talk about each of these methods a bit more.

For each method we discuss below, we'll be using the [OmDBAPI](http://www.omdbapi.com) as an example.

###$.ajax()

This function underlies all AJAX requests in jQuery. And while you can certainly use it to make your requests, it's often unnecessary to call this function since there are several higher-level alternatives like `$.get()`, `$.post()`, and `$.getJSON()` which are easier to use. If, however, you need more precise control of your request, $.ajax() allows you to fine tune your requests in a very precise way.

In jQuery versions 1.5 and later, you can pass a single settings object to the `$.ajax()` method, with string/value pairs to configure the request. For more complete details, see the documentation on the [ajax settings object](http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings).

###$.get()

This function is essentially a shorthand for the following:

```js
$.ajax({
  url: url, // The URL of the request
  success: success, // Callback function to tell jQuery what to do if the request is successful
  dataType: dataType, // The dataType to expect (i.e., "json", "xml", etc)
  type: "GET" // Sets the request type to GET (could also be 'POST', 'PUT', etc)
});
```

Here's an example of how we might use this function to search the OmDbAPI for all movies containing the word "Stargate":

```js
// Set the URL to use for the search
var url = "http://www.omdbapi.com/?s=Stargate";

// Make the request
$.get(url, function (data) {
    // In this case, 'data' contains the results of our search as a JSON string
    console.log(data);

    // In most cases, to actually use the search results, we'd want to say something like:
    var jsonData = JSON.parse(data);
    console.log(jsonData);
});
```

Note that while you can get away with only passing the `data` parameter to the callback function, it actually takes 3 arguments:
  - `data`: The data we're looking for with our request in whatever format the server uses (usually JSON)
  - `textStatus`: A string returned by jQuery to indicate whether the request was successful. When successful, this string will be 'success'.
  - `jqXHR`: This is the [_jQuery XMLHttpRequest object_](http://api.jquery.com/jQuery.ajax/#jqXHR) which is a superset of the standard XMLHttpRequest object. It includes information about the request itself, its state, and the resulting headers and body.
      + Note that `$.get()` and the other AJAX functions in jQuery also return the jqXHR object, so if you write `var res = $.get(...)` then `res` will be a reference to the jqXHR object.
      + You can try this in the Chrome REPL and then type `res` if you'd like to take a look at what's inside this object.

There's another way to setup your callbacks using method chaining. The chained methods below represent methods that are part of jQuery's `Deferred` object. These methods are called [__promises__](http://api.jquery.com/category/deferred-object/).

```js
// Set the URL to use for the search
var url = "http://www.omdbapi.com/?s=Stargate";

// Make your request
var taco = $.get(url)
// Tell jQuery what to do if the request succeeds
.done(function (data, textStatus, jqXHR) {
    console.log(data);
    alert("The request was a success");
})
// And what to do if the request fails
.fail(function (data, textStatus, jqXHR) {
    alert("The request failed!");
});
```

There's a few other ways you can use promises to define your callbacks, and each will be executed under different conditions.

The `.always()` promise will be run whether the request was a success or a failure, but the values passed to `data`, `textStatus`, and `jqXHR` will change depending upon the result.

```js
$.get(url)
.always(function (data, textStatus, jqXHR) {
    // Note how we test the value of textStatus to determine whether the request was successful
    if (textStatus === "success") {
        console.log(data);
        alert("The request was a success")
    } else {
        alert("The request failed!");
    };
});
```


The `.then()` promise will also run regardless of success or failure, but it takes two functions as parameters. The first function defines what to do in case of success, and the second defines what to do in case of failure:
```js
$.get(url)
.then(function(data, textStatus, jqXHR) {
    // The first function is used if the request succeeds
    console.log(data);
    alert("The request was a success")
}, function(data, textStatus, jqXHR) {
    // This second function is used if the request fails
    alert("The request failed!");
});
```





