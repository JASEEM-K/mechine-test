import express from 'express'
import connectDb from './lib/connectDb.js';
import appRouter from './router/router.js'
import 'dotenv/config'

const PORT = process.env.PORT;

const app = express()

app.use(express.json())

app.use("/api", appRouter)

app.listen(PORT, () => {
	connectDb()
	console.log(`Server is running on http:localhost:${PORT}`)
})



