class Empleado {
    nombre: string;
    sueldo: number;
    fechaContratacion: string;
    idEmpleado: number;
    puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing';

    constructor(nombre: string, sueldo: number, fechaContratacion: string, idEmpleado: number, puesto: 'Project Manager' | 'Developer' | 'Designer' | 'Marketing') 
       { this.nombre = nombre,
        this.sueldo = sueldo,
        this.fechaContratacion = fechaContratacion,
        this.idEmpleado = idEmpleado,
        this.puesto = puesto
    }
    descripcion(): string {
        return `Empleado(ID: ${this.idEmpleado}, Nombre: ${this.nombre}, puesto: ${this.puesto})`;
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