const jwt = require("jsonwebtoken")
const {unAuthenticate} = require("../customerror/errorClass")
const authHandler = async(req,res,next)=>{
try {
    const auth = req.headers.auth
    if (!auth || !auth.startsWith("Bearer ")){
        throw new unAuthenticate("not authenticated")
    }
    const token = auth.split(" ")[1]
    const verify = jwt.verify(token,process.env.JWT_TOKEN)
    req.user = {userID:verify.id,name:verify.name}
    next()
} catch (error) {
    throw new unAuthenticate("not authenticated")
}
}

module.exports = authHandler