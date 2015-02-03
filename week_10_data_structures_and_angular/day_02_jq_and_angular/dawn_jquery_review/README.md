#Review of jQuery & a lesson in pair programming
Today we're going to do a review of jQuery, and since many of you have expressed an interest in doing more pair programming we're going to be pairing today. So pick a partner and only have one laptop open per pair.

##Pair-n-share
* What is jQuery?
* What are it's use cases?
* How do we use it?

##A quick review of Templating on the front end using underscore.js
First and foremost check out this cool [resource](https://github.com/sf-wdi-15/notes/tree/master/week_08_optimizations/day_3_intro_spa/dusk)

Make sure that you grab a copy of the final code, we're going to need it for the example.

##Let's quickly build a basic rails backend
```bash
rails new todo_example
```
Now that we're got our app change into that directory and run
```bash
rails g scaffold Todo content:string complete:boolean
```
This generated everything we need for basic CRUD for todos. So lets follow it up with a
```bash
rake db:migrate
```
and a
```bash
rails s
```
to get things started.

now check out `http://localhost:3000/todos`. Pretty awesome right?

Before we get going with the review of jQuery, make a couple todos so we have some content to play with.

##Queue in jQuery
The objective for today is to use jQuery to make AJAX requests for todo's and then append those todo's onto the page.

So what needs to happen? How do we break this problem into chunks?

