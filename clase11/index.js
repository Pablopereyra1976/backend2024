//punto de entrada o entry point
//npm init -y
//npm i -D nodemon
/*alternativa node --watch
"scripts": {
    "dev": "node --watch index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  alternativa nodemon
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  */

//nodemon
/* es una libreria de desarrolo que nos permite correr el proyecto de forma automaticamente*/
//alternativa nativa de node a nodemon:

//node --watch <filename>
//browser object model (bom)
//en node no existe ni dom ni bom

//console.log("hola mundo")
//console.log("hola mundo")



//require es una funcion que nos permite importar modulos
//const filesystem = require('fs')
//filesystem.writeFileSync('hola.txt', 'hola mundo desde nodejs',{encoding:'utf-8'})


//filesystem.writeFileSync('prueba.json', JSON.stringify({nombre:'pedro'}),{encoding:'utf-8'}) //transformar un objeto en un string

//const filesystem = require('fs')
//filesystem.writeFileSync('prueba.txt', 'bienvenido desde nodejs',{encoding:'utf-8'})

//const resultado = filesystem.readFileSync('prueba.txt', {encoding:'utf-8'})

//onst objeto = JSON.parse(filesystem.readFileSync('prueba.json', {encoding:'utf-8'}))  //transformar un string en un objeto
//console.log(objeto)


const {createTxt} = require('./filesystem.js')
createTxt('prueba', 'bienvenido a todos desde nodejs y varias pruebas')
