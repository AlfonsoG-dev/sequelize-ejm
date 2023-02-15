const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/db')

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING
    },
    Apellido: {
        type: DataTypes.STRING
    },
    Edad: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize, modelName: 'User'
});

module.exports = User