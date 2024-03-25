"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Doctor, {
        foreignKey: "user",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        scope: {
          ownerType: "doctor",
        },
      });
      User.hasMany(models.Blog, {
        foreignKey: "user",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        scope: {
          ownerType: "blog",
        },
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
