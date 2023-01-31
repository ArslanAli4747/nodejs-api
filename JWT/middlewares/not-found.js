const {StatusCodes} = require("http-status-codes")
const notFound = (req,res)=>{

    res.status(StatusCodes.NOT_FOUND).send("route not found")
}

module.exports = notFound