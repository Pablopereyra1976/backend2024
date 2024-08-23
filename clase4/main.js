"use strict";
/*clase4  crear main.ts*/
/*objeto*/
/*debe ir const*/ /*let producto : producto = {
    nombre: 'Tv samsung',
    precio: 2000,
    id: 1,
    categoria: 'Tecnologia',
    stock: 0,
}*/
/*let producto_2 : producto = {
    nombre: 'Tv samsung',
    precio: 2000,
    id: 1,
    categoria: 'Tecnologia',
    stock: 5,
}
console.log(producto.nombre)
console.log(producto['nombre'])*/
/* creando una propiedad*/
/*producto.stock = 10*/
/*const venderProducto = (producto : {nombre: string, precio: number, id: number, categoria: string, stock: number}) : void => {
    console.log(' has vendido a '+ producto.nombre + ' y ahora me quedan ' + producto.stock)
}
venderProducto(producto)
venderProducto(producto_2)

const mixed : [number, string, boolean] = [10, 'pepe', false]
const nombres : string[] = ['pepe', 'juan', 'pedro']
const notas : number[] = [10,7,5]

const productos : producto[] = [
    producto,
    producto_2
]*/
class Usuarios {
    /*tipado de las propiedades de la funcion constructor*/
    constructor(nombre, role, clave, email, edad, cuit, id) {
        this.nombre = nombre;
        this.role = role;
        this.clave = clave;
        this.email = email;
        this.edad = edad;
        this.cuit = cuit;
        this.id = id;
    }
}
/*const usuario1 = new Usuario('pepe', 'admin', '1234', 'pepe@gmail', 20, 12345678)
const usuario2 = new Usuario('juan', 'admin', '1234', 'juan@gmail', 20, 12345678)

console.log(usuario1)
console.log(usuario2)*/
class ManejadorUsuarios {
    constructor() {
        this.usuarios = [];
        this.id_counter = 0;
    }
    agregarUsuario(nombre, role, clave, email, edad, cuit) {
        const nuevo_usuario = new Usuarios(nombre, role, clave, email, edad, cuit, this.id_counter++);
        this.usuarios.push(nuevo_usuario);
    }
}
const manejador_usuario = new ManejadorUsuarios();
manejador_usuario.agregarUsuario('pepe', 'admin', '1234', 'pepe@gmail', 20, 12345678);
manejador_usuario.agregarUsuario('juan', 'admin', '1234', 'juan@gmail', 40, 2456678);
console.log(manejador_usuario);
