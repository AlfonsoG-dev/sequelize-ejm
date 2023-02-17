const { DataTypes, Model } = require('sequelize')
const sequelize = require('../services/db')

class Cuenta extends Model {}

Cuenta.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{
    sequelize, modelName: 'Cuenta'
})

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

User.hasMany(Cuenta)

module.exports = {
    User,
    Cuenta
}