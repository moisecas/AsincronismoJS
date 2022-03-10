//función que requerimos para trabajar, nueva promesa, async 

const doSomethingAsync = () => { //establecer la promesa 
    return new Promise((resolve,reject)=>{ //retorna la promesa, recibe dos argumentos
        (true)
        ? setTimeout (()=> resolve ("Do something Async"), 4000) //operación ternaria, va a un resolve
        :reject(new Error("test error"))//en caso de que no sea correcto, valida, manejo del eror
    }); 
}
//sintaxis necesaria para manejar async y await 
const doSomething =  async() => { //llamamos nuestra función antes del arrow function le damos async(palabra reservada)
    const something = await doSomethingAsync(); //adentro creo una const, await, vamos a esperar a que suceda
    console.log(something); //mostrar en consola ese elemento
}

console.log("before"); //llamado a la función y resultado por consola, es necesario crear un script en el package json
doSomething();
console.log("after"); 

const  anotherFunction = async () => { //creamos esta función para capturar los errores 
    try{ //le ponemos un try y catch, manejo de errores
        const something = await doSomethingAsync(); //cuantas veces necesite llamar la promesa, llamado a memoria, espera a que sea resuelta
        console.log(something); //lo mostramos por consola
    }catch (error) {
        console.error(error)
    }
}

console.log("before 1 "); 
anotherFunction(); //llamamos la segunda función creada 
console.log("after 1"); 