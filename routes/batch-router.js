import express from 'express'
import { createBatch, getBatches, getBatchesCnt } from '../controllers/batch-controller.js'


export const BatchRouter = express.Router()



BatchRouter.post('/batch/new', createBatch)
BatchRouter.get('/batch', getBatchesCnt)


