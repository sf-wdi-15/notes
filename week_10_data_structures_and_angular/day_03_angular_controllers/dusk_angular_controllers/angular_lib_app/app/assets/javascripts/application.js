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
//= require_tree .



// // Let's define our Angular App Module
// var BookApp = angular.module("BookApp", [
//   "BookCtrls"
// ]);

// // configured the http module to include
// // the X-CSRF-Token
// BookApp.config(["$httpProvider", function($httpProvider){
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
// }]);

// // Create a module to hold all of the Book Controllers
// var BookCtrls = angular.module("BookCtrls", []);

// BookCtrls.controller("BooksCtrl", ["$scope", "$http", function ($scope, $http) {
//   $scope.greeting = "Hello World";


//   $http.get("/books.json")
//     .success(function (data) {
//       console.log(data);
//       $scope.books = data;
//     });

//   $scope.books = [];
//   // handle form submit
//   $scope.addBook = function () {
//     console.log($scope.newBook);

//     $http.post("/books.json", {book: $scope.newBook})
//       .success(function (data) {
//         console.log(data);
//         $scope.books.push(data);
//         $scope.newBook = {};
//       });
//   };
// }])



