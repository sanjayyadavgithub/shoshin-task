const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')

const ServiceRouter = require("./router/service")
const BookingRouter = require("./router/booking")

const app = express()

const port = 4000;
app.use(cors)
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/interview").then(res=>{
    console.log("connected successfully")
}).catch(error=>{
    console.log("connection Error",error)
})

app.use("/api/services",ServiceRouter)
app.use("/api/booking",BookingRouter)

app.get("/",(req,res)=>{
    res.send({msg:"working home end point"})
})


app.listen(port,()=>{
    console.log(`application listen on port number ${port}`)
})


