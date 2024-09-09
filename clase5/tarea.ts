class Accion {
    private static contadorId = 0;
    id: number;
    comentarios: string;
    fecha: Date;

    constructor(comentarios: string) {
        this.id = Accion.contadorId++;
        this.comentarios = comentarios;
        this.fecha = new Date();
    }

    mostrarAccion(): string {
        return `ID: ${this.id} - comentario: ${this.comentarios} realizada el ${this.fecha}`;
    }
}

class Historial {
    id: number;
    acciones: Accion[];

    constructor(id: number) {
        this.id = id;
        this.acciones = [];
    }

    agregarAccion(accion: Accion) {
        this.acciones.push(accion);
    }

    mostrarAcciones(): void {
        if (this.acciones.length === 0) {
            console.log('No hay acciones');
        } else {
            this.acciones.forEach(accion => {
                console.log(accion.mostrarAccion());
                document.write(accion.mostrarAccion());
            });
        }
    }

    eliminarAccion(id: number): void {
        const index = this.acciones.findIndex(accion => accion.id === id);
        if(index !== -1){
this.acciones.splice(index, 1);
        }
    }

/*const eliminarAccionPorID(id: number): void {
const postAccion = this.acciones.find(accion => accion.id === id);
this.acciones.splice(postAccion, 1);*/



    limpiarHistorial(): void {
        this.acciones = [];
        console.log('Historial limpio');
    }
}


/*crear instancia*/
const historial = new Historial(1);


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
historial.eliminarAccion(3);

/*limpiar el historial*/
historial.limpiarHistorial();   