//console.log('hola mundo')
import express from 'express'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import productIdRouter from './routes/productId.js'


const app = express()
const PORT = 3000
app.use(express.json())



app.get('/ping2', (req, res) => {
    res.json({
        ok:true,
        message: 'consulta exitosa',
        status: 200,
        payload: {
            value: 'pong'
        }
    })
})

app.use(`/api/users`, userRouter)
app.use(`/products`, productRouter)
app.use(`/api/products/id`, productIdRouter)

app.listen(PORT, () => {// esta callback se ejecuta cuando se este escuchando mi app en el puerto   
    console.log(`servidor corriendo en el puerto ${PORT}`)
})



