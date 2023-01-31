const ErrorHandler = (err,req,res,next)=>{

    console.log("error",err);
    res.status(404).json({msg:"somethong went wrong, Try again"})
}

module.exports = ErrorHandler