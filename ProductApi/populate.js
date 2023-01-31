require('dotenv').config()


const jsondata = require("./product.json")
const conn = require("./connectDB/connect")
const ProductSchema = require("./model/model")

const start=async()=>{
    try {
        await conn(process.env.MONGO_DB)
        await ProductSchema.deleteMany()
        await ProductSchema.create(jsondata)
        console.log("succeeded!!!");
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()

