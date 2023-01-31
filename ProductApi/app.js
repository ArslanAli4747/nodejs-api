require("dotenv").config()
require("express-async-errors")
const express  = require("express")
const app = express()
const port = process.env.PORT || 5000
const notFound = require("./middleware/notFound")
const ErrorHandler = require("./middleware/Error")
const connect = require("./connectDB/connect")
const router = require("./routes/router")

app.use(express.json())
app.get("/",(req,res)=>{

    res.status(200).send(
        `<h1>Store Api</h1>
        <a href="/api/v1/products">products route</a>`
    )
})
app.use("/api/v1/products",router)
app.use(notFound)
app.use(ErrorHandler)


const start = async()=>{
    try {
       const res = await connect(process.env.MONGO_DB) 
       if (res){
        console.log("connected to database");
       }
       app.listen(port,()=>{
            console.log(`listning at Port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()