import express from 'express'
import { createBatch, getBatches, getBatchesCnt } from '../controllers/batch-controller.js'


export const BatchRouter = express.Router()



BatchRouter.post('/batch/new', createBatch)
BatchRouter.get('/batch', getBatches)

/*
-- use this route if you want to get certain batches just use color and size words to filter data
-- api/batch?color=red&&size=S
BatchRouter.get('/batch', getBatchesCnt )
*/


