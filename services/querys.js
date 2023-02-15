const User = require('../models/user')

async function testUser() {
    try {
        await User.sync({ alter: true })
        console.log("Modificación de la tabla usuario")
    } catch (err) {
        console.error(`error: ${err.message}`)
    }
}

async function createUser() {
    try {
        const nuevo = User.build({
            Nombre: 'Alfonso',
            Apellido: 'Gomajoa',
            Edad: 23
        })
        console.log(nuevo instanceof User)
        console.log(nuevo.Nombre)
        await nuevo.save()
        console.log("guardando: ", nuevo)
    } catch (err) {
        console.error(`error: ${err.message}`)
    }
}

testUser()