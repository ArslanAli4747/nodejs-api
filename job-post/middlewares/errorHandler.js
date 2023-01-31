const {customErrorApi} = require("../customerror/errorClass")
const {StatusCodes} = require("http-status-codes")


const errorHandler = (err,req,res,next)=>{

    if (err instanceof customErrorApi){
      return  res.status(err.code).json({error:err.message})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"something went wrong, try again later"})
    
}

module.exports = errorHandler