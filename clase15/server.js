//console.log('hola mundo')
import express from 'express'
import userRouter from './routes/users.routes.js'
const app = express()
const PORT = 3000

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


app.listen(PORT, () => {// esta callback se ejecuta cuando se este escuchando mi app en el puerto   
    console.log(`servidor corriendo en el puerto ${PORT}`)
})



