"use strict";
class Empleado {
    constructor(nombre, sueldo, fechaContratacion, idEmpleado, tipo) {
        this.nombre = nombre,
            this.sueldo = sueldo,
            this.fechaContratacion = fechaContratacion,
            this.idEmpleado = idEmpleado,
            this.tipo = tipo;
    }
    toString() {
        return `Empleado(ID: ${this.idEmpleado}, Nombre: ${this.nombre}, Tipo: ${this.tipo})`;
    }
}
class ManejadorEmpleados {
    constructor(idManejador) {
        this.idManejador = idManejador;
        this.empleados = [];
    }
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} agregado con éxito.`);
    }
    obtenerEmpleadoPorId(idEmpleado) {
        return this.empleados.find(empleado => empleado.idEmpleado === idEmpleado);
    }
    obtenerEmpleadosPorTipo(tipo) {
        return this.empleados.filter(empleado => empleado.tipo === tipo);
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
console.log(empleado === null || empleado === void 0 ? void 0 : empleado.toString()); // Debería imprimir la información de Ana López
// Obtener empleados por tipo
const developers = manejador.obtenerEmpleadosPorTipo("Developer");
developers.forEach(dev => console.log(dev.toString()));
