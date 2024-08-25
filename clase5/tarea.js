"use strict";
class Accion {
    constructor(comentarios) {
        this.comentarios = comentarios;
        this.fecha = new Date();
    }
    mostrarAccion() {
        return `${this.comentarios} realizada el ${this.fecha}`;
    }
}
class Historial {
    constructor() {
        this.acciones = [];
    }
    agregarAccion(accion) {
        this.acciones.push(accion);
    }
    mostrarAcciones() {
        if (this.acciones.length === 0) {
            console.log('No hay acciones');
            document.write('No hay acciones');
        }
        else {
            this.acciones.forEach(accion => {
                console.log(accion.mostrarAccion());
                document.write(accion.mostrarAccion());
            });
        }
    }
    eliminarAccion(indice) {
        if (indice > 0 && indice <= this.acciones.length) {
            this.acciones.splice(indice - 1, 1);
            console.log(`Accion ${indice} eliminada`);
            document.write(`Accion ${indice} eliminada`);
        }
        else {
            console.log('indice invalido');
        }
    }
    limpiarHistorial() {
        this.acciones = [];
        console.log('Historial limpio');
        document.write('Historial limpio');
    }
}
/*crear instancia*/
const historial = new Historial();


/*crear acciones*/
const accion1 = new Accion('el producto es de buena calidad');
const accion2 = new Accion('desastroso, el producto se rompio');
const accion3 = new Accion('el producto fue bueno en precio/calidad');


/*agregar acciones*/
historial.agregarAccion(accion1);
historial.agregarAccion(accion2);
historial.agregarAccion(accion3);


/*ver todas las acciones*/
historial.mostrarAcciones();

/*eliminar la tercera accion*/
historial.eliminarAccion();

/*limpiar el historial*/
historial.limpiarHistorial();
