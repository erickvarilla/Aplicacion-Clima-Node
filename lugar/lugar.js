// llamado del axios para consumir el api de city geolocalizacion 
const axios = require('axios');

// funcion que me retornara la longitud y latitud
const getLugar = async(dirreccion) => {
    //Utilizamos encodeURI para formatiar el caracter que paso por la consola de la terminal
    // en caracteles especiales en la url 
    const encodeUlI = encodeURI(dirreccion);
    // creamos una instancion para configurar el llamado de la url con sus headers que son 
    // las cabeceras de la peticion 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlI}`,
        headers: { 'X-RapidAPI-Key': '3e53073591mshbd726b5947af8cfp18466fjsn9f1bf2ef5f76' }
    });

    // hacemos la peticion a la url por medio de get
    // como axios trabaja con promesas simplifico el codigo al aplicar el asyns y el await
    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new error(`No se encontro la latitud y longitud de la ciudad de ${dirreccion}`)
    }
    // como la informacion esta en la posicion 0 capturo el data para no hacer lo mismo en todas las lineas de codigo
    const data = respuesta.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const long = data.lon;
    // gracias al emascript 6 al momento de retornar me va a crear esto dir = dir;
    return {
        dir,
        lat,
        long,
        data
    }

}

module.exports = {
    getLugar
}