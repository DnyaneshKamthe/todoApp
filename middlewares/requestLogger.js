const requestLogger = ( req, res, next) => {
    let method = req.method;
    let url = req.url;
    let timeStamp = new Date().toISOString();
    let IP = req.ip;
    console.log(`[${timeStamp}] ${method} - ${url} IP : ${IP} `)
    next();
}

module.exports = requestLogger; 