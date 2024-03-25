"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsTo(models.User, {
        foreignKey: "doctor",
        as: "doctorInfo",
      });
      Doctor.belongsTo(models.Departments, {
        foreignKey: "department",
        as: "departmentInfo",
      });
    }
  }
  Doctor.init(
    {
      userId: DataTypes.UUID,
      description: DataTypes.TEXT,
      departmentId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Doctors",
    }
  );
  return Doctor;
};
