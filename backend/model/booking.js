const mongoose = require("mongoose")


const bookingSchema = new mongoose.Schema({
    bookName:{
        type:String
    },
    type:{
       type:String
    },
    serviceId:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Service",
        default: []
    },
    createdAt:{
          type:Date,
          default:new Date()
    }
})

module.exports = mongoose.model("Booking",bookingSchema)