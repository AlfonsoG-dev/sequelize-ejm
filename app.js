//Inicializa dependencias 
const express = require("express")
const path = require("path")
//instalcia de server express
const app = express()

//rutas
const userRoutes = require("./src/routes/user")
const cuentaRoutes = require("./src/routes/cuenta")

//configuración
app.set("port", 3000)
//engine server side
app.set("view engine", "ejs")
//path de las paginas server side
app.set("views", path.join(__dirname, "./src/views"))
//archivos publicos
app.use(express.static("./public"))
//rederizade de archivos json
app.use(express.json())
//uncode enable
app.use(express.urlencoded({ extended: true }))

//inicializar las rutas
app.use(userRoutes)
app.use(cuentaRoutes)
//test del server
app.get('/', (req, res) => {
    res.send("Server inicializado")
})
app.listen(app.get("port"), () => {
    console.log(`Puerto excucha en:  ${app.get("port")}`)
})