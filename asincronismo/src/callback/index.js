function sum(num1,num2){
    return num1+num2
}

//función que recibe como argumento a sum 

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(2,2,sum));  