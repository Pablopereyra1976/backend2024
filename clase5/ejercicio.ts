class Empleado {
    nombre: string;
    sueldo: number;
    fechaContratacion: string;
    idEmpleado: number;
    puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing';


    constructor(nombre: string, sueldo: number, fechaContratacion: string, idEmpleado: number, puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing') {
        this.nombre = nombre,
        this.sueldo = sueldo,
        this.fechaContratacion = fechaContratacion,
        this.idEmpleado = idEmpleado,
        this.puesto = puesto
    }
    descripcion(): string {
        return `Empleado(ID: ${this.idEmpleado}, Nombre: ${this.nombre}, puesto: ${this.puesto})`;
    }


    presentarse(nombre: string) {
        console.log("hola " + nombre + " soy " + this.nombre + ' y trabajo como ' + this.puesto);
    }
}
class Pasante extends Empleado {
    tiempoDeContratoEnMeses: number;
    constructor(nombre: string, sueldo: number, fechaContratacion: string, idEmpleado: number, puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing', tiempoDeContratoEnMeses: number) {
        super(nombre, sueldo, fechaContratacion, idEmpleado, 'Developer');
        this.tiempoDeContratoEnMeses = tiempoDeContratoEnMeses;
    }
    hacerCosasDePasante(){
        if(this.puesto === 'Developer'){
            console.log('Estoy programando');
        }
        }

   
}



class ManejadorEmpleados {
    idManejador: number;
    empleados: Empleado[];

    constructor(idManejador: number) {
        this.idManejador = idManejador;
        this.empleados = [];
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} agregado con éxito.`);
    }

    obtenerEmpleadoPorId(idEmpleado: number): Empleado | undefined {
        return this.empleados.find(empleado => empleado.idEmpleado === idEmpleado);
    }

    obtenerEmpleadosPorPuesto(puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing'): Empleado[] {
        return this.empleados.filter(empleado => empleado.puesto === puesto);
    }
}
const Pasante1 = new Pasante("Pedro Lopez", 50000, "2022-01-15", 1, "Developer", 6);
const empleado4 = new Empleado("Sofía Vega", 80000, "2022-01-15", 4, "Marketing");

Pasante1.presentarse('pedro');
empleado4.presentarse('sofia');
Pasante1.hacerCosasDePasante();

const manejador = new ManejadorEmpleados(1);



// Crear empleados
const empleado1 = new Empleado("Juan Pérez", 50000, "2022-01-15", 1, "Developer");
const empleado2 = new Empleado("Ana López", 60000, "2021-05-20", 2, "Designer");
const empleado3 = new Empleado("Carlos Ruiz", 70000, "2020-09-30", 3, "Project Manager");



// Agregar empleados al manejador
manejador.agregarEmpleado(empleado1);
manejador.agregarEmpleado(empleado2);
manejador.agregarEmpleado(empleado3);




// Obtener un empleado por ID
const empleado = manejador.obtenerEmpleadoPorId(2);
console.log(empleado?.descripcion());  // Debería imprimir la información de Ana López




// Obtener empleados por tipo
const developers = manejador.obtenerEmpleadosPorPuesto("Developer");
developers.forEach(dev => console.log(dev.descripcion()));  