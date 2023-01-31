const {badRequest,unAuthenticate} = require("../customerror/errorClass")
const userSchema =require("../model/userModel")
const {StatusCodes} = require("http-status-codes")

const signup = async(req,res)=>{
    console.log(req.body);
    const {name,email,password} = req.body
    if(!name || !email || !password){
    throw new badRequest("provide all the fields")        
    }
    const user = await userSchema.create({...req.body})
    const token = user.creatJWT()
    res.status(StatusCodes.CREATED).json({name:user.name,token})
}

const login = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new badRequest("provide all the fields")        
        }
    const user =await userSchema.findOne({email})
    if (!user){
        throw new unAuthenticate("wrong credentials")        
       
    }
    const matched =await user.mtch(password)
    if (!matched){
        throw new unAuthenticate("wrong credentials")        
       
    }
    const token = user.creatJWT()
    res.status(StatusCodes.OK).json({user:user.name,token})
}

module.exports = {
    login,
    signup
}