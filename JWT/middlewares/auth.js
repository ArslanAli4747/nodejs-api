const jwt = require("jsonwebtoken")
const {unothorized} = require("../errorclass/errorClass")

const auTH = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new unothorized('No token provided')
    }
  
    const token = authHeader.split(' ')[1]
  
    try {
      const decoded = jwt.verify(token, process.env.JWT)
      const { id, name } = decoded
      console.log(decoded);
      req.user = { id, name }
      next()
    } catch (error) {
      throw new unothorized('Not authorized to access this route')
    }
}

module.exports = auTH