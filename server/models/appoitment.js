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
      Appoitment.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
      });
      Appoitment.belongsTo(models.Patient, {
        foreignKey: "patientId",
      });
      Appoitment.belongsTo(models.Service, {
        foreignKey: "serviceId",
      });
    }
  }
  Appoitment.init(
    {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      patientId: DataTypes.UUID,
      doctorId: DataTypes.UUID,
      serviceId: DataTypes.UUID,
      status: {
        type: DataTypes.ENUM,
        values: ["Processing", "Accept", "Refuse"],
      },
    },
    {
      sequelize,
      modelName: "Appoitment",
    }
  );
  return Appoitment;
};
