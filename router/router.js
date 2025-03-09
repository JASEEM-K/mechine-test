import { Router } from 'express'
import { addMessageHandler, getMessageHandler } from '../controllers/routereHandler.js'

const appRouter = Router()

appRouter.get("/", getMessageHandler)

appRouter.post("/", addMessageHandler)


export default appRouter
