import express from 'express'
import {engine} from 'express-handlebars'


const app = express()
const PORT = 3002


app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



const ERRORS_VALIDATION_DICCIONARY = {
    'STRING_VALIDATION': 'STRING_VALIDATION'
    
}


const verifyString = (field_name, field_value) => {
    if(!(typeof(field_value) === 'string')){
        return {
            error: ERRORS_VALIDATION_DICCIONARY.STRING_VALIDATION,
            message: field_name + ' debe ser un texto',
        }
    }
}
const verifyMinLength = (field_name, field_value, minLength) => {
    if(!(field_value.length > minLength)){
        return {
            error: 'MIN_LENGTH_VALIDATION',
            message: field_name + ' debe tener como minimo ' + minLength + ' caracteres',
        }
    }
}

const verifyNumber = (field_name, field_value) => {
    if(!(typeof field_value === 'number')){
        return {
            error: 'NUMBER_VALIDATION',
            message: field_name + ' debe ser un numero',
        }
    }
}

const verifyMinNumber = (field_name, field_value, minNumber) => {
    if(!(field_value > minNumber)){
        return {
            error: 'NUMBER_MIN_VALIDATION',
            message: field_name + ' debe ser un numero mayor a ' + minNumber,
        }
    }
}



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




app.get('/', (req, res) => {
    const view_props = {
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

    res.render('home-view', view_props)

})

app.get('/products/details/:product_id', (req, res) => {
    const { product_id } = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    if (!producto_buscado) {
return res.status(404).send('No se encontro el producto')
    }  
    
    const view_props = {
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
    res.render('details-view', view_props)
})

app.get('/product/new', (req, res) => {
    console.log('consulta recibida')
    //const {nombre, descripcion, stock, precio} = req.body

    const campos_state = [
        { valor: '',
            errors: [],
            component: 'input',
            type: 'text',
            isInput: true,
            placeholder: 'Nombre completo',
            label: 'Ingresa el nombre:',
            name: 'nombre',
            validations: [
                verifyString,
                (field_name, field_value) => verifyMinLength(field_name, field_value, 5)
            ]
        },
        {
            valor: '',
            errors: [],
            isTextarea: true,
            component: 'textarea',
            label: 'Ingresa una descripcion',
            placeholder: 'descripcion',
            name: 'descripcion',
            validations: [
                verifyString,
                (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
            ]
        },
        {
            valor: 0,
            errors:[],
            component: 'input',
            type: 'number',
            isInput: true,
            label: 'Ingresa un stock',
            placeholder: 'ingrese un stock',
            name: 'stock',
            validations: [
                verifyNumber
            ]
        },
        {
            valor: 0,
            errors: [],
            component: 'input',
            type: 'number',
            isInput: true,
            label: 'Ingresa un precio:',
            placeholder: 'Ingrese un valor',
            name: 'precio',
            validations: [
                verifyNumber
            ]
        }
    ]
    const view_props = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            form_state: campos_state,
            
        }
      
    }
    res.render('new-product-view', view_props)
})

app.post('/product/new', (req, res) => {
    console.log('consulta recibida')
    const { nombre, descripcion, stock, precio } = req.body

    const campos_state = [
        {
            valor: nombre.trim(),
            errors: [],
            component: 'input',
            type: 'text',
            isInput: true,
            placeholder: 'Nombre completo',
            label: 'Ingresa el nombre:',
            name: 'nombre',
            validations: [
                verifyString,
                (field_name, field_value) => verifyMinLength(field_name, field_value, 5)
            ]
        },
        {
            valor: descripcion.trim(),
            errors: [],
            isTextarea: true,
            component: 'textarea',
            label: 'Ingresa una descripcion',
            placeholder: 'descripcion',
            name: 'descripcion',
            validations: [
                verifyString,
                (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
            ]
        },
        {
            valor: stock,
            errors:[],
            component: 'input',
            type: 'number',
            isInput: true,
            label: 'Ingresa un stock',
            placeholder: 'ingrese un stock',
            name: 'stock',
            validations: [
                verifyNumber,
                
            ]
        },
        {
            valor: precio,
            errors: [],
            component: 'input',
            type: 'number',
            isInput: true,
            label: 'Ingresa un precio:',
            placeholder: 'Ingrese un valor',
            name: 'precio',
            validations: [
                verifyNumber,
                (field_name, field_value) => verifyMinNumber(field_name, field_value, 2)
            ]
        }
    ]

    let hayErrores = false
    for(let field of campos_state){
        for(let validation of field.validations){
            /* result: {error, message} | undefined */
            let result = validation(field.name, field.valor)
        
            if(result){
                hayErrores = true
                field.errors.push(result)
            }
        }
    }
    console.log({campos_state})

    const view_props = {
        layout: 'main',
        status: 400,
        ok: false,
        data: {
          form_state: campos_state
      
    }
    }
    res.render('new-product-view', view_props)

   
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost:+ ${PORT}`)
})