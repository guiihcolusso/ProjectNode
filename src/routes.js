const express = require('express');
const router = express.Router();

const Info = require('./ServerInfo')

router.get("/SInfo", (req , res) =>{

    res.json(Info)

})

module.exports = router