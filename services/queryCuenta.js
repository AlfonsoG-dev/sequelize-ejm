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
        cuenta: nData.cuenta,
        email: nData.email,
        password: nData.password,
        UserId: nData.UserID
    })
    return nCuenta
}
// todo: no funciona el ingreso de la foreign key
module.exports = {
    testCuenta,
    createCuenta
}