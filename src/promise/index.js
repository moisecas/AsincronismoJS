//construcción de funciones para trabajar con promesas 

const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{ //return de la promesa 
        //pasarle dos argumentos, si se resuelve o si es rechazado
        if (true){ //true o false, sucede diferente según reciba 
            resolve("solventado"); 
        }else {
            reject("nada, no se alcanzo"); // Error que nos permite ver en consola más detalles del error
        }
    });  

};

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.log(err)); //en el package json en scripts dejamos "promise": "node src/promise/index.js" para ejecutar por consola        

  const somethingWillHappen2 = () => {
      return new Promise((resolve, reject) =>{
          if(true){
              setTimeout(()=>{
                  resolve("true"); 

              }, 2000)
          }else{
              const error = new Error("algo no paso que debería"); 
              reject(error); 
          }
      })
  }

  somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err)); 

    // Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.
    //correr varias promesas al mismo  tiempo o encadenadas, promise.all, retorna un arreglo con resultados 

    Promise.all([somethingWillHappen(),somethingWillHappen2()])
        .then(response => {
            console.log("array of results", response); 
        })
        .catch(err=> {
            console.error(err); //usamos el metodo all dentro de promise que va a ejecutar las promesas y nos da un arreglo con la rta
        })

