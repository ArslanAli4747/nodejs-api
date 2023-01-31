require("express-async-errors")
require("dotenv").config()
const express = require("express")
const app = express()

//connection to db
const connection = require("./connectDB/connectDB")

// routes
const userRoute = require("./routes/userRoute")
const jobRoute = require("./routes/jobRoute")

//middelwares
const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/errorHandler")
const authHandler = require("./middlewares/authHandler")
//security

const helmet = require("helmet")
const xss = require("xss-clean")
const limiter = require("express-rate-limit")
const cors = require("cors")


app.set("trust proxy",1)
app.use(limiter({
    windowMs:15*60*1000, //15 minutes
    max:100, //limit each IP to 100 requests per windowMs
    
})
);
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("home")
})

app.use("/api/v1/auth",userRoute)
app.use("/api/v1/jobs",authHandler,jobRoute)


app.use(notFound)
app.use(errorHandler)




//port setting
const port = process.env.PORT || 5000
const start = async()=>{

    try {
        await connection(process.env.MONGO_DB)
    } catch (error) {
        console.log("not connected to database");
    }
    app.listen(port,()=>{
        console.log("listning on port ",port);
    })
}

start()