const os = require('os')

const TRam = os.totalmem() / 1024 / 1024;
const FRam = os.freemem() / 1024 / 1024;

const usage = (FRam / TRam) * 100;

const ServerInfo = {

    Memoria_Total: `${parseInt(TRam)} MB`,
    Memoria_Disponivel:  `${parseInt(FRam)} MB`,
    Usando: `${usage.toFixed(2)} %`,
    OS: os.platform(),
    Arquitetura: os.arch() 

}

module.exports = ServerInfo