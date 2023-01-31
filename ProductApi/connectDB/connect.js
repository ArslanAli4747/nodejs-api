const mongo = require("mongoose")
mongo.set('strictQuery',true)
const connect =(url)=>{
    return mongo.connect(url)

}

module.exports = connect