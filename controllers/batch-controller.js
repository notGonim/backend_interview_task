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