"use strict";

module.exports = function(sequelize, DataTypes) {
  var author = sequelize.define("author", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        this.hasMany(models.book);
      }
    }
  });

  return author;
};
