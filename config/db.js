const { Sequelize } = require("sequelize");
require("dotenv").config();

// Initialize Sequelize with individual DB credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  },
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully...");
  } catch (error) {
    console.error(" Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
