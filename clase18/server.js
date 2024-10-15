import express from 'express'
import express_handlebars from 'express-handlebars'

const app = express()
const PORT = 3001

//configuramos nuestro motor de pantillas

//1) indicamos a la aplicacion que motor debe utilizar
app.engine('handlebars', express_handlebars.engine())

///2) indicamos que usaremos como pantilla
app.set('view engine', 'handlebars')

//3) indicamos la direccion donde estaran nuestras plantillas
app.set('views', './views')

app.use(express.static('public'))
app.get('/', (req, res) => {
    /*res.render
    */
    res.render('home', {
        layout: 'main',
        data: {
            title: 'pagina 26',
            username: 'juancito'
        },
        helpers: {
            isRegistered() {
                return 1 ===1 && 'juancito'.length
            }
            }
    })
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost ${PORT}`)
})