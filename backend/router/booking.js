const express = require("express");
const { createBooking, getBooking, getBookingById } = require("../controller/booking");
const router = express.Router()

router.get("/book",(req,res)=>{
    res.send({msg:"booking router"})
})

router.post("/",createBooking)
router.get("/",getBooking)
router.get("/:id",getBookingById)

module.exports = router