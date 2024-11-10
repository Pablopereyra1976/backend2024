console.log("hola mundo")

import express from 'express';
import statusRouter from './routes/status.route.js';
import authRouter from './routes/auth.route.js';
import mongoDB from './config/db.config.js';
import cors from 'cors'

const app = express()
const port = 4000

//midleware que habilita las consultas de origen cruzado
app.use(cors())
app.use(express.json())
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)



app.get('/ping', (req, res) => {
    res.json({status:200, message:"pong", ok:true})
})


app.listen(port, () => {
    console.log(`el servidor se esta ejecutando en http://localhost:${port}`)
})
        
        
        
        
        
        
        
        
        
        