const mongo = require("mongoose")

const ProductSchema = new mongo.Schema({
    name:{
        type:String,
        required:[true,"provide the name"]
    },
    price:{
        type:Number,
        required:[true,"provide the price"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            message:'{VALUE} is not supported',
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    rating:{
        type:Number,
        default:4.5
    }

})

module.exports = mongo.model("product",ProductSchema)