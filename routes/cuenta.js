const express = require('express')
const query = require('../services/queryCuenta')
const router = express.Router()


router.get('/Cuenta', async function(req, res){
    try{
        res.send(query.testCuenta())
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})


module.exports = router