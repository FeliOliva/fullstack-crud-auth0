const { Sequelize } = require("sequelize");
require("dotenv").config(); // Para cargar las variables del archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Puede ser necesario si el certificado no está autorizado
      },
    },
  }
);

module.exports = sequelize;
