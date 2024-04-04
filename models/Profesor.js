// models/Profesores.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const Profesores = sequelize.define('Profesores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_nac: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Antecedentes_educativos_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Direccion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Roles_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Antecedentes_penales_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Puedes ajustar el valor predeterminado según tus necesidades
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true, // Esta opción activa la gestión automática de timestamps
});

module.exports = Profesores;
