const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
const userRoutes = require('./routes/user')
app.set('views', path.join(__dirname, 'views'))
app.use('view engine', 'ejs')
app.set('port', 3000)

app.use(userRoutes)
app.get('/', (req, res) => {
    res.send(`aplicación con sequelize en puerto ${app.get('port')}`)
})

app.listen(app.get('port'), function(){
    console.log(app.get('port'))
})