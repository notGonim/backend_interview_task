import express from 'express'
import bodyParser from 'body-parser'
import { errors } from './middlewares/error.js'


export const app = express()



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


//to handle all the routes that related to 



//middleware to handle all errors 
app.use(errors)
