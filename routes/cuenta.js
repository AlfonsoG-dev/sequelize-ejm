const express = require('express')
const query = require('../services/queryCuenta')
const router = express.Router()


router.get('/Cuenta', async function(req, res){
    try{
        res.json(await query.getRelation())
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

router.post('/crearCuenta', async function(req, res){
    try{
        res.json(await query.createCuenta(req.body))
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

module.exports = router