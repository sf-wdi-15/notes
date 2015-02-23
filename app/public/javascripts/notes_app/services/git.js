(function () {
  'use strict';
  this.factory('git', ['$http', function ($http, $q) {

    function Git () {
      this.owner = 'delmerGA';
      this.repo = 'notes';
      this.host = 'https://api.github.com/';
    }

    Git.prototype.getBase = function () {
      return this.host + this.repo + '/' + this.owner;
    };

    Git.prototype.getContents = function (url, parent) {
      if (url === undefined) {
        var result = $q.deffer();
        $http.get(this.getBase() + '/contents').
          success(function (data) {
            data.forEach(function (content) {
              content
            });
          });
        });
      } else {

      }
      return deffered.promise;
    };

    Git.prototype.
  }]);
}).call(require('./index.js'));