import mongoose from 'mongoose'


const batchSchema = new mongoose.Schema(
    {
        number: {
            required: [true, 'Please Enter the Number of that batch'],
            type: Number,
            unique: [true, 'Number Must be Unique'],
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L', 'XL'],
            required: [true, 'Please Enter the Size of that batch'],
        },
        color: {
            type: String,
            enum: ['red', 'blue', 'black', 'green'],
            required: [true, 'Please Enter the Color of that batch'],
        },
        quantity: {
            required: [true, 'Please Enter the Quantity  of that batch'],
            type: Number,
        }
    }
)





const Batch = mongoose.model('Batches', batchSchema)
export default Batch