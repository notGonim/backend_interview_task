import express from 'express'
import { createBatch } from '../controllers/batch-controller.js'


export const BatchRouter = express.Router()



BatchRouter.post('/batch/new',createBatch)

