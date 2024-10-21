import express from 'express'
import express_handlebars from 'express-handlebars'

const app = express()
const PORT = 3002


app.use(express.static('public'))

app.engine('handlebars', express_handlebars.engine())


app.set('view engine', 'handlebars')


app.set('views', './views')

app.use(express.urlencoded({ extended: true }))


const productos = [
    {
        id: 1,
        nombre: 'tv noblex',
        precio: 4000,
        descripcion: 'una tv que se puede usar para ver videos',
        categoria: ['tecnologia', 'hogar', 'futbol'],
        stock: 4,
        active: true
    },
    {
        id: 2,
        nombre: 'lavarropas electrolux',
        precio: 5000,
        descripcion: 'un lavarropas que se puede usar para lavar',
        categoria: ['tecnologia', 'hogar', 'lavado'],
        stock: 5,
        active: true
    },
    {
        id: 3,
        nombre: 'laptop MSI',
        precio: 10000,
        descripcion: 'una laptop que se puede usar para programar',
        categoria: ['tecnologia', 'computacion', 'gaming', 'office'],
        stock: 7,
        active: true
    }
]

app.use(express.static('public'))


app.get('/', (req, res) => {
    const view_prop = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            title: 'ofertas de la semana',
            products: productos
        },
        helpers: {
        }
    }

    res.render('home-view', view_prop)

})

app.get('/products/details/:product_id', (req, res) => {
    const { product_id } = req.params
    const producto_buscado = productos.find(producto => product.id === Number(product_id))
    if (!producto_buscado) {
return res.status(404).send('No se encontro el producto')
    }  
    
    const view_prop = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            title: 'ofertas de productos',
            products: producto_buscado,
        },
        helpers: {
        }
    }
    res.render('details-view', view_prop)
})

app.get('/product/new', (req, res) => {
    console.log('consulta recibida')
    const {nombre, descripcion, stock, precio} = req.body

    const campos_state = {
        nombre: {
            valor: nombre,
            error: null,
        },
        stock: {
            valor: stock,
            error: null,
        },
        descripcion: {
            valor: descripcion,
            error: null,
        },
        precio: {
            valor: precio,
            error: null,
        }
    }
    

    if(!nombre){
        campos_state.nombre.error = 'El campo nombre es obligatorio'
    }
    const view_prop = {
        layout: 'main',
        status: 400,
        ok: false,
        data: {
          form_state: campos_state
        },
        helpers: {
        }
    }


    res.render('new-product-view')
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost:+ ${PORT}`)
})