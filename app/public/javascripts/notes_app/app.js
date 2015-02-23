(function () {
  'use strict';

  var app = angular.module('notesApp', [
   'notesApp.services',
   'notesApp.controllers',
   'notesApp.directives'
  ]);

  module.exports = {
    main: app
  };
})();