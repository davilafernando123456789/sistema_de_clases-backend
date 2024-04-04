// models/horario.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const Direccion = sequelize.define('Direccion', {
  calle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codigo_postal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  timestamps: true,
  tableName: 'Direccion', 
});

module.exports = Direccion;
