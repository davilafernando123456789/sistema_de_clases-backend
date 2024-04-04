// models/horario.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const Horario = sequelize.define('Horario', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Profesores_id: {
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

module.exports = Horario;
