const {Sequelize} = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.pool)

async function testConection(){
    try{
        await sequelize.authenticate()
        console.log("conexion exitosa")
    }catch (err){
        console.error(`error: ${err}`)
    }
}

testConection()
module.exports = sequelize