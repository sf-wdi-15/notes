// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular-1.3.12/angular
//= require angular-1.3.12/angular-route
//= require_tree .


/** App Module */

var BookApp = angular.module("BookApp", [
  "BookCtrls",
  "BookRouter"
]);

BookApp.factory("Books", function (){
  return [ 
          "The Giver",
          "The Giver",
          "On The Road",
          "The Hobbit",
          "Siddhartha",
          "Fifty Shades of Grey",
          "Of Mice and Men",
          "Of Mules and Men"
         ];
});



BookApp.config(["$httpProvider", function($httpProvider){
      $httpProvider.defaults.headers.common['X-CSRF-Token'] =  $('meta[name=csrf-token]').attr('content');
  }]);

BookApp.factory("BetterBooks", ["$http", function ($http) {
  return {
    all: function () {
      return $http.get("/books.json");
    },
    show: function (id) {
      return $http.get("/books/" + id + ".json");
    },
    create: function (book) {
      return $http.post("/books.json", {book: book});
    }, 
    update: function (book) {
      return $http.patch("/books/" + book.id + ".json", {book: book});
    },
    destroy: function (book) {
      return $http.delete("/books/"+ book.id);
    }
  }
}]);

/** BookCtrls */
var BookCtrls = angular.module("BookCtrls", []);


BookCtrls.controller("BooksCtrl", ["$scope", "BetterBooks", function ($scope, BetterBooks){
  BetterBooks.all().
    success(function (data) {
      $scope.books = data;
    });

  $scope.addBook = function () {
    BetterBooks.create($scope.newBook)
      .success(function (book) {
        $scope.books.push(book);
        $scope.newBook = {};
      })
  };
}]);

BookCtrls.controller("CoolBooksCtrl", ["$scope", "Books", function ($scope, Books){
  $scope.books = Books;
}]);

BookCtrls.controller("BookCtrl", ["$scope", "Books", "$routeParams", "$location", 
  function ($scope, Books, $routeParams, $location) {
    console.log($routeParams);
    $scope.book = Books[$routeParams.index];
    $scope.delete = function () {
      Books.splice($routeParams.index,1);
      $location.path("/books");
    };
  }]);


/* Book Router */

var BookRouter = angular.module("BookRouter", [
  "ngRoute"
]);

BookRouter.config(["$routeProvider", "$locationProvider", 
  function ($routeProvider, $locationProvider) {
    
    alert("Runnig Router");
    $routeProvider.
      when("/", {
        // in the public/ folder we have a
        //   books subfolder
        templateUrl: "books/greeting.html",
        controller: "BooksCtrl"
      }).
      when("/mean", {
        templateUrl: "books/mean.html",
        controller: "BooksCtrl"
      })
      .when("/books", {
        templateUrl: "books/books.html",
        controller: "BooksCtrl"
      })
      .when("/cool_books", {
        templateUrl: "books/cool_books.html",
        controller: "CoolBooksCtrl"
      })
      .when("/books/:index", {
        templateUrl: "books/show.html",
        controller: "BookCtrl"
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });
  }]);




















