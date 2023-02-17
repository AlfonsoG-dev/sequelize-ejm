const myModel = require('../models/myModel')


async function testUser() {
    try {
        await myModel.User.sync({ alter: true })
        console.log("Inicialización tabla user")
    } catch (err) {
        console.error(`error: ${err.message}`)
    }
}

async function testCuenta(){
    try{
        await myModel.Cuenta.sync({ alter:true })
        console.log(`Inicialización de la tabla cuenta`)
    }catch (err){
        console.error(`error: ${err.message}`)
    }
}

async function getAll(){
    const usuarios = await myModel.User.findAll();
    return usuarios
}

async function searchName(nNombre){
    const buscado = await myModel.User.findAll({
        where: {
            Nombre: nNombre
        }
    })
    return buscado
}

async function createUser(nData){
    const usuario = await myModel.User.create({
        Nombre: nData.nombre,
        Apellido: nData.apellido,
        Edad: nData.edad
    })
    return true
}

async function updateUser(nData){
    const modificado = await myModel.User.update({
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
    const eliminado = await myModel.User.destroy({
        where: {
            id: nData.id
        }
    })
    return true
}
// todo: crear querys de user y querys de cuenta por separado luego unir con otro archivo para guardar cuentas segun el usuario
testUser()
testCuenta()

module.exports ={
    getAll,
    createUser,
    updateUser,
    deleteUser
}