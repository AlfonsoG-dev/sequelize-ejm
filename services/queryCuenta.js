const myModel = require('../models/myModel')

async function testCuenta(){
    try{
        await myModel.Cuenta.sync({ alter:true })
        console.log('inicialización tabla cuenta')
    }catch (err){
        console.error(`error: ${err.message}`)
    }
}
async function createCuenta(nData){
    const nCuenta = await myModel.Cuenta.create({
        usuario: nData.idUsuario,
        email: nData.email,
        password: nData.password
    })
    return nCuenta
}

module.exports = {
    testCuenta,
    createCuenta
}