const express = require('express')
const app = express()

app.set('port', 3000)

app.get('/', (req, res) => {
    res.send(`aplicación con sequelize en puerto ${app.get('port')}`)
})

app.listen(app.get('port'), function(){
    console.log(app.get('port'))
})