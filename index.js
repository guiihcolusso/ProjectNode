const express = require('express')
const configs = require('./src/config.json')
const app = express();


app.listen(configs.port, () => {

    console.log(`O Servidor do ${configs.ProjectName} Foi Executado Corretamente.`)

})
