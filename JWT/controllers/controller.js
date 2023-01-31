const {customErrorApi,unothorized,badrequest} =require("../errorclass/errorClass")
const jwt = require("jsonwebtoken")
const login = async(req,res)=>{
    const {name,password} = req.body
    if (!name || !password){
        throw new badrequest("provide name and password")
    }
    const id  = new Date().getDate()
    const token = jwt.sign({id,name},process.env.JWT,{expiresIn:"30d"})
    res.status(200).json({tokenid:token})
}

const dasboard = async(req,res)=>{
    const number = Math.floor(Math.random()*100)
    res.status(200).json({
        msg:`Hello, ${req.user.name}`,
        secret:`Here is your authorized data, your lucky number is ${number}`,
    })

}


module.exports = {
    login,dasboard
}