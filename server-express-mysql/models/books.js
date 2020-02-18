"use strict";
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define(
      "books",
      {
        BookId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        BookName: DataTypes.STRING,
        Author: DataTypes.STRING,
        Summary: { type: DataTypes.STRING, unique: true },
        Page_Length: DataTypes.INTEGER,
        Genre: DataTypes.STRING,
        Year: DataTypes.INTEGER,
      },
      {}
  );
  // users.associate = function(models) {

  // };
  return books;
};