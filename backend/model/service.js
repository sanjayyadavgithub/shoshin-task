const mongoose = require("mongoose")


const serviceSchema = new mongoose.Schema({
    name:{
        type:String
    },
    type:{
       type:String
    },
    createdAt:{
          type:Date,
          default:new Date()
    }
})

module.exports = mongoose.model("Service",serviceSchema)