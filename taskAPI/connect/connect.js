const mongo = require("mongoose")

mongo.set('strictQuery',true)
const conn = (url)=>{
    return  mongo.connect(url)
    }

// conn(process.env.MONGO_DB)
module.exports = {conn}
