import express from 'express'
import bodyParser from 'body-parser'


export const app = express()



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


