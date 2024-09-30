//console.log('hola mundo')


/*const procesoAsincronico = async (numero) => {
    console.log('iniciando proceso asincrono' + numero);
};


const testAsyncProcess = async () => {
    await procesoAsincronico(1);
    await procesoAsincronico(2);
    await procesoAsincronico(3);
};

setTimeout(() => {
    procesoAsincronico(1)
    console.log('terminando proceso asincrono' );
}, 1000);
setTimeout(() => {
    procesoAsincronico(2)
    console.log('terminando proceso asincrono' );
}, 2000);
setTimeout(() => {
    procesoAsincronico(3)
    console.log('terminando proceso asincrono');
}, 3000);


testAsyncProcess();


EXPRESS 1
import filesystem from 'fs/promises';
import express from "express"

//se crea una instancia de servidor http
const app = express()
const PORT = 3000


//cuando alguien consulte al endpoint 'obtener_usuarios'
// la callback recibe 2 parametros: request y response
//request es un objeto con datos de consulta
//response es un objeto que usamos para emitir respuesta
/*app.get(`/obtener_usuarios`,async (request, response) => {
    console.log('recibido')*/


    /*llamar a /public/usuarios.json*/
    //response.send('recibida la consulta')
    //response.send({mensaje: "hola", code: 1})
    //const resultado = await filesystem.readFile('./public/usuarios.json', {encoding:'utf-8'})
    //const usuarios = JSON.parse(resultado)
    //response.status(226).json({mensaje: "hola", code: 1, data: usuarios})
    //response.send() nos permite emitir json, HTML, texto plano
    //response.json() nos permite emitir json
    //response.status() nos permite setear el estatus HTTP de respuesta
//})


//listen espera recibir 2 valores: puerto: 3000, callback
/*app.listen(PORT, () => {// esta callback se ejecuta cuando se este escuchando mi app en el puerto
    console.log(`servidor corriendo en el puerto ${PORT}`)
})*/

//http://localhost:3000



// EXPRESS 2
import filesystem from 'fs/promises';
import express from "express"

//se crea una instancia de servidor http
const app = express()
const PORT = 4000

app.get(`/obtener_productos`,async (request, response) => {
    console.log('recibido')
    try {
        //if (true) { // Cambia esta condición para probar diferentes situaciones
            //throw new Error('Error forzado para pruebas');
        //}
        // Lee el archivo productos.json
        const resultado = await filesystem.readFile('./public/productos.json', { encoding: 'utf-8' });
        const productos = JSON.parse(resultado);

        // Responde con un JSON que contiene los productos
        response.json({ mensaje: "productos_obtenidos", status: 200, ok: true, data: productos });
        console.log('enviado')
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener productos:', error);
        response.status(500).json({ mensaje: "error_obteniendo_productos", status: 500, ok: false });
    }

    
})

app.listen(PORT, () => {// esta callback se ejecuta cuando se este escuchando mi app en el puerto
    console.log(`servidor corriendo en el puerto ${PORT}`)
})

//http://localhost:4000