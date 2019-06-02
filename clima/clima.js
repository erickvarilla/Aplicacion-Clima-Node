// archivo que me dara la temperatura actual de la ciudad que yo le pase por parametro 

// hay que hacer una peticion a una api para eso utilizamos axios

const axios = require('axios');

const climaActual = async(lat, long) => {
    // como es una peticion simple 
    // no hay necesidad de agregar las cabezeras(headers)
    // appid es mi llave que me proporciona openweathermap
    // units es la unidad metrica en el cual voy a recivir los datos 
    // metric es grado celcios por defectos los datos biene en faranjai
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=223a575f5d5b11bd878a12d0dfce5669&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    climaActual
}