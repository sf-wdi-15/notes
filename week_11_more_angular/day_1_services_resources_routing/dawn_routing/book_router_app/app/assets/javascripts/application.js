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


/** BookCtrls */
var BookCtrls = angular.module("BookCtrls", []);


BookCtrls.controller("BooksCtrl", ["$scope", function ($scope){
  $scope.greeting = "Hello";
  $scope.mean = "(1+2+3)/3 = 2"
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
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });
  }]);




















