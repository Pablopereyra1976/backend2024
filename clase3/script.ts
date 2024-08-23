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
let nombre : string | null = null

if(nombre){
    console.log(nombre)
}
else{
    console.log('nombre no existe')
}

let edad: number = 80
let isRegistered : boolean = true

const calcularIva = (precio : number) : number => {
    return precio * 0.21
}
let resultado : number = calcularIva(400)

const saludar = (nombre : string) :void => {
    console.log('hola' + nombre)
}
saludar('pedro')


const mandarEmail = (to : string, message: string = 'nada', subject?: string) : void => {
    console.log(to, message)
}
mandarEmail('pepito189@gmail.com', 'hola soy yo')



