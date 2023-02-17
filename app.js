const express = require('express')
const path = require('path')
const app = express()


const userRoutes = require('./routes/user')


app.set('port', 3000)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('./public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))








app.use(userRoutes)


app.listen(app.get('port'), () => {
    console.log(`Puerto excucha en:  ${app.get('port')}`)
})