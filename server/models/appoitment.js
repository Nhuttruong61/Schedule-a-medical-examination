"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appoitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appoitment.belongsTo(models.Doctors, {
        foreignKey: "doctorId",
        as: "doctorInfo",
      });
      Appoitment.belongsTo(models.Patients, {
        foreignKey: "PatientId",
        as: "PatientInfo",
      });
    }
  }
  Appoitment.init(
    {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      patientId: DataTypes.UUID,
      doctorId: DataTypes.UUID,
      status: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: "Appoitment",
    }
  );
  return Appoitment;
};
