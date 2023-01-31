const {customErrorApi} =require("../errorclass/errorClass")
const {StatusCodes} = require("http-status-codes")

const customError = (err,req,res,next)=>{

    if (err instanceof customErrorApi){
        res.status(err.code).json({msg:err.message})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong, try again later"})

}

module.exports = customError