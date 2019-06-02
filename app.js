// es el llamdo del yargs donde tengo los comandos y donde introdusco los valores por consola
const argv = require('./configuracion/yargs').argv;
// llamado de la funcion lugar donde realiza la peticion a la url con sus cabezeras(headers)
const lugar = require('./lugar/lugar');
//llamado del archivo que retorna el clima actual
const climaAct = require('./clima/clima');
// este archivo como implemtamos el async retorna una promesa por lo tanto hay que tratarla
// como una promesa el valor que retorna 

const getInfo = async(dirreccion) => {
        try {
            const coordenadas = await lugar.getLugar(dirreccion);
            const Temp = await climaAct.climaActual(coordenadas.lat, coordenadas.long);
            return `El clima de la ciudad de ${dirreccion}, es de: ${Temp}`;
        } catch (error) {
            return error;
        }
    }
    // lugar.getLugar(argv.dirreccion).then(resultado => {
    //     // el archivo clima retorna una promesa por ende hay que tratarla 
    //     console.log(`El clima de la ciudad: ${resultado.dir} `);
    //     climaAct.climaActual(resultado.lat, resultado.long)
    //         .then(respuestaClima => {
    //             console.log('Es: ', respuestaClima, '°C');
    //         })
    //         .catch(error => {
    //             console.log('Hay ocurrido un Error!!! ', error);
    //         });
    // }).catch(error => {
    //     console.log('A ocurrido un error!!! ', error);
    // });
getInfo(argv.dirreccion)
    .then(console.log)
    .catch(console.log);