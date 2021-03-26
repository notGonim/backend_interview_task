import express from 'express'
import { createBatch, getBatches } from '../controllers/batch-controller.js'


export const BatchRouter = express.Router()



BatchRouter.post('/batch/new', createBatch)
BatchRouter.get('/batches', getBatches)

