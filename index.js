const express = require('express')

const Rotas = require('./src/routes')
const configs = require('./src/config.json')

const app = express();
app.use(Rotas)

app.listen(configs.port, () => {

    console.clear()

    console.log(`O Servidor do ${configs.ProjectName} Foi Executado Corretamente.\n`)

    console.log('--------------------------------------------------')

})
