const {errorHandlerApi} = require("../middleware/errorHandlerCls")
const errorHandler = (err,req,res,next)=>{

    console.log(err);
    if (err instanceof errorHandlerApi){
        return res.status(err.code).json({msg:err.message})

    }
res.status(500).json({msg:"somethin wrong",error:err})

}

module.exports = errorHandler