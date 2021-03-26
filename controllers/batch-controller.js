import { asyncError } from "../middlewares/catchAsyncError.js"
import Batch from "../models/batch-model.js"



//create Batch    ---> /api/batch/new
export const createBatch = asyncError(async (req, res, next) => {

    const batch = await Batch.create(req.body)
    res.status(200).json({
        success: true,
        batch
    })
})


//get all the batches ----> api/batch
export const getBatches = asyncError(async (req, res, next) => {

    const batches = await Batch.find()
    res.status(200).json({
        success: true,
        batches
    })

})



//this func should be refactor and to rewrite its code again coz i am not splitting the code the right way but this is the fastest way to get the res

/*

*** well for sure to search for a specific data and filter it you should spilt it to another func 
so the first function needed is search() where it takes batches data and color&&size  needed then filter the data and return the new array of batches obj 


-- will with this function you can either get batches with certain color only   api/batch?color=---
-- will with this function you can either get batches with certain color && size  api/batch?color=---&&size=---
-- will with this function you can either get batches with certain color or get all the batches  api/batch 
-- if you didnt give color then you  git all batches 
*/
export const getBatchesCnt = asyncError(async (req, res, next) => {

    const batchesCount = await Batch.countDocuments()
    let filteredBatchesCount = 0
    let batches = await Batch.find()

    if (req.query.color && req.query.size) {
        batches = await Batch.find({ color: req.query.color, size: req.query.size })
        filteredBatchesCount = batches.length

    } else if (req.query.color) {
        batches = await Batch.find({ color: req.query.color })
        filteredBatchesCount = batches.length
    }


    res.status(200).json(
        {
            success: true,
            batchesCount,
            filteredBatchesCount,
            batches
        }
    )


})
