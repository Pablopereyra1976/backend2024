/*logica del /api/status*/

import express from 'express'
import { postPingController } from '../controllers/status.controller.js'


const statusRouter = express.Router()

statusRouter.post('/ping', postPingController) 
  
    


statusRouter.post('/ping', postPingController)

export default statusRouter