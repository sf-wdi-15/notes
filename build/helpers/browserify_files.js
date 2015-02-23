module.exports = function (grunt) {
  return function(target, deps) {
    if (grunt.file.exists('./config.json')) {
      var config = grunt.file.readJSON('./config.json');
      var bowerConfig = grunt.file.readJSON('./.bowerrc');
      var files = {};
      var targetPath = (config.jsFldr + '/' + target);
      files[targetPath] = deps.map(function (dep) {
        var prePath = (dep.component ? bowerConfig.directory : config.jsFldr);
        if (dep.path.match(/^\!/)) {
          return dep.path.replace(/^\!/, '!' + prePath + '/');
        } else {
          return prePath + '/' + dep.path;
        }
      });
      return files;
    }
  };
};