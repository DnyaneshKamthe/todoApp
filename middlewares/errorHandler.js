const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    const status = err.status;
    res.status(status).json({
        message : err. message,
        error : err
    })
}

module.exports = errorHandler;