"use strict";

module.exports = function(sequelize, DataTypes) {
  var book = sequelize.define("book", {
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.author);
      }
    }
  });

  return book;
};
