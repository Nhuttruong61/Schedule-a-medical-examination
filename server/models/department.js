"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.hasMany(models.Doctor, {
        foreignKey: "departmentId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Department.init(
    {
      Title: DataTypes.STRING,
      img: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("img");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(img) {
          return this.setDataValue("img", JSON.stringify(img));
        },
      },
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
