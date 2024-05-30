const jwt  = require("jsonwebtoken")

function decodeJWT(token){
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded);
    return decoded
}


module.exports = decodeJWT