"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appoitments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      patientId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Patients",
          key: "id",
        },
      },
      doctorId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Doctors",
          key: "id",
        },
      },
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Services",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM(["Processing", "Accept", "Refuse"]),
        defaultValue: "Processing",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appoitments");
  },
};
