const User = require('../models/user')

async function testUser() {
    try {
        await User.sync({ alter: true })
        console.log("Modificación de la tabla usuario")
    } catch (err) {
        console.error(`error: ${err.message}`)
    }
}

async function getAll(){
    const usuarios = await User.findAll();
    return usuarios
}

module.exports ={
    getAll
}