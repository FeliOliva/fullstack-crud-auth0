const { DataTypes } = require("sequelize");
const sequelize = require("../db");

sequelize
  .authenticate()
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

const Client = sequelize.define(
  "Client",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    create_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    cuil: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: "clients", // Cambia esto al nombre real de tu tabla
    timestamps: false, // Desactiva timestamps automáticos
  }
);

module.exports = Client;
