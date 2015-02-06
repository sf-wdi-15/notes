// Create a module to hold all of the Book Controllers
var BookCtrls = angular.module("BookCtrls", [
]);

BookCtrls.controller("BooksCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.greeting = "Hello World";

  $scope.mean = "GO AWAY";
  $scope.nice = "WELCOME";

  $http.get("/books.json")
    .success(function (data) {
      console.log(data);
      $scope.books = data;
    });

  $scope.books = [];
  // handle form submit
  $scope.addBook = function () {
    console.log($scope.newBook);

    $http.post("/books.json", {book: $scope.newBook})
      .success(function (data) {
        console.log(data);
        $scope.books.push(data);
        $scope.newBook = {};
      });
  };
}])