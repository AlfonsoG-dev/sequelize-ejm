const express = require('express')
const query = require('../services/querysUser')
const router = express.Router()


router.get('/', async function(req, res) {
    try{
        var datos = await query.getAll()
        res.render('usuarios', {'datos': datos})
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

router.post('/crearUsuario', async function(req, res){
    try{
        res.json(await query.createUser(req.body))
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

router.put('/modificarUsuario', async function(req, res){
    try{
        res.json(await query.updateUser(req.body))
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

router.delete('/eliminarUsuario', async function(req, res){
    try{
        res.json(await query.deleteUser(req.body))
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

module.exports = router