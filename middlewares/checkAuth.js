const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    try {
        //extract token
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message : "Authentication failed : No token"});
        }
        // verify token 
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // adding user data to request for further use
        req.user = decodedToken;
        next()
    } catch (error) {
        res.status(401).json({message : "Authentication failed : invalid token"})   
    }
}

module.exports = checkAuth;