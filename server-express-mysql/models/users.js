"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
      "users",
      {
        UserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        Username: { type: DataTypes.STRING, unique: true },
        Password: DataTypes.STRING,
        Email: { type: DataTypes.STRING, unique: true },
      },
      {}
  );
  // users.associate = function(models) {

  // };
  return users;
};