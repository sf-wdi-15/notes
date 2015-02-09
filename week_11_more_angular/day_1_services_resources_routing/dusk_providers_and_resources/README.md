# Advanced Angular
## Angular Providers and Resources


| Objectives |
| :---- |
| describe the different stages of an Angular application cycle. |
| describe the uses of different types of Angular services |
| utilize an angular serivces and resources to  refactor our application |


When we created our applications so far we've really only seen a few different components.

* Module
  * Controllers
  * Directives


We want to expand the picture of this application to include a list of other angular services.

* `Providers`
  * `Value`
  * `Constant`
  * `Factory`
    * `Service`


## Stages of An Application

[Angular DI](https://docs.angularjs.org/guide/di)

### `module#value` 

This service is a way to create a value that can be injected into many different modules.

This value **is available after** the config stage of the application.

### `module#value` 

This service is a way to create a value that can be injected into many different modules.

This value **is available during** the config stage of the application.


### `module#factory`

This service is a way to create custom objects or data types that can be used throughout the application.


### `module#service`

If we are aware we are only going to need one instance of the object we can use the `module#service` which return one instance of the object and share that accross modules.

Think *special factory*.

### `module#providers`

This gives a way to directly interact with our special objects during config.



## Examples


A constant for the authenticity token

```javascript
var BookApp =  angular("BookApp",[])
  .constant("AuthenticityToken", $('meta[name=csrf-token]').attr('content'));

```

and this can be used with our `$httpProvider` setup.

```javascript

BookApp.config(["$httpProvider", "AuthenticityToken", function($httpProvider, AuthenticityToken){
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = AuthenticityToken
  }]);

```

and **Factory** for books.


```javascript

BookApp.factory("Books", [function () {
  return [];
}]);

```

We can also have it return a special constructor

```javascript

BookApp.factory("Books", [function() {
  function Books() {
    this.all = [];
    this.add = function (item) {
      this.all.push(item);
    };
    this.remove = function (book) {
      var index = this.all.indexOf(book);
      this.all.splice(index, 1);
    }
  }
  return Books;
}]);
```

