const express = require('express')
const query = require('../services/querys')
const router = express.Router()


router.get('/', async function(req, res) {
    try{
        const datos = res.json(await query.getAll())
        res.render('usuarios', {'datos': datos})
    }catch (err){
        console.error(`error: ${err.message}`)
    }
})

module.exports = router