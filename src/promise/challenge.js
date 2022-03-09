// importamos la funcion
const fetchData = require('./../utils/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API) //le pasamos nuestra api
  .then(data => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`); //estructura de mi api
  })
  .then(data => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name); //vamos a mostrar el nombre
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url) //del resultado, valor que nos esta regresando 
  })
  .then(data => { //con la información que tenemos 
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch(err => {
    console.error(err); 
  })