const express = require('express');
const router = express.Router();
const Info = require('./APIs/ServerInfo')


router.get("/", (req , res) =>{

    res.send('Pagina Inicial')

})

router.get("/sobre", (req , res) =>{

    res.send('Pagina Sobre')

})

router.get("/contato", (req , res) =>{

    res.send('Pagina Contato')

})



router.get("/SInfo", (req , res) =>{

    res.json(Info)

})



router.get("/*", (req , res) =>{

    res.send('Pagina Invalida')

})


module.exports = router