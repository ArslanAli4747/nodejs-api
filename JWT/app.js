require('dotenv').config()
require('express-async-errors')
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const router = require("./routes/routes")
const notfound = require("./middlewares/not-found")
const error = require("./middlewares/custom-error")
app.use(express.json())




app.get("/",(req,res)=>{
res.status(200).send("home")
})
app.use("/api/v1",router)
app.use(notfound)
app.use(error)


const start = async()=>{

    app.listen(port,()=>{
        console.log(`listning of port ${port}`);
    })
}

start()