const fetchData = require("../utils/fetchData"); //encargar de hacer la petición 
const API = 'https://rickandmortyapi.com/api/character/' //mayuscula, se sabe que nunca va a cambiar su valor
//const api, traemos todos los personajes 

//creamos función asincrona
const anotherFunction = async (url_api) => { //arrow function, le pasamos convención async
    try { //data general de la api
        //creamos 3 constantes que necesitamos a los elementos que vamos a traer 
        const data = await fetchData(url_api) //establecer valor
        const character = await fetchData(`${API} ${data.results[0].id}`); //construir el valor
        const origin = await fetchData(character.origin.url); //tercer petición 
        //estructura que necesitamos
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension); 
    }catch (error){
        console.error(error); 
    }

}

console.log("Before");  
anotherFunction(API); 
console.log("after"); 

//recordar crear en el package json el script para correr x consola. npm run nombre:descript, en la carpeta del proyecto se abre la consola