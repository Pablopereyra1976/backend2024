"use strict";
/*const saludar = (persona: string) => {
    console.log('hola'+ persona)
    console.log('hola' + 5)
    console.log('null' + [1,2])
    console.log('' + {})
}


let personita = {
    nombre: 'pedro',
    apellido: 'perez',
}

saludar(personita.nombre)*/
let nombre = null;
if (nombre) {
    console.log(nombre);
}
else {
    console.log('nombre no existe');
}
let edad = 80;
let isRegistered = true;
const calcularIva = (precio) => {
    return precio * 0.21;
};
let resultado = calcularIva(400);
const saludar = (nombre) => {
    console.log('hola' + nombre);
};
saludar('pedro');
const mandarEmail = (to, message = 'nada', subject) => {
    console.log(to, message);
};
mandarEmail('pepito189@gmail.com', 'hola soy yo');
