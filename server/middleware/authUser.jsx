const decodeJWT = require("../utility/utility")

function authUser(req,res,next){
    const token  = req.cookies.token

    if(!token){
        return res.send("please login")
    }

    const decoded = decodeJWT(token)
    req.user = decoded

    next()


}

module.exports = authUser
