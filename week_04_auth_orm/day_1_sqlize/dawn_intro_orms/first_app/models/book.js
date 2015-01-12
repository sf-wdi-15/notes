"use strict";

module.exports = function(sequelize, DataTypes) {
  var book = sequelize.define("book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return book;
};
