# Advanced Angular
## Angular Router

| Objectives |
| :--- |
| describe the `ng-view` component and `$routeProvider` |
| apply the `ngRoute` service to swap out templates |
| implement a simple routing scheme using `public/` templates |


The basic idea of the Angular Router is going to be the following:

* User clicks a link that would normally go to another page. 
  * Angular `preventsDefualt()` action on the click of a link.
  * Angular swaps out the `ng-view` with the provided template.



## Simple Router Example

Here's an example preventing defualt on links.

[preventDefault](http://jsbin.com/muzesosawe/1/edit?html,js,output);

Also see [`pushState`](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).

## Angular Router

## Pre Setup

Start a book app 

```
rails new book_router_app -T -d postgresql;
cd 'book_router_app/';
rails g model book title:string description:text;
rake db:create;
rake db:migrate;
rails g controller books index;
```

and paste the following to download angular

```
if [ -d 'vendor/assets/javascripts' ]
  then
    curl 'https://code.angularjs.org/1.3.12/angular-1.3.12.zip' > 'angular.zip'  && unzip 'angular.zip';
    rm 'angular.zip';
    mv 'angular-1.3.12/' 'vendor/assets/javascripts/';
    echo "Angular Is Finished Downloading...";
else
  echo "Are you in a project directory?"
fi
```

## Naive Setup

First we'll need the very special directive, `ng-view`, which will help us render templates to page.

```html
<body ng-app="BookApp">
  <div ng-view>
  </div>
</body>
```

A very basic Angular Route

```javascript

/**************** app module ******************/

var BookApp = angular.module("BookApp", [
  "BookRouter",
  "BookCtrls"
]);

/**************** controller module ******************/

var BookCtrls = angular .module("BookCtrls", []);

BookCtrls.controller("BooksCtrl", ["$scope", function ($scope) {
  $scope.greeting = "Hello";
}]);

/**************** router module ******************/

var BookRouter = angular.module("BookRouter", [
  "ngRoute"
]);

BookRouter.config(["$routeProvider", "$locationProvider", function ($routeProvider) {

    console.log("Initialized Router")
    console.log("Setting Up")
    $routeProvider.
      when("/", {
                  template: "{{greeting}}, world!",
                  controller: "BooksCtrl"
                });

}]);

```


In our `application.js` we will need to include angular from our `vendor/assets/javascripts`.


```
//= require angular-1.3.12/angular
//= require angular-1.3.12/angular-route

```



In this model we have the following:

* The `BookRouter` has the `ngRoute` service injected into it. We configure the router to handle certain urls, i.e. root.
* Angular directly grabbing a template property and rendering the string as `ng-view`.
* Angular uses the `BooksCtrl` to render the template to say "Hello, world!"


### Modification One

We will hardly ever want to render a view that is a string. It will be preferable to load the view from our `public/` folder.


`public/books/greeting.html`

```html

{{greeting}}, world!

```

and what we will do is now use `templateUrl`


```javascript

/**************** router module ******************/

var BookRouter = angular.module("BookRouter", [
  "ngRoute"
]);

BookRouter.config(["$routeProvider", "$locationProvider", function ($routeProvider) {

    console.log("Initialized Router")
    console.log("Setting Up")
    $routeProvider.
      when("/", {
                  templateUrl: "books/greeting.html"
                  controller: "BooksCtrl"
                });

}]);

```

* Exercise
  * Add view for when the page goes to `"/mean"` that gets a template from `books/mean.html`. Make it mean.
  * Add a link, `<a href="/mean"></a>`, on the application.html.erb page somewhere.
  * Click and verify it says what you'd expect.

### Modification Two

If we reload the `"/mean"` route we see that it breaks. Let's fix this. Add a catchall route


```ruby

match "*", to: "books#index" 

```





