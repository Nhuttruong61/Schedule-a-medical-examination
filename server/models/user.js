"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Doctor, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasMany(models.Blog, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "DOCTOR"],
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["MALE", "FEMALE"],
      },
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      avatar: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("avatar");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(avatar) {
          return this.saveDataValue("avatar", JSON.stringify(avatar));
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
