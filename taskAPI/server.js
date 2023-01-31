const express = require("express")
const {routers} = require("./routers/router")
const {conn} = require("./connect/connect")
const notFound = require("./middleware/notfound")
const errorhandler = require("./middleware/error")
require("dotenv").config()
const app = express()


// middle wares
app.use(express.json())
app.use("/api/v1/tasks",routers)
app.use(notFound)
app.use(errorhandler)


const start=async()=>{
    try {
       const res =  await conn(process.env.MONGO_DB)
       if (res){
        console.log("connect to db");
       } 
       app.listen(5000,()=>{
            console.log("listning at port 5000");
        })
    } catch (error) {
     console.log(error);   
    }
}

start()



