import express from 'express'
import bodyParser from 'body-parser'
import { errors } from './middlewares/error.js'
import { BatchRouter } from './routes/batch-router.js'


export const app = express()



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


//to handle all the routes that related to batches 
app.use('/api', BatchRouter)




//middleware to handle all errors 
app.use(errors)
