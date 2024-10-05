
import express from 'express'

const app = express()
const PORT = 8000

//middleware = es un codigo / programa que se ejecuta entre medio de otro programa
//todas las consultas http que se hagan a mi servidor pasaran por app.use
//que hace express.json()? si los headers de la consulta son content-type: application/json entonces guardara el body como JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//crear un endpoint
///ping => vamos a responder con pong

app.get('/ping', (req, res) => {
    //response.send('pong')
    //response.ok = si la respuesta se hizo bien o no
    //response.status = determinamos como fue resuelta la operacion
    //response.payload / response.data / response.result = objeto con informacion(data)

    const response = {
        ok: true,
        status: 200,
        payload: {
            message: 'pong'
        }
    }
    //se puede usar .json
    res.send(response)
})
//crear un endpoint POST llamado register al que le pasaran un username y una password
//validar que username y password sean datos string nop vacios
//si hay error de validacion responder ok: false, status:400, payload:{message: 'debe tener un username valido'}
//sino mpstar los datos por consola
//responder en caso de que todo este bien con ok: true, status: 201, payload:{message: 'usuario registrado'}
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})

app.post('/ping', (req, res) => {
    console.log(req.params)
    //capturar los datos del body
    //el body esta en la request
    //este es el body req.body
    console.log('este es el body: ', req.body)
    console.log(req.body.nombre)
    console.log(req.body.edad)
    const response = {
        ok: true,
        status: 200,
        message: 'consulta realizada con exito',
        payload: {

        }
    }
    res.send(response)
})

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            const response = {
                ok: false,
                status: 400,
                message: 'debe tener un username y password valido',
                payload: {

                }
            }
            res.json(response)
        }
        const response = {
            ok: true,
            status: 201,
            message: 'usuario registrado',
            payload: {
                username,
                password
            }
        };
        res.json(response);

    } catch (error) {
        console.error(error);

        const response = {
            ok: false,
            status: 500,
            message: 'ocurrio un error',
            payload: {
                error
            }
        };
            res.json(response);
        
        }
        console.log('username: ', username);
        console.log('password: ', password);
    });

    /*
       app.post('/register', (req, res) => {
    //Estado incial de la respuesta
    const response = {
        ok: false,
        status: 0,
        message: '',
        payload: {}
    }
    const { username, password } = req.body;
    try {


        if(!username.trim()){
            response.ok = false
            response.status = 400
            response.message =  'Error de solicitud'
            response.payload.detail = 'El username debe ser un string no vacio'
            //El return lo hago para cortar la funcion
            return res.json(response)
        }
        if(!password.trim()){
            response.ok = false
            response.status = 400
            response.message = 'Error de solicitud'
            response.payload.detail = 'El password debe ser un string no vacio'
            return res.json(response)
        }

        //Si todo sale bien
        response.status = 200
        response.ok = true
        response.message = 'Usuario creado con exito'
        response.payload = {
            username,
            password
        }

        return res.json(response);

    } catch (error) {
        console.error(error);
        response.ok = false
        response.status = 500
        response.message = 'Internal server error'
        response.payload.detail = error.message
        return res.json(response);
    }
});*/
       





const productos = [
    {
        id: 1,
        nombre: 'Pantalon',
        precio: 100,
        imagen: 'https://picsum.photos/id/237/200/300',
        descripcion: 'Pantalon deportivo',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Camisa',
        precio: 50,
        imagen: 'https://picsum.photos/id/238/200/300',
        descripcion: 'Camisa deportiva',
        stock: 5
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 200,
        imagen: 'https://picsum.photos/id/239/200/300',
        descripcion: 'Zapatos deportivos',
        stock: 20
    }
]
app.get('/productos', (req, res) => {
    //req.params es un objeto que guardara todos mis parametros de busqueda
    //los valores de mi req.params seran strings
    //api/cart/:user_id/:card_id se guardara en req.params como {user_id: 'valor', card_id: 'valor'}
  
  
    const respuesta = {
        ok: true,
        status: 200,
        payload: {
            message: 'Productos obtenidos',
            productos: productos
        }
    }
    res.json(respuesta);
})

app.get('/productos/:producto_id', (req, res) => {
    //req.params es un objeto que guardara todos mis parametros de busqueda
    //los valores de mi req.params seran strings
    //api/cart/:user_id/:card_id se guardara en req.params como {user_id: 'valor', card_id: 'valor'}
    console.log(req.params)
    const { producto_id } = req.params;
const min_price = req.query.min_price;

    //todo verificar que venga un producto_id
    const producto_buscado = productos.find(producto => producto.id === Number(producto_id))
    if (!producto_buscado) {
        //respuesta 404
        return res.status(404).json({
            ok: false,
            status: 404,
            message: 'Producto no encontrado'
        });
    }
    if (min_price && producto_buscado.precio < Number(min_price)) {
        return res.status(400).json({
            ok: false,
            status: 400,
            message: `El producto tiene un precio menor que el mínimo (${min_price})`
        });
    }

    
    const respuesta = {
        ok: true,
        status: 200,
        payload: {
            message: 'Productos obtenidos',
            productos: producto_buscado
        }
    }
    res.json(respuesta);
})








