


export const errors = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500

    if (process.env.NODE_ENV === "DEVELOPMENT") {
        res.status(err.statusCode).json(
            {
                success: false,
                error: err,
                errMessage: err.message,
                stack: err.stack
            }
        )
    }

    //wrong mongoose object ID error
    if (err.name === 'CastError') {
        const message = `Resources not found . Invalid : ${err.path}`
        error = new ErrorHandler(message, 400)
    }


    //handle mongoose duplicate error 
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        error = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json(
        {
            success: false,
            error: err.stack
        }
    )

}