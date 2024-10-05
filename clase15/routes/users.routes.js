import express from 'express';
import fs from 'fs';
import responseBuilder from '../builders/response.builder.js'


//instancio mi ruta y se la asigno al user router
const userRouter = express.Router()

/*class responseBuilder {
    response = {
        ok: false,
        status: 0,
        message: '',
        payload: {}
    }
    setOk(ok) {
        this.response.ok = ok
        return this
    }

    setStatus(status) {
        this.response.status = status
        return this
    }

    setMessage(message) {
        this.response.message = message
        return this
    }

    setPayload(payload) {
        this.response.payload = payload
        return this
    }

    build() {
        return this.response
    }
}*/

//la usamos como si fuera app, pero ahora tiene asignado las consultas a la ruta /api/users

//Endpoint real : /api/users + /
//voy a buscar en mi lista de usuarios a todos los usuarios y devolverme a los active: true


userRouter.get('/', async (req, res) => {

    try {
        const users = JSON.parse(await fs.promises.readFile('./data/usuarios.json', 'utf-8'))

        //esto genera un objeto {response: ok, status, message, payload}
        const response = new responseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('usuario obtenidos')
            .setPayload(
                { users: users })
            .build()   //siempre va al final
        console.log(response)

        res.json(response)
    }
    catch (error) {
        const response = new responseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Internal server error')
            .setPayload({
                detail: error.message
            })
            .build()
        res.status(500).json(response)
    }

})

//userRouter.delete('/:id', async (req, res) => {






export default userRouter