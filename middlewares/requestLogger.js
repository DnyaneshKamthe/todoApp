const requestLogger = ( req, res, next) => {
    let method = req.method;
    let url = req.url;
    let timeStamp = new Date().toISOString();

    console.log(`[${timeStamp}] ${method} - ${url}`)
    next();
}

module.exports = requestLogger; 