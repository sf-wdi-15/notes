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

###$.ajax()




