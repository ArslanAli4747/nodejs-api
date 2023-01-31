const {StatusCodes} = require("http-status-codes")
const notFound = (req,res)=>{
    res.status(StatusCodes.NOT_FOUND).send("Route don`t exist")
}

module.exports = notFound