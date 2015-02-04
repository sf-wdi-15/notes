# Intro Angular 
## Angular Controllers and HTTP

| Objectives  |
| :---- |
| Setting up a JSON API   |
| Controller CRUD Actions |


## Outline

* Setup A Rails App - Review
  * A Book App
    * Generate a `BooksController`
    * Generate a `Book` Model 
    * Setup an `index`
      * responding to `html` and `json`
    * Setup Assets
      * A `book.js`
      * A `books_controller`
* Setup a `Book` SPA
  * `Get`  All Books
  * Handle `Create`
    * Sending the `X-CSRF-Token`
  * Exercise
  * Exercise
  * Setup HttpProvider
    * Brief mention about providers
* Large Exercise: Add A Library


## How to include $http it in your Angular application

In your controller, $http will be one of the dependencies so before you include it make sure you have a controller and app set up

1. Define your app and include it in your body tag

  - In your app.js: `TestApp = angular.module("TestApp", []`

  - And in your application.html.erb: `<body ng-app="TestApp">`

3. In your controller, specify include the $http dependency `TestApp.controller("TestCtrl", ["$scope", "$http", ($scope, $http) ->`

## Ways to write $http

1. Long form

```

  $http({method: 'GET', url: '/someUrl'}).
    success(function(data, status, headers, config) {
      // these are all possible parameters for the callback
    }).
    error(function(data, status, headers, config) {
       // these are all possible parameters for the callback
    });

```

2. Shortcut methods  (similar to the jQuery $.getJSON method)

```
$http.get('/someUrl').success(function(data){
  // do something with the data here
});
```

You can also use...

```
$http.post
$http.put
$http.delete
$http.jsonp
$http.patch
```

## HTTP Headers

The $http service will automatically add certain HTTP headers to all requests. These defaults can be fully configured by accessing the $httpProvider.defaults.headers configuration object, which currently contains this default configuration:

```
$httpProvider.defaults.headers.common (headers that are common for all requests):
Accept: application/json, text/plain, * / *
$httpProvider.defaults.headers.post: (header defaults for POST requests)
Content-Type: application/json
$httpProvider.defaults.headers.put (header defaults for PUT requests)
Content-Type: application/json
```

What might we need to add to our headers in our Rails app? How about the CSRF Token? We would do that using the config option (this is essential for our Rails app and we will not be able to make any calls to our API without this configuration)

```
BookApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}])
```

