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
    console.log(`id generado automaticamente para el usuario: ${nData.nombre} con id: ${usuario.id}`)
    let mensaje = "error crear usuaro"
    if(searchName(nData.nombre)){
        mensaje = `usuario creado`
    }
    return {mensaje}
}

module.exports ={
    testUser,
    getAll,
    createUser
}