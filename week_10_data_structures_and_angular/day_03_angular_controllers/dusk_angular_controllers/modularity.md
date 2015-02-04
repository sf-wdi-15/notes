# Angular Rails
## Intro to Angular Modules


| Objectives |
| :---  |
| Using multiple controllers in an application to separate different aspects of the application. (Think how rails doesn't shove everything in the `ApplicationController` class.)|
| Managing dependencies needed to successfully separate components into modular and versatile chunks.  |
| Students should be able to handle scoping with nested controllers.  |

## Outline

* Multiple Controllers
  * Separate Controllers
  * Nesting Controllers
    * inheriting
    * overiding inherited attributes
* More Modular Angular
  * `angular.module`
    * An `App` module
    * Dependency injection
* Modular Controllers
  * A module for controllers
  * When to create a new module?
    * Feature Separation


## Topical Background

###Multiple Controllers
  * Separate Controllers
  * Nesting Controllers
    * inheriting
    * overiding inherited attributes

###What is a module?
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.

###Why do we need modules?
- Most applications have a main method that instantiates and wires together the different parts of the application.

- Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped. There are several advantages to this approach:

  1) The declarative process is easier to understand.
  2) You can package code as reusable modules.
  3) The modules can be loaded in any order (or even in parallel) because modules delay execution.
  4) Unit tests only have to load relevant modules, which keeps them fast.
  5) End-to-end tests can use modules to override configuration.

####When Should I Use A Module?
- There should be a module for each feature aka feature separation
- There should be a module for each reusable component (especially directives and filters)
- When an application level module which depends on the above modules and contains any initialization code

* More Modular Angular
  * `angular.module` - The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.
    * An `App` module

####Dependency Injection
Dependency injection is a software design pattern which is often used in infrastructure components and which ensures that one particular component does not directly create references to other components. Instead of direct instantiation, every component will receive references to required other components like helpers, services, etc. as parameters to their constructor.
   
##Angular Services
- Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.

Angular Services are:

  - Lazily instantiated -- only instantiates when an application component depends on it
  - Singletons - each component dependent on a service gets a reference to a single instance

###How Do You Use Angular Services?
  - Need to add it as a dependency as a component (controller, service, filter, or directive) that depends on the service.
 

## Topical Exercises


## Exercise Outline
* Multiple Controllers
  * Separate Controllers
    Recall our `books` example with one controller. What happens if we have two unrelated collections of items on the same page? Do we want all that code in one controller? No, we should separate concerns.
    * Example 1:
    Let's take our `books` example from yesterday and examine some of the functionality in it. Then we'll incorporate this into another controller to deal with managing `magazines`.
    * Exercise 1: 
    **Brainstorm** things you normally find in a library, and create a controller for them using the process demonstrated in the example. 
    
  * Nesting Controllers
    * **Independent Research**: Research Angular **controllers** using Angular's *guide* to help us prepare for this section (try not to get too caught up in the code examples just yet).
      * **Questions to Answer**
        * What do the Angular docs tell us about **Understanding Controllers**?
        * What do the Angular docs tell us about **Using Controllers Correctly**?
        * What do the Angular docs tell us about **Scope Inheritance**?
    
    * **Pair Exercise**: pair with someone and **brainstorm** examples of when you might want to use nested controllers. (Hint: think about commonly associated models or when you might have had to used **nested resources**).
    * inheriting
      * Example 2:
      
      `example_2.html`
      

      
        <!DOCTYPE html>
        <html>
        <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>
          <meta charset="utf-8">
          <title>Nested Controllers</title>
        </head>
        <body ng-app>
          <div ng-controller="PostsCtrl">
            <form ng-submit="addPost()">
              <input type="text" ng-model="newPost.title"><br>
              <input type="text" ng-model="newPost.author"><br>
              <textarea ng-model="newPost.content"></textarea><br>
              <button>Save Post</button>
            </form>
            
            <div ng-repeat="post in posts">
              <article>
                <header>
                  <h1>{{post.title}}</h1>
                </header>
                <p>
                  
                </p>
                <section ng-controller="CommentsCtrl">
                <!-- CODE HERE-->
                </section>
              </article>
            </div>
          </div>
        </body>
        </html>

      `example_2.js`
      
        var PostsCtrl = function($scope){
          $scope.posts = [];
          
          $scope.addPost = function(){
            $scope.posts.push($scope.newPost);
            $scope.newPost = {};
          };
        };

    
* More Modular Angular
  * `angular.module`
    * An `App` module
      * We can refactor our `Books` Angular controller code to be more modular. Let's take the following example to do that refactor.
       
       `example_3.html`
       
       ```
      <body ng-app>
        <div ng-controller="BooksCtrl">
          {{ book }}
        </div>
      </body>
       ```
       
       `example_3.js`
       
       ```
       function BooksCtrl = function($scope){
        $scope.book ="Alice's Adventures In Wonderland"
       }
       
       ```
    * Dependency injection
      
      ```
      var BookApp = angular.module("BookApp", []);
      
       _________________
      |An Angular Module|
      |_________________|   __________________________________
       |            |A Speacialized Angular Component|
       |     ______________ |________________________________|
       |     |
      \|/   \|/
      BookApp.controller("BooksController", ["$scope", function($scope){
                  /|\           /|\
                   |             |
                 _______________    ____________
                | The Name of   |   | The first|
                | the Controller|   | depenency|
                |_______________|   |__________|
            
        
      }])
    
      ```
* Modular Controllers
  * A module for controllers
  * When to create a new module?
    * Feature Separation