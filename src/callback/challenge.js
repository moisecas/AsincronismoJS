//llamado a api, se debe instalar dependencia xml http request desde la consola la cual es un objeto dentro de js, permite hacer peticiones
//se debe consultar en el navegador para consultar la api, con postman analizamos el llamado o los datos en formato json
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //instancias a un llamado a una api
let API = 'https://rickandmortyapi.com/api/character/';  

function fetchData(url_api, callback){ //recibe dos valores
    //construir la peticion que se va a hacer por medio de XMLHttpRequest
    let xhttp = new XMLHttpRequest(); //igual a la instancia que acabamos de traer 
    xhttp.open("GET", url_api, true); //llamado a una url pasarle cual va a ser la petición, tercer valor true 
    xhttp.onreadystatechange = function(event){ //generar o escuhar lo que esta pasando
        if(xhttp.readyState === 4){ //si el estado en el cual se encuentra es satisfactorio 
            if(xhttp.status ===200){ //permitir saber el status en el cual se encuentra 
                callback(null, JSON.parse(xhttp.responseText	)) //como estoy obteniendo el llamado
            }else { //manejo del error, buena practica 
                const error = new Error("error" + url_api); 
                return callback(error, null)
            }
        }
    }
    xhttp.send(); //ya tenemos la función que va a darle vida a los llamados de mi api
}

//llamado a api

fetchData(API, function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(API+data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2); 
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3); 
            console.log(data1.info.count); 
            console.log(data2.name);
            console.log(data3.dimension); 
        }); 
    })
})

