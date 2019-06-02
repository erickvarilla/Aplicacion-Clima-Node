// con esta propiedad options puedo agregar un comando sin necesidad de coloccarlo
// osea colocar el alias y lo q necesito 
const argv = require('yargs').options({
        dirreccion: {
            alias: 'd',
            desc: 'Dirreccion de la ciudad'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}