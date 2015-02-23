module.exports = function (grunt) {

  var makeFile = require('../helpers/make_file.js')(grunt);

  var makeApp = function (normAppName) {
    return grunt.template.process(
      '(function () {\n' +
      '  \'use strict\';\n\n' +
      '  var app = angular.module(\'<%= app %>\', [\n'+
      '   \'<%= app %>.services\',\n' +
      '   \'<%= app %>.controllers\',\n' +
      '   \'<%= app %>.directives\'\n' +
      '  ]);\n\n' +
      '  module.exports = {\n' +
      '    main: app\n' +
      '  };\n' +
      '})();',
    { data: {app: normAppName} }
    );

  };

  grunt.registerTask('publicFolders', 'create project public folders', function () {
    var root = grunt.option('root') || 'app/public';
    var jsFldr = root + '/javascripts';
    var config = {
                    root: root,
                    jsFldr: jsFldr
                 };
    grunt.file.write('./config.json', JSON.stringify(config));
    grunt.file.mkdir(root + '/components');
    grunt.file.mkdir(root + '/stylesheets');
    grunt.file.mkdir(root + '/javascripts');
    grunt.file.mkdir(root + '/images');
    grunt.file.mkdir(root + '/views');
    grunt.file.mkdir(root + '/views/shared');
    grunt.file.mkdir(root + '/views/directives');
    grunt.file.mkdir(root + '/views/main');
  });





  grunt.registerTask('appFolders', 'create angular folders', function () {
    var normalize = require('../helpers/normalize.js');
    var appName = grunt.option("name")|| 'notes_app';
    var normAppName = normalize(appName);
    var config = grunt.file.readJSON('./config.json');
    var base = config.jsFldr + '/' + appName;

    config.appName = appName;
    config.normAppName = normAppName;
    config.base = base;

    grunt.file.write('./config.json', JSON.stringify(config));
    grunt.file.write(base + '/app.js', makeApp(normAppName));
    grunt.file.write(base + '/router.js', makeFile({app: normAppName, parent: './app.js', type: 'config'}));

    ["services", "directives", "controllers"].forEach(function (fldr) {
      grunt.file.mkdir(base + '/' + fldr);
      var filePath = base + '/' + fldr + '/index.js';
      grunt.file.write(filePath, makeFile({app: normAppName, type: fldr, index: true}));
    });
    grunt.file.write(base + '/controllers/main.js', makeFile({app: normAppName, parent: './index.js', name: 'main', type: 'controller'}));

  });

  grunt.registerTask('setupApp', 'create app and angular folders', ['publicFolders', 'appFolders']);
}