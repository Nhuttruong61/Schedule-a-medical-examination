const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: "+07:00",
  }
);

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection data success.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = dbConnect;
