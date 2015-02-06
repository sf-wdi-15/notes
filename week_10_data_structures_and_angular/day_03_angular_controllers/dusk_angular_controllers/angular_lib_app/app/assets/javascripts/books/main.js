// Let's define our Angular App Module
var BookApp = angular.module("BookApp", [
  "BookCtrls",
  "BookDirs"
]);

// configured the http module to include
// the X-CSRF-Token
BookApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

