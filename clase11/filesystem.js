/*const filesystem = require('fs')
filesystem.writeFileSync('hola.txt', 'hola mundo desde nodejs',{encoding:'utf-8'})


//filesystem.writeFileSync('prueba.json', JSON.stringify({nombre:'pedro'}),{encoding:'utf-8'}) //transformar un objeto en un string

//const filesystem = require('fs')
//filesystem.writeFileSync('prueba.txt', 'bienvenido desde nodejs',{encoding:'utf-8'})

//const resultado = filesystem.readFileSync('prueba.txt', {encoding:'utf-8'})

const objeto = JSON.parse(filesystem.readFileSync('prueba.json', {encoding:'utf-8'}))  //transformar un string en un objeto
console.log(objeto)*/


const filesystem = require('fs');

//cuando coloca async significa que es una promesa
const createTxt = async(file_name, text) => {
    const file = file_name + '.txt';
    /*filesystem.writeFileSync(file_name, text, {encoding:'utf-8'})*/
await filesystem.promises.writeFile(file_name, text, {encoding:'utf-8'})  //async promesas
let textoGuardado = await filesystem.promises.readFile(file_name, {encoding:'utf-8'})
/*filesystem.writeFile(file_name, text, {encoding:'utf-8'},()=>{
    filesystem.readFile(file_name, {encoding:'utf-8'},(err,data)=>{
        console.log(data)
    })

})*/
console.log('se registro con exito'+' ' + textoGuardado)
}
console.error('no se registro con exito')
console.dir('no se registro con exito')
console.warn('registro con exito')
console.table({nombre:'pedro', apellido:'perez'})
console.trace()

module.exports = {createTxt:createTxt}