const mongo = require("mongoose")


const Schema = mongo.Schema({
    text:{
        type:String,
        required:[true,"provide the task"],
        trim:true,
        maxlenght:[200,"max limit is 200"]

    },
    compeleted:{
        type : Boolean,
        default:false
    }
})



module.exports = mongo.model("task",Schema)