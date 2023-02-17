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

async function searchName(nNombre){
    const buscado = await User.findAll({
        where: {
            Nombre: nNombre
        }
    })
    return buscado
}

async function createUser(nData){
    const usuario = await User.create({
        Nombre: nData.nombre,
        Apellido: nData.apellido,
        Edad: nData.edad
    })
    return true
}

async function updateUser(nData){
    const modificado = await User.update({
        Nombre: nData.nombre,
        Apellido: nData.apellido, 
        Edad: nData.edad
    },{
        where: {
            id: nData.id
        }
    })
    return true
}

async function deleteUser(nData){
    const eliminado = await User.destroy({
        where: {
            id: nData.id
        }
    })
    return true
}

module.exports ={
    testUser,
    getAll,
    createUser,
    updateUser,
    deleteUser
}