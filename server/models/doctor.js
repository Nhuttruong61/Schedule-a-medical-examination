"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Doctor.belongsTo(models.Department, {
        foreignKey: "departmentId",
      });
      Doctor.hasMany(models.Appoitment, {
        foreignKey: "doctorId",
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
      modelName: "Doctor",
    }
  );
  return Doctor;
};
