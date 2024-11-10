import express from 'express'
import { registerController, verifyEmailController, loginController } from '../controllers/auth.controller.js'
import { verifyEmail } from '../helpers/validations.helpers.js'


const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post('/login',loginController)
authRouter.get('/verify-email/:validation_token', verifyEmailController)

export default authRouter