const mongo = require("mongoose")

mongo.set('strictQuery', false);

const conncetDB = (url)=>{

    return mongo.connect(url)
}

module.exports = conncetDB