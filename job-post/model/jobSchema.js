const mongo = require("mongoose")


const jobSchema = new mongo.Schema({
    job:{
        type:String,
        required:[true,"provide the job title"],
        maxlenght:50
    },
    company:{
        type:String,
        required:[true,"provide the company"],
        maxlenght:50
    },
    createdBy:{
        type:mongo.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:["interview","pending","declined"],
        default:"pending"
    }

},{
    timestamps:true
})


module.exports = mongo.model("jobs",jobSchema)