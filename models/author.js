'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: 'authorId',
        as: 'books',
        onDelete: 'CASCADE'
      });
    }
  }

  Author.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Author'
    }
  );

  return Author;
};